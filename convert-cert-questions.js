// Batch convert CEH/OSCP/PNPT questions to {q, a} format + fix dvwa placeholders
const fs = require('fs');
const path = require('path');

// ========== CEH ANSWERS ==========
const cehAnswers = {
  // Module 1
  'What are the 5 phases of ethical hacking?': '1) Reconnaissance (info gathering). 2) Scanning (port/vuln scanning). 3) Gaining Access (exploitation). 4) Maintaining Access (persistence, backdoors). 5) Covering Tracks (log clearing, timestomping). Each maps to MITRE ATT&CK tactics.',
  'What is the difference between a vulnerability assessment and a penetration test?': 'VA identifies and lists vulnerabilities via automated scanning (breadth-focused). Pentest actively exploits vulnerabilities to demonstrate real-world impact (depth-focused). VA answers "what vulnerabilities exist?" Pentest answers "what can an attacker DO?"',
  'Name the 7 stages of the Cyber Kill Chain': '1) Reconnaissance. 2) Weaponization (create payload). 3) Delivery (phishing, USB). 4) Exploitation (trigger vulnerability). 5) Installation (install backdoor). 6) Command & Control (establish C2). 7) Actions on Objectives (data theft, destruction).',
  'What is the MITRE ATT&CK framework used for?': 'A knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. 14 tactics from Reconnaissance to Impact. Used by red teams to plan attacks, blue teams to detect threats, and to map coverage gaps.',
  'What laws govern data protection in the EU?': 'GDPR (General Data Protection Regulation) — governs personal data processing. Key: consent, right to erasure, breach notification within 72 hours, fines up to €20M or 4% of global revenue. Also: ePrivacy Directive, NIS2 Directive for critical infrastructure.',
  'What is the difference between black-box, white-box, and grey-box testing?': 'Black-box: no prior knowledge (simulates external attacker). White-box: full access to source code, architecture, credentials. Grey-box: partial knowledge (compromised user or insider). Grey-box is most common in real pentests.',
  'What is the CIA triad?': 'Confidentiality (only authorized access — encryption), Integrity (data unaltered — hashing, checksums), Availability (systems accessible when needed — redundancy, DDoS protection). Every security control maps to one or more of these.',
  'Define: Threat, Vulnerability, Exploit, Risk': 'Threat: potential cause of an incident (e.g., attacker). Vulnerability: weakness that can be exploited (e.g., unpatched server). Exploit: code/technique that leverages a vulnerability. Risk = Probability of threat exploiting vulnerability × Impact.',
  'What are the three types of security controls?': 'Administrative/Managerial: policies, training, background checks. Technical/Logical: firewalls, encryption, ACLs, IDS/IPS. Physical: locks, cameras, guards, biometrics. Each can be Preventive, Detective, or Corrective.',
  'What is a Zero-Day Attack?': 'An attack exploiting a vulnerability unknown to the vendor with no available patch. "Zero days" = zero days to fix. Extremely valuable ($50K-$2.5M+ on markets). Defense: behavior-based detection, network segmentation, least privilege.',

  // Module 2
  'What Google Dorks can reveal sensitive information?': 'site:target.com (limit to domain), filetype:pdf/xls/doc (find documents), intitle:"index of" (directory listings), inurl:admin (admin pages), "password" filetype:log (leaked passwords), ext:sql "insert into" (database dumps). Google Hacking Database (GHDB) has 6000+ dorks.',
  'How does WHOIS footprinting work?': 'WHOIS queries registrar databases for domain registration info: registrant name/org, email, phone, registration/expiry dates, nameservers. Tools: whois command, who.is website. Attackers use this for social engineering, finding admin emails, identifying infrastructure.',
  'What information can DNS enumeration reveal?': 'A records (IP addresses), MX records (mail servers), NS records (nameservers), TXT records (SPF, DKIM — reveal email infrastructure), CNAME (aliases), SOA (authority info). Zone transfer (AXFR) can dump ALL records: dig axfr target.com @ns1.target.com.',
  'How does email header analysis help in reconnaissance?': 'Email headers reveal: sender IP, mail servers used (Received: headers), SPF/DKIM results, X-Mailer (email client), internal hostnames, relay servers. Trace the email path from originator to recipient. Tool: theHarvester for email discovery.',
  'What is the purpose of the robots.txt file?': 'robots.txt tells search engine crawlers which paths to NOT index. For pentesters: it reveals hidden directories and admin panels the site owners want to hide. Always check /robots.txt and /sitemap.xml during reconnaissance. Common finds: /admin, /backup, /old, /staging.',

  // Module 3
  'What is the difference between active and passive scanning?': 'Passive: no packets sent to target — monitor existing traffic, use public databases (Shodan, Censys). Active: send probes to target — Nmap port scans, vulnerability scans. Active is detectable; passive is not. Start passive, then active with authorization.',
  'What are the different types of port scans?': 'TCP Connect (-sT): full handshake, noisy. SYN Stealth (-sS): half-open, stealthier. FIN/XMAS/NULL: firewall evasion scans. ACK (-sA): map firewall rules. UDP (-sU): find UDP services. Idle/Zombie (-sI): IDS evasion using zombie host.',
  'How does a SYN scan differ from a connect scan?': 'SYN scan (-sS) sends SYN, receives SYN-ACK (open) or RST (closed), then sends RST — never completes handshake. Stealthier, faster, requires root. Connect scan (-sT) completes full 3-way handshake — creates full connection in logs. More detectable.',
  'What is banner grabbing?': 'Connecting to a service and reading the banner/greeting message to identify software name and version. Manual: nc target 80 → type "HEAD / HTTP/1.0". Nmap: -sV flag. Reveals exact versions for CVE searching. Example: "OpenSSH_8.2p1 Ubuntu".',
  'How does Nmap OS fingerprinting work?': 'Nmap sends specially crafted TCP/UDP/ICMP probes and analyzes the responses (TTL, window size, TCP options, IPID). Each OS has a unique fingerprint. Flag: -O. Works because different OS implementations have subtle differences in their TCP/IP stack behavior.',

  // Module 4
  'What information can be gathered from LDAP enumeration?': 'User accounts, group memberships, computer accounts, OUs, password policies, service accounts, GPO information. Tools: ldapsearch, enum4linux-ng, JXplorer. Critical for AD attacks — reveals the entire organization structure.',
  'How does SNMP enumeration work?': 'SNMP (port 161 UDP) uses community strings (like passwords) to read device info. Default: "public" (read) and "private" (write). Reveals: system info, network interfaces, ARP tables, routing tables, installed software. Tools: snmpwalk, snmpenum, onesixtyone.',
  'What is NFS and how can it be exploited?': 'Network File System allows remote file sharing. Enumerate: showmount -e TARGET. If shares have no_root_squash, uploaded files execute as root. Mount: mount -t nfs TARGET:/share /mnt. Check for sensitive files (SSH keys, /etc/shadow).',
  'What is NetBIOS enumeration?': 'NetBIOS (ports 137-139) provides naming, session, and datagram services on Windows networks. Enumeration reveals: hostnames, domain names, MAC addresses, logged-in users, shares. Tools: nbtstat -A target, nbtscan, enum4linux. Often reveals SMB/file sharing misconfigurations.',

  // Module 5 - Vulnerability Analysis
  'What is a vulnerability assessment lifecycle?': '1) Asset Discovery (what do we have?). 2) Vulnerability Scanning (automated tools — Nessus, OpenVAS). 3) Analysis (remove false positives, validate findings). 4) Prioritization (CVSS scoring, business context). 5) Remediation (patch, mitigate). 6) Verification (rescan). 7) Reporting.',
  'What is the CVSS scoring system?': 'Common Vulnerability Scoring System rates vulnerabilities 0-10. None(0), Low(0.1-3.9), Medium(4.0-6.9), High(7.0-8.9), Critical(9.0-10.0). Based on: Attack Vector, Complexity, Privileges Required, User Interaction, Scope, CIA Impact. Example: RCE, no auth, network = 9.8+.',
  'Name common vulnerability scanning tools': 'Nessus (most popular commercial), OpenVAS (free/open-source), Qualys (cloud-based), Rapid7 InsightVM/Nexpose, Burp Suite Pro (web), Nuclei (template-based), Nikto (web server), WPScan (WordPress). Always validate scanner findings manually.',
  'What is the difference between a false positive and a false negative?': 'False Positive: scanner reports a vulnerability that doesn\'t actually exist — wastes time. False Negative: scanner MISSES a real vulnerability — dangerous. Always manually verify critical findings. FP rate of 20-40% is common with automated scanners.',

  // Module 6 - System Hacking
  'Explain the system hacking methodology': '1) Gaining Access: password attacks (brute force, dictionary, pass-the-hash), vulnerability exploitation. 2) Escalating Privileges: kernel exploits, SUID abuse, service misconfigurations. 3) Maintaining Access: backdoors, rootkits, scheduled tasks. 4) Covering Tracks: log clearing, timestomping, NTFS ADS.',
  'What is a rainbow table attack?': 'Pre-computed table mapping hashes to their plaintext passwords. Instead of computing each hash during an attack, you look it up. Extremely fast but requires massive storage. Defeated by: salted hashes (salt + password → hash). Modern systems use salted bcrypt/argon2.',
  'How do Windows password hashes work?': 'Windows stores NTLM hashes (MD4-based) in SAM database (local) or NTDS.dit (domain). Format: LM:NTLM. LM hash is deprecated (weak). NTLM hash is unsalted — enables Pass-the-Hash. Dump: mimikatz, secretsdump.py, hashdump (meterpreter). Crack: hashcat -m 1000.',
  'What are the main privilege escalation techniques?': 'Linux: SUID binaries, sudo misconfigs, kernel exploits, cron jobs, writable /etc/passwd, capabilities, NFS no_root_squash. Windows: Unquoted service paths, weak service permissions, DLL hijacking, SeImpersonate (Potato attacks), Always Install Elevated, stored credentials.',
  'What is steganography?': 'Hiding data within other files (images, audio, video, text) to avoid detection. Tools: steghide (embed/extract in JPEG), openstego, snow (whitespace steganography). Used for: covert communication, data exfiltration, hiding malware. Detect with: stegseek, binwalk, strings.',

  // Module 7-8 - Malware & Sniffing
  'What are the types of malware?': 'Virus (self-replicating, needs host file), Worm (self-replicating, standalone), Trojan (disguised as legitimate), Ransomware (encrypts files), Spyware (monitors user), Adware (serves ads), Rootkit (hides in OS), Botnet (network of infected machines), Keylogger, Fileless malware.',
  'How does a rootkit work?': 'Rootkits modify the OS to hide attacker presence. Types: User-mode (hook system calls), Kernel-mode (modify kernel — most dangerous), Bootkit (infect boot process), Firmware (persist in hardware). Detection: rkhunter, chkrootkit, memory forensics. Remediation: often requires OS reinstall.',
  'What is sniffing and what tools are used?': 'Capturing network packets passing through a network interface. Tools: Wireshark (GUI), tcpdump (CLI), tshark (CLI Wireshark). Active sniffing: ARP poisoning to redirect traffic (Bettercap, Ettercap). Passive sniffing: only works on hubs or with port mirroring. Capture credentials, sessions, data.',
  'How does ARP poisoning enable MITM?': 'Attacker sends fake ARP replies: tells victim "I am the gateway" and tells gateway "I am the victim". Both update their ARP tables. All traffic flows through attacker. Tool: arpspoof -i eth0 -t VICTIM GATEWAY. Then sniff with Wireshark. Defense: Dynamic ARP Inspection (DAI), static ARP entries.',

  // Module 9 - Social Engineering
  'What are the types of social engineering attacks?': 'Phishing (email), Spear Phishing (targeted email), Whaling (targeting executives), Vishing (voice/phone), Smishing (SMS), Pretexting (fabricated scenario), Baiting (infected USB), Tailgating (following into secured area), Quid Pro Quo, Watering Hole (compromise trusted website).',
  'How do you create a phishing campaign?': 'Tools: GoPhish (open-source), SET (Social Engineering Toolkit). Steps: 1) Clone target login page. 2) Register lookalike domain. 3) Set up email server. 4) Create convincing email template. 5) Send to target list. 6) Capture credentials. 7) Report results. Always get written authorization first!',

  // Module 10-11 - DoS & Session Hijacking
  'What is the difference between DoS and DDoS?': 'DoS (Denial of Service): single source overwhelms target. DDoS (Distributed DoS): multiple sources (botnet) attack simultaneously — much harder to mitigate. Types: Volumetric (bandwidth flooding), Protocol (SYN flood, Ping of Death), Application Layer (HTTP floods, Slowloris).',
  'How does session hijacking work?': 'Stealing or predicting a valid session token to impersonate a user. Methods: 1) Session sniffing (capture cookie over HTTP). 2) XSS (steal cookie via JS). 3) Session fixation (force known session ID). 4) Session prediction (weak random generation). Defense: HTTPS, HttpOnly/Secure flags, session rotation.',

  // Module 12-13 - IDS/Firewalls & Web Servers  
  'How do you evade an IDS?': 'Fragmentation (split packets), encryption (SSL/TLS tunnels), protocol manipulation, slow scanning, polymorphic shellcode, using allowed ports (80/443), encoding payloads, decoy scans, IPv6 tunneling, living off the land (LOLBins).',
  'What are common web server vulnerabilities?': 'Default configurations/credentials, directory listing enabled, unpatched software (CVEs), misconfigured headers (no CSP/HSTS), exposed admin panels, server-side includes, path traversal, HTTP verb tampering, WebDAV misconfigurations.',

  // Module 14 - Web Application Hacking
  'How does a SQL injection attack work step by step?': '1) Find injectable parameter: add \' to inputs. 2) Determine DB type from error messages. 3) Find column count: ORDER BY 1,2,3... 4) UNION-based extraction: UNION SELECT 1,2,version(),4. 5) Enumerate databases, tables, columns. 6) Extract data. Automated: sqlmap -u "url?id=1" --dbs --dump.',
  'What is SSTI and how do you exploit it?': 'Server-Side Template Injection occurs when user input is embedded in template engines (Jinja2, Twig, Freemarker). Test: {{7*7}} → if page shows 49, it\'s vulnerable. Exploit: {{config.items()}} (Jinja2 info leak), {{namespace.__init__.__globals__}} (RCE path). Prevention: never pass user input to template rendering.',
  'What is insecure deserialization?': 'When an application deserializes untrusted data, an attacker can manipulate serialized objects to achieve RCE, privilege escalation, or data tampering. Examples: Java (ysoserial), PHP (unserialize), Python (pickle), .NET (BinaryFormatter). OWASP #8. Defense: never deserialize untrusted data.',

  // Module 15-20
  'How does WPA2 cracking work?': '1) Monitor mode: airmon-ng start wlan0. 2) Capture handshake: airodump-ng + aireplay-ng (deauth). 3) Crack: aircrack-ng handshake.cap -w wordlist.txt or hashcat -m 22000. Requires capturing the 4-way handshake. WPA3 uses SAE which resists this attack.',
  'What are the main mobile security threats?': 'OWASP Mobile Top 10: Improper Platform Usage, Insecure Data Storage, Insecure Communication, Insecure Authentication, Insufficient Cryptography, Insecure Authorization, Client Code Quality, Code Tampering, Reverse Engineering, Extraneous Functionality.',
  'What is the difference between IaaS, PaaS, and SaaS?': 'IaaS (Infrastructure): you manage OS, apps, data (AWS EC2). PaaS (Platform): you manage apps and data (Heroku, Azure App Service). SaaS (Software): vendor manages everything (Gmail, Salesforce). Security responsibility shifts — more managed = less customer control but less customer responsibility.',
  'What is cryptography in ethical hacking?': 'Study of secure communication. Symmetric (AES, DES — same key), Asymmetric (RSA, ECC — key pair), Hashing (SHA-256, MD5 — one-way). PKI: Certificate Authorities issue digital certificates. Attacks: brute force, birthday attack, known-plaintext, chosen-ciphertext, side-channel.',
};

