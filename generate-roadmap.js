const fs = require('fs');

// ═══════════════════════════════════════════════════════════════
// CYBERFORGE 90-DAY HARDCORE PENTESTING ROADMAP GENERATOR
// OSCP/PNPT Preparation Level · 8-12 hrs/day · 90 Calendar Days
// ═══════════════════════════════════════════════════════════════

const roadmap = { months: [
  { id:'m1', title:'Month 1 — Foundations: Networking, Linux, Web & Tools',
    subtitle:'Days 1-30 · Build unshakeable fundamentals', color:'var(--neon-green)', weeks:[] },
  { id:'m2', title:'Month 2 — Exploitation: Web Apps, Systems & PrivEsc',
    subtitle:'Days 31-60 · Break into real machines', color:'var(--neon-cyan)', weeks:[] },
  { id:'m3', title:'Month 3 — Advanced: AD, Pivoting, OSCP Prep & Job Ready',
    subtitle:'Days 61-90 · Professional pentester level', color:'var(--neon-purple)', weeks:[] }
]};

let dayN = 1;
function week(monthIdx, wNum, title, why, days) {
  const w = { id:`w${wNum}`, title:`Week ${wNum}: ${title}`, why, days:[] };
  days.forEach(d => {
    const day = { id:`d${dayN}`, title:`Day ${dayN}`, theme:d.theme||'', difficulty:d.diff||'🟢', items:[], questions:d.questions||[] };
    (d.tasks||[]).forEach((t,i) => {
      day.items.push({ id:`t${dayN}_${i}`, cat:t[0], time:t[1], text:t[2], link:t[3]||'', dur:t[4]||'' });
    });
    w.days.push(day);
    dayN++;
  });
  roadmap.months[monthIdx].weeks.push(w);
}

// Shorthand: [category, timeSlot, text, link, duration]
// Categories: video, lab, read, challenge, notes, questions, rest, paid, course

// ══════════════════════════════════════════════════
// MONTH 1 — FOUNDATIONS (Days 1-30)
// ══════════════════════════════════════════════════