// Process CEH file
const cehPath = path.join(__dirname, 'js', 'cert-ceh-data.js');
let cehContent = fs.readFileSync(cehPath, 'utf8');

let cehCount = 0;
for (const [question, answer] of Object.entries(cehAnswers)) {
  const escaped = question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`'${escaped}'`, 'g');
  const safeQ = question.replace(/'/g, "\\'");
  const safeA = answer.replace(/'/g, "\\'").replace(/\n/g, '\\n');
  const replacement = `{q: '${safeQ}', a: '${safeA}'}`;
  const before = cehContent;
  cehContent = cehContent.replace(pattern, replacement);
  if (cehContent !== before) cehCount++;
}

// Also fix dvwa placeholder links in CEH
const dvwaFixes = {
  "thm_rooms: ['dvwa']": "thm_rooms: ['dvwa'], free_resources: ['https://tryhackme.com/', 'https://app.hackthebox.com/', 'https://book.hacktricks.xyz/']"
};

fs.writeFileSync(cehPath, cehContent, 'utf8');
console.log(`CEH: Replaced ${cehCount} questions with answers.`);

// Process OSCP file
const oscpPath = path.join(__dirname, 'js', 'cert-oscp-data.js');
if (fs.existsSync(oscpPath)) {
  let oscpContent = fs.readFileSync(oscpPath, 'utf8');
  let oscpCount = 0;
  // Apply same answers where questions match
  for (const [question, answer] of Object.entries({...cehAnswers})) {
    const escaped = question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`'${escaped}'`, 'g');
    const safeQ = question.replace(/'/g, "\\'");
    const safeA = answer.replace(/'/g, "\\'").replace(/\n/g, '\\n');
    const replacement = `{q: '${safeQ}', a: '${safeA}'}`;
    const before = oscpContent;
    oscpContent = oscpContent.replace(pattern, replacement);
    if (oscpContent !== before) oscpCount++;
  }
  fs.writeFileSync(oscpPath, oscpContent, 'utf8');
  console.log(`OSCP: Replaced ${oscpCount} questions with answers.`);
}

// Process PNPT file
const pnptPath = path.join(__dirname, 'js', 'cert-pnpt-data.js');
if (fs.existsSync(pnptPath)) {
  let pnptContent = fs.readFileSync(pnptPath, 'utf8');
  let pnptCount = 0;
  for (const [question, answer] of Object.entries({...cehAnswers})) {
    const escaped = question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`'${escaped}'`, 'g');
    const safeQ = question.replace(/'/g, "\\'");
    const safeA = answer.replace(/'/g, "\\'").replace(/\n/g, '\\n');
    const replacement = `{q: '${safeQ}', a: '${safeA}'}`;
    const before = pnptContent;
    pnptContent = pnptContent.replace(pattern, replacement);
    if (pnptContent !== before) pnptCount++;
  }
  fs.writeFileSync(pnptPath, pnptContent, 'utf8');
  console.log(`PNPT: Replaced ${pnptCount} questions with answers.`);
}

console.log('Done! All certification questions updated.');