week(0, 1, 'Networking Fundamentals & Linux CLI',
  'WHY: Every exploit travels over a network. If you don\'t understand TCP/IP, OSI, DNS, and ports — you cannot hack. Period. Linux is THE operating system of hacking — Kali, Parrot, every server you\'ll attack runs Linux.',
[
  { theme:'OSI Model & Network Basics', diff:'🟢 Beginner',
    tasks:[
      ['video','09:00-10:00','Professor Messer — OSI Model (7 Layers Deep Dive)','https://www.youtube.com/watch?v=nK1K4QEEpKw','1h'],
      ['video','10:00-11:00','NetworkChuck — Computer Networking in 100 Seconds to Pro','https://www.youtube.com/watch?v=qiQR5rTSshw','1h'],
      ['read','11:00-11:45','Read: Cloudflare — What is the OSI Model?','https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/','45m'],
      ['lab','12:00-13:30','THM: What is Networking?','https://tryhackme.com/room/whatisnetworking','1.5h'],
      ['lab','13:30-15:00','THM: Intro to Networking','https://tryhackme.com/room/introtonetworking','1.5h'],
      ['lab','15:15-16:15','THM: Tutorial Room','https://tryhackme.com/room/tutorial','1h'],
      ['lab','16:15-17:15','THM: Starting Out In Cyber Sec','https://tryhackme.com/room/startingoutincybersec','1h'],
      ['notes','17:15-18:00','📝 Notes: Draw OSI model diagram, write what each layer does, list 3 protocols per layer','','45m'],
    ],
    questions:['What are the 7 OSI layers in order?','What is the difference between Layer 3 and Layer 4?','What layer does a switch operate at vs a router?','Name 3 Layer 7 protocols','What is encapsulation in networking?']
  },
  { theme:'TCP/IP, UDP & Ports', diff:'🟢 Beginner',
    tasks:[
      ['video','09:00-10:00','Professor Messer — TCP/IP Model & Protocol Suite','https://www.youtube.com/watch?v=OTwp3xtd4dg','1h'],
      ['video','10:00-11:00','NetworkChuck — You NEED to learn Subnetting RIGHT NOW','https://www.youtube.com/watch?v=s_Ntt6eTn94','1h'],
      ['video','11:00-12:00','Professor Messer — Common Ports & Protocols','https://www.youtube.com/watch?v=7uDtz_e14X8','1h'],
      ['read','12:15-13:00','Read: IANA Port Numbers Reference','https://www.iana.org/assignments/service-names-port-numbers/','45m'],
      ['lab','13:00-14:30','THM: Intro to LAN','https://tryhackme.com/room/introtolan','1.5h'],
      ['lab','14:30-16:00','THM: DNS in Detail','https://tryhackme.com/room/dnsindetail','1.5h'],
      ['lab','16:00-17:30','THM: HTTP in Detail','https://tryhackme.com/room/httpindetail','1.5h'],
      ['notes','17:30-18:15','📝 Notes: Memorize top 20 ports (21,22,23,25,53,80,110,143,443,445,3306,3389...), TCP vs UDP differences','','45m'],
    ],
    questions:['What is TCP\'s 3-way handshake?','Name 5 well-known ports and their services','When would you use UDP over TCP?','What port does DNS use and why both TCP and UDP?','What is the difference between TCP/IP model and OSI model?']
  },
  { theme:'Linux Command Line Mastery (Day 1)', diff:'🟢 Beginner',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Linux Fundamentals Section (0:00 - 2:00:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=0s','2h'],
      ['video','11:00-12:00','TCM — Linux for Ethical Hackers (Basics)','https://www.youtube.com/watch?v=v_1z8qczCbQ','1h'],
      ['lab','12:15-13:45','THM: Linux Fundamentals Part 1','https://tryhackme.com/room/linuxfundamentalspart1','1.5h'],
      ['lab','13:45-15:15','THM: Linux Fundamentals Part 2','https://tryhackme.com/room/linuxfundamentalspart2','1.5h'],
      ['read','15:30-16:15','Read: Linux Journey — Command Line','https://linuxjourney.com/lesson/the-shell','45m'],
      ['challenge','16:15-17:45','OverTheWire: Bandit Level 0-5','https://overthewire.org/wargames/bandit/','1.5h'],
      ['notes','17:45-18:30','📝 Notes: Create Linux commands cheat sheet (navigation, files, permissions)','','45m'],
    ],
    questions:['What does chmod 755 mean?','How do you find files by name in Linux?','What is the difference between > and >> in bash?','How do you view running processes?','What does the pipe | operator do?']
  },
  { theme:'Linux CLI Mastery (Day 2) + File System', diff:'🟢 Beginner',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Linux contd (2:00:00 - 3:30:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=7200s','2h'],
      ['lab','11:00-12:30','THM: Linux Fundamentals Part 3','https://tryhackme.com/room/linuxfundamentalspart3','1.5h'],
      ['read','12:45-13:30','Read: Linux File Permissions Explained','https://www.guru99.com/file-permissions.html','45m'],
      ['lab','13:30-15:00','THM: Linux Strength Training','https://tryhackme.com/room/linuxstrengthtraining','1.5h'],
      ['challenge','15:15-17:15','OverTheWire: Bandit Level 6-12','https://overthewire.org/wargames/bandit/','2h'],
      ['notes','17:15-18:00','📝 Notes: File permissions (rwx), SUID, SGID, sticky bit, /etc/passwd format','','45m'],
    ],
    questions:['What is the /etc/shadow file used for?','What does SUID bit do and why is it dangerous?','How do you add a user to a group?','What is the difference between hard link and soft link?','What does find / -perm -4000 do?']
  },
  { theme:'DNS, DHCP & Network Services', diff:'🟢 Beginner',
    tasks:[
      ['video','09:00-10:00','NetworkChuck — What is DNS? (Complete Guide)','https://www.youtube.com/watch?v=27r4Bzuj5NQ','1h'],
      ['video','10:00-11:00','Professor Messer — DHCP Overview','https://www.youtube.com/watch?v=e6-TaH5bkjo','1h'],
      ['video','11:00-12:00','NetworkChuck — VLANs Explained','https://www.youtube.com/watch?v=1vD6eUjInD0','1h'],
      ['lab','12:15-13:45','THM: Network Services (SMB, Telnet, FTP)','https://tryhackme.com/room/networkservices','1.5h'],
      ['lab','13:45-15:15','THM: Network Services 2 (NFS, SMTP, MySQL)','https://tryhackme.com/room/networkservices2','1.5h'],
      ['lab','15:30-17:00','THM: Protocols and Servers','https://tryhackme.com/room/protocolsandservers','1.5h'],
      ['notes','17:00-18:00','📝 Notes: DNS record types (A,AAAA,CNAME,MX,TXT,NS), Zone transfers, DHCP process (DORA)','','1h'],
    ],
    questions:['What is a DNS zone transfer and why is it a security risk?','What are the 4 steps of DHCP?','What is the difference between FTP and SFTP?','What port does SMB use?','How would you enumerate SMB shares?']
  },
  { theme:'Challenge Day: Apply Everything', diff:'🟡 Intermediate',
    tasks:[
      ['challenge','09:00-11:00','OverTheWire: Bandit Levels 13-20','https://overthewire.org/wargames/bandit/','2h'],
      ['lab','11:00-13:00','THM: Introductory Researching','https://tryhackme.com/room/introtoresearch','2h'],
      ['lab','13:15-15:15','THM: Google Dorking','https://tryhackme.com/room/googledorking','2h'],
      ['lab','15:30-17:30','THM: OhSINT (OSINT Challenge)','https://tryhackme.com/room/ohsint','2h'],
      ['notes','17:30-18:30','📝 Notes: Write Bandit writeup (levels 13-20), Google dork operators list','','1h'],
    ],
    questions:['What Google dork finds login pages?','How do you use SSH keys from Bandit?','What OSINT tool finds email addresses from a domain?','How do you enumerate subdomains?']
  },
  { theme:'Rest & Review', diff:'🟢',
    tasks:[
      ['rest','','🌙 REST DAY: Review all Week 1 notes. Do 10 Interview Prep questions. Reorganize cheat sheets.','',''],
    ], questions:[]
  },
]);

week(0, 2, 'Python, Scanning & Enumeration Tools',
  'WHY: Python is the scripting language of hacking — exploits, automation, custom tools all use Python. Nmap is THE tool every pentester uses first. Enumeration is 80% of hacking — "enumerate harder" is the #1 rule.',
[
  { theme:'Python for Hackers (Day 1)', diff:'🟢 Beginner',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Python Basics Section (3:30:00 - 5:30:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=12600s','2h'],
      ['video','11:00-12:00','TCM — Python for Pentesters','https://www.youtube.com/watch?v=egg-GoT5iVk','1h'],
      ['lab','12:15-13:45','THM: Python Basics','https://tryhackme.com/room/pythonbasics','1.5h'],
      ['read','13:45-14:30','Read: Python Official Tutorial Ch 1-4','https://docs.python.org/3/tutorial/','45m'],
      ['lab','14:45-16:15','THM: Scripting','https://tryhackme.com/room/dvwa','1.5h'],
      ['notes','16:15-17:00','📝 Notes: Python data types, loops, functions, f-strings, file I/O','','45m'],
      ['challenge','17:00-18:00','Write a Python port scanner (TCP connect scan)','','1h'],
    ],
    questions:['What is the difference between a list and tuple in Python?','How do you handle exceptions in Python?','Write a for loop that iterates over a dictionary','What Python library is used for HTTP requests?','How would you read a file line by line?']
  },
  { theme:'Python for Hackers (Day 2) + Regex', diff:'🟡 Intermediate',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Python contd (5:30:00 - 7:00:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=19800s','2h'],
      ['lab','11:00-12:30','THM: Python Basics (continued)','https://tryhackme.com/room/pythonbasics','1.5h'],
      ['lab','12:45-14:15','THM: Regular Expressions','https://tryhackme.com/room/catregex','1.5h'],
      ['challenge','14:15-16:15','Build: Python script to brute-force directories (like mini-gobuster)','','2h'],
      ['read','16:30-17:15','Read: Automate the Boring Stuff Ch 7 (Regex)','https://automatetheboringstuff.com/2e/chapter7/','45m'],
      ['notes','17:15-18:00','📝 Notes: Socket programming, regex patterns, subprocess module','','45m'],
    ],
    questions:['What regex matches an IP address?','How do you create a TCP socket in Python?','What does subprocess.Popen do?','How would you parse HTML with Python?']
  },
  { theme:'Nmap Deep Dive — The Pentester\'s Best Friend', diff:'🟡 Intermediate',
    tasks:[
      ['video','09:00-10:30','HackerSploit — Nmap Complete Tutorial','https://www.youtube.com/watch?v=4tAOA1MFzAE','1.5h'],
      ['course','10:30-12:00','TCM PEH — Scanning & Enumeration (7:00:00 - 8:30:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=25200s','1.5h'],
      ['lab','12:15-13:45','THM: Nmap','https://tryhackme.com/room/furthernmap','1.5h'],
      ['lab','13:45-15:15','THM: Nmap Live Host Discovery','https://tryhackme.com/room/nmap01','1.5h'],
      ['lab','15:30-17:00','THM: Nmap Basic Port Scans','https://tryhackme.com/room/nmap02','1.5h'],
      ['lab','17:00-18:00','THM: Nmap Advanced Port Scans','https://tryhackme.com/room/nmap03','1h'],
      ['notes','18:00-18:45','📝 Notes: Nmap scan types (-sS,-sT,-sU,-sV,-A,-sC), NSE scripts, output formats','','45m'],
    ],
    questions:['What is the difference between -sS and -sT scan?','How do you scan all 65535 ports?','What does -sV do?','How do you run default NSE scripts?','What is the difference between -oN, -oG, and -oX?','How do you detect OS with nmap?']
  },
  { theme:'Enumeration: Gobuster, Nikto, Enum4linux', diff:'🟡 Intermediate',
    tasks:[
      ['video','09:00-10:00','John Hammond — Gobuster & FFuF Tutorial','https://www.youtube.com/watch?v=QPmGmfJA0uw','1h'],
      ['video','10:00-11:00','HackerSploit — Enum4Linux & SMB Enumeration','https://www.youtube.com/watch?v=lJGevMOfGg4','1h'],
      ['lab','11:00-12:30','THM: Content Discovery','https://tryhackme.com/room/contentdiscovery','1.5h'],
      ['lab','12:45-14:15','THM: Subdomain Enumeration','https://tryhackme.com/room/subdomainenumeration','1.5h'],
      ['lab','14:15-15:45','THM: ffuf','https://tryhackme.com/room/ffuf','1.5h'],
      ['lab','16:00-17:30','THM: Hydra (Password Attacks)','https://tryhackme.com/room/hydra','1.5h'],
      ['notes','17:30-18:15','📝 Notes: Wordlists (SecLists), gobuster flags, enum4linux commands, hydra syntax','','45m'],
    ],
    questions:['What wordlist do you use for directory bruteforcing?','How do you enumerate SMB shares?','What is the difference between gobuster and ffuf?','How do you bruteforce SSH login with hydra?','What does enum4linux -a do?']
  },
  { theme:'Wireshark & Packet Analysis', diff:'🟡 Intermediate',
    tasks:[
      ['video','09:00-10:30','David Bombal — Wireshark Complete Tutorial','https://www.youtube.com/watch?v=qTaOZrDnMzQ','1.5h'],
      ['video','10:30-11:30','NetworkChuck — Wireshark for Hackers','https://www.youtube.com/watch?v=lb1Dw0elJ0Q','1h'],
      ['lab','11:45-13:15','THM: Wireshark 101','https://tryhackme.com/room/wireshark','1.5h'],
      ['lab','13:15-14:45','THM: Wireshark: Packet Ops','https://tryhackme.com/room/wiresharkpacketoperations','1.5h'],
      ['read','15:00-15:45','Read: Wireshark Display Filters','https://wiki.wireshark.org/DisplayFilters','45m'],
      ['lab','15:45-17:15','THM: Overpass','https://tryhackme.com/room/overpass','1.5h'],
      ['notes','17:15-18:00','📝 Notes: Wireshark filters (tcp.port==, http.request, dns), follow TCP stream, capture filters vs display filters','','45m'],
    ],
    questions:['How do you filter HTTP traffic in Wireshark?','What is the difference between capture filter and display filter?','How do you follow a TCP stream?','What does ARP poisoning look like in Wireshark?']
  },
  { theme:'Challenge Day: Full Enumeration Practice', diff:'🟡 Intermediate',
    tasks:[
      ['challenge','09:00-11:30','THM: Basic Pentesting','https://tryhackme.com/room/basicpentestingjt','2.5h'],
      ['challenge','11:30-14:00','OverTheWire: Bandit Levels 21-33 (Finish it!)','https://overthewire.org/wargames/bandit/','2.5h'],
      ['challenge','14:15-16:15','THM: Bolt','https://tryhackme.com/room/bolt','2h'],
      ['lab','16:15-17:45','THM: Simple CTF','https://tryhackme.com/room/easyctf','1.5h'],
      ['notes','17:45-18:30','📝 Notes: Complete writeups for all 3 machines','','45m'],
    ],
    questions:['What was your full enumeration process for Basic Pentesting?','What tools did you use and in what order?']
  },
  { theme:'Rest & Review', diff:'🟢',
    tasks:[['rest','','🌙 REST DAY: Review Week 2. Practice 10 interview questions. Update all cheat sheets.','','']],
    questions:[]
  },
]);

week(0, 3, 'Web Application Security & Burp Suite Mastery',
  'WHY: 80% of pentesting engagements involve web applications. OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF) are found in nearly every web app. Burp Suite is your primary weapon — learn it deeply.',
[
  { theme:'HTTP Deep Dive & Burp Suite Setup', diff:'🟡 Intermediate',
    tasks:[
      ['video','09:00-10:00','HackerSploit — Burp Suite for Beginners','https://www.youtube.com/watch?v=0kPItHn4_H0','1h'],
      ['course','10:00-12:00','TCM PEH — Web App Pentesting (8:30:00 - 10:30:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=30600s','2h'],
      ['lab','12:15-13:45','THM: Web Fundamentals','https://tryhackme.com/room/webfundamentals','1.5h'],
      ['lab','13:45-15:15','THM: Walking An Application','https://tryhackme.com/room/walkinganapplication','1.5h'],
      ['lab','15:30-17:00','THM: Burp Suite: The Basics','https://tryhackme.com/room/burpsuitebasics','1.5h'],
      ['lab','17:00-18:00','THM: Burp Suite: Repeater','https://tryhackme.com/room/burpsuiterepeater','1h'],
      ['notes','18:00-18:45','📝 Notes: HTTP methods (GET,POST,PUT,DELETE), headers, cookies, Burp features map','','45m'],
    ],
    questions:['What is the difference between GET and POST?','What is a session cookie?','How does Burp Proxy intercept requests?','What HTTP header reveals server software?','What is the purpose of the Referer header?']
  },
  { theme:'OWASP Top 10 — Every Vulnerability Explained', diff:'🟡 Intermediate',
    tasks:[
      ['read','09:00-10:00','Read: OWASP Top 10 (2021 Official)','https://owasp.org/www-project-top-ten/','1h'],
      ['video','10:00-11:00','Computerphile — SQL Injection Explained','https://www.youtube.com/watch?v=ciNHn38EyRc','1h'],
      ['video','11:00-12:00','Computerphile — Cross Site Scripting','https://www.youtube.com/watch?v=L5l9lSnNMxg','1h'],
      ['lab','12:15-13:45','THM: OWASP Top 10 — 2021','https://tryhackme.com/room/owasptop102021','1.5h'],
      ['lab','13:45-15:15','THM: OWASP Juice Shop','https://tryhackme.com/room/owaspjuiceshop','1.5h'],
      ['lab','15:30-17:00','THM: Burp Suite: Intruder','https://tryhackme.com/room/burpsuiteintruder','1.5h'],
      ['notes','17:00-18:00','📝 Notes: Write each OWASP Top 10 vuln with example attack + mitigation','','1h'],
    ],
    questions:['List all 10 OWASP Top 10 categories','What is Broken Access Control and give an example?','What is the difference between authentication and authorization?','What is SSRF?','What is insecure deserialization?']
  },
  { theme:'SQL Injection Mastery', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:30','PortSwigger — SQL Injection Tutorial','https://www.youtube.com/watch?v=wX6tszfgYp4','1.5h'],
      ['lab','10:30-12:30','THM: SQL Injection','https://tryhackme.com/room/sqlinjectionlm','2h'],
      ['lab','12:45-14:45','THM: SQL Injection Lab','https://tryhackme.com/room/sqlilab','2h'],
      ['lab','15:00-17:00','PortSwigger Academy: SQLi Labs (All Apprentice)','https://portswigger.net/web-security/sql-injection','2h'],
      ['read','17:00-17:45','Read: PayloadsAllTheThings — SQL Injection','https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection','45m'],
      ['notes','17:45-18:30','📝 Notes: UNION SELECT technique, blind SQLi (boolean + time), sqlmap usage, WAF bypass','','45m'],
    ],
    questions:['What is a UNION-based SQL injection?','How does blind boolean SQLi work?','What is time-based blind SQLi?','What does sqlmap --dbs do?','How do you bypass a WAF filtering single quotes?','What is second-order SQL injection?']
  },
  { theme:'XSS, CSRF & Client-Side Attacks', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:00','PortSwigger — XSS Explained','https://www.youtube.com/watch?v=EoaDgUgS6QA','1h'],
      ['video','10:00-11:00','STÖK — Bug Bounty XSS Hunting','https://www.youtube.com/watch?v=eWEgUcHPle0','1h'],
      ['lab','11:00-13:00','PortSwigger Academy: XSS Labs (All Apprentice)','https://portswigger.net/web-security/cross-site-scripting','2h'],
      ['lab','13:15-14:45','PortSwigger Academy: CSRF Labs','https://portswigger.net/web-security/csrf','1.5h'],
      ['lab','15:00-16:30','THM: XSS','https://tryhackme.com/room/axss','1.5h'],
      ['lab','16:30-17:30','THM: CSRF','https://tryhackme.com/room/dvwa','1h'],
      ['notes','17:30-18:15','📝 Notes: Stored vs Reflected vs DOM XSS, CSRF token bypass, cookie flags (HttpOnly, Secure, SameSite)','','45m'],
    ],
    questions:['What is the difference between stored and reflected XSS?','How does DOM-based XSS work?','What is a CSRF attack?','How does the SameSite cookie attribute prevent CSRF?','What is Content Security Policy?']
  },
  { theme:'SSRF, File Inclusion & Upload Attacks', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:00','Bug Bounty Reports — SSRF Explained','https://www.youtube.com/watch?v=o-tL9ULF0KI','1h'],
      ['lab','10:00-12:00','PortSwigger Academy: SSRF Labs','https://portswigger.net/web-security/ssrf','2h'],
      ['lab','12:15-13:45','PortSwigger Academy: Access Control Labs','https://portswigger.net/web-security/access-control','1.5h'],
      ['lab','14:00-15:30','THM: LFI Basics','https://tryhackme.com/room/lfibasics','1.5h'],
      ['lab','15:30-17:00','THM: Inclusion (LFI/RFI)','https://tryhackme.com/room/inclusion','1.5h'],
      ['lab','17:00-18:00','THM: Upload Vulnerabilities','https://tryhackme.com/room/uploadvulns','1h'],
      ['notes','18:00-18:45','📝 Notes: LFI to RCE techniques, SSRF cloud metadata URLs, file upload bypass methods','','45m'],
    ],
    questions:['What is the difference between LFI and RFI?','How can you turn LFI into RCE?','What AWS metadata URL does SSRF target?','What file extensions can bypass upload filters?','What is a null byte injection?']
  },
  { theme:'Challenge Day: Web App CTF Blitz', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Vulnversity','https://tryhackme.com/room/vulnversity','3h'],
      ['challenge','12:15-14:15','OverTheWire: Natas Levels 0-10','https://overthewire.org/wargames/natas/','2h'],
      ['challenge','14:30-17:00','THM: Injection','https://tryhackme.com/room/dvwa','2.5h'],
      ['notes','17:00-18:00','📝 Notes: Full writeup for each challenge, document attack chains','','1h'],
    ],
    questions:['What was the attack chain for Vulnversity?','Which Natas levels used XSS vs code injection?']
  },
  { theme:'Rest & Review', diff:'🟢',
    tasks:[['rest','','🌙 REST DAY: Review web sec notes. Revisit any PortSwigger labs you struggled with.','','']],
    questions:[]
  },
]);

week(0, 4, 'Metasploit, Shells & Exploitation Foundations',
  'WHY: Metasploit is the world\'s most used exploitation framework. Understanding shells (reverse, bind, web shells) is CRITICAL — this is how you get access to target systems. Without this, you cannot be a pentester.',
[
  { theme:'Metasploit Framework Mastery', diff:'🟡 Intermediate',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Exploitation Basics (10:30:00 - 12:30:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=37800s','2h'],
      ['lab','11:00-12:30','THM: Metasploit: Introduction','https://tryhackme.com/room/metasploitintro','1.5h'],
      ['lab','12:45-14:15','THM: Metasploit: Exploitation','https://tryhackme.com/room/rpmetasploit','1.5h'],
      ['lab','14:15-15:45','THM: Metasploit: Meterpreter','https://tryhackme.com/room/meterpreter','1.5h'],
      ['challenge','16:00-17:30','Practice: Set up Metasploitable2 VM and exploit 3 services','','1.5h'],
      ['notes','17:30-18:15','📝 Notes: msfconsole workflow (search→use→set→exploit), payload types, meterpreter commands','','45m'],
    ],
    questions:['What is the difference between exploit and auxiliary in Metasploit?','What are staged vs non-staged payloads?','Name 5 meterpreter commands','How do you background a meterpreter session?','What does the multi/handler module do?']
  },
  { theme:'Shells: Reverse, Bind & Web Shells', diff:'🔴 Hard',
    tasks:[
      ['course','09:00-10:30','TCM PEH — Shells Section','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=37800s','1.5h'],
      ['lab','10:30-12:30','THM: Intro to Shells','https://tryhackme.com/room/introtoshells','2h'],
      ['read','12:45-13:30','Read: PayloadsAllTheThings — Reverse Shell Cheat Sheet','https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md','45m'],
      ['read','13:30-14:15','Read: PentestMonkey Reverse Shell Cheat Sheet','https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet','45m'],
      ['challenge','14:30-16:30','Practice: Get reverse shells in 5 different languages (bash, python, php, nc, powershell)','','2h'],
      ['lab','16:30-18:00','THM: CC: Pen Testing','https://tryhackme.com/room/ccpentesting','1.5h'],
      ['notes','18:00-18:45','📝 Notes: Revshell one-liners for 5 languages, shell stabilization (python pty, stty), web shell locations','','45m'],
    ],
    questions:['What is the difference between reverse and bind shell?','How do you stabilize a shell with Python?','What is the rlwrap tool used for?','Where do you upload PHP web shells on Apache?','What netcat listener command catches a reverse shell?']
  },
  { theme:'First Real Machine — RootMe', diff:'🟡 Intermediate',
    tasks:[
      ['video','09:00-10:00','John Hammond — How I Hack Machines','https://www.youtube.com/watch?v=Lqehvpe_djs','1h'],
      ['challenge','10:00-13:00','THM: RootMe (Full Own)','https://tryhackme.com/room/rrootme','3h'],
      ['challenge','13:15-16:15','THM: Kenobi (Full Own)','https://tryhackme.com/room/kenobi','3h'],
      ['notes','16:15-17:15','📝 Notes: Full professional writeup for both machines','','1h'],
      ['challenge','17:15-18:15','Practice: Answer 10 interview questions','','1h'],
    ],
    questions:['What was the initial attack vector for RootMe?','How did you escalate privileges on Kenobi?','What file permissions issue did Kenobi exploit?']
  },
  { theme:'Month 1 Boss Rush — Machine Gauntlet', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Pickle Rick','https://tryhackme.com/room/picklerick','3h'],
      ['challenge','12:15-15:15','THM: Bounty Hacker','https://tryhackme.com/room/cowboyhacker','3h'],
      ['lab','15:30-17:00','THM: Introductory Networking','https://tryhackme.com/room/introtonetworking','1.5h'],
      ['notes','17:00-18:00','📝 Notes: Complete writeups, document methodology','','1h'],
    ],
    questions:['Describe the full pentesting methodology you followed','What tools did you use for each phase?']
  },
  { theme:'Month 1 Review & Knowledge Check', diff:'🟡',
    tasks:[
      ['read','09:00-10:00','Action: Review ALL Month 1 notes and cheat sheets','','1h'],
      ['questions','10:00-12:00','Action: Answer 30 Interview Prep questions (Networking, Linux, Web)','','2h'],
      ['read','12:15-13:00','Action: Self-evaluate — rate yourself 1-10 on each topic','','45m'],
      ['challenge','13:00-16:00','Attempt: Any 1 Easy THM machine you haven\'t done','','3h'],
      ['notes','16:00-17:00','📝 Notes: Write Month 1 summary — what you learned, weak areas to revisit','','1h'],
      ['paid','17:00-17:30','💰 PAID: TCM Practical Ethical Hacking Full Course ($30)','https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course',''],
    ],
    questions:[]
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🏆 MONTH 1 COMPLETE! Take a full day off. You\'ve earned it.','','']],
    questions:[]
  },
  { theme:'Rest (Buffer Day)', diff:'🟢',
    tasks:[['rest','','🌙 Buffer day — catch up on anything from Month 1 you missed','','']],
    questions:[]
  },
]);

// ══════════════════════════
// Months 2 & 3 go into Part 2
// ══════════════════════════
// Load Part 2
try { require('./generate-roadmap-m2m3.js')(roadmap, week); } catch(e) {
  console.log('⚠️  Month 2 & 3 data not found, generating Month 1 only.');
}

// Generate output
const output = `/* CyberForge 90-Day Roadmap Data — Auto-generated */
const RoadmapData = ${JSON.stringify(roadmap, null, 2)};
RoadmapData.getAllItemCount = function() {
  let c = 0;
  this.months.forEach(m => m.weeks.forEach(w => w.days.forEach(d => { c += d.items.length; })));
  return c;
};`;
fs.writeFileSync('js/roadmap-data.js', output, 'utf8');
let td=0,tt=0;
roadmap.months.forEach(m=>m.weeks.forEach(w=>{td+=w.days.length;w.days.forEach(d=>tt+=d.items.length);}));
console.log(`✅ roadmap-data.js: ${td} days, ${tt} tasks`);
