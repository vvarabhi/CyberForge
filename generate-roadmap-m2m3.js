// Month 2 & 3 data for CyberForge 90-Day Roadmap
module.exports = function(roadmap, week) {

// ══════════════════════════════════════════════════
// MONTH 2 — EXPLOITATION (Days 31-60)
// ══════════════════════════════════════════════════

week(1, 5, 'Advanced Web Exploitation (PortSwigger)',
  'WHY: PortSwigger Academy is the gold standard for web hacking. Their labs simulate real-world vulnerabilities. Mastering these puts you at Bug Bounty / OSCP web module level.',
[
  { theme:'Authentication & Access Control Attacks', diff:'🔴 Hard',
    tasks:[
      ['lab','09:00-11:00','PortSwigger: Authentication Labs (All Apprentice+Practitioner)','https://portswigger.net/web-security/authentication','2h'],
      ['lab','11:00-13:00','PortSwigger: Access Control Labs','https://portswigger.net/web-security/access-control','2h'],
      ['lab','13:15-15:15','THM: Authenticate','https://tryhackme.com/room/dvwa','2h'],
      ['lab','15:30-17:00','THM: IDOR','https://tryhackme.com/room/dvwa','1.5h'],
      ['notes','17:00-18:00','📝 Notes: Auth bypass techniques, IDOR patterns, JWT attacks','','1h'],
    ],
    questions:['What is an IDOR vulnerability?','How can you bypass 2FA?','What is JWT and how can it be attacked?','What is password spraying vs credential stuffing?']
  },
  { theme:'SSRF & Deserialization Deep Dive', diff:'🔴 Hard',
    tasks:[
      ['lab','09:00-11:00','PortSwigger: SSRF Labs (All levels)','https://portswigger.net/web-security/ssrf','2h'],
      ['lab','11:00-13:00','PortSwigger: Insecure Deserialization','https://portswigger.net/web-security/deserialization','2h'],
      ['lab','13:15-15:15','THM: SSTI','https://tryhackme.com/room/learnssti','2h'],
      ['lab','15:15-17:00','PortSwigger: Business Logic Vulnerabilities','https://portswigger.net/web-security/logic-flaws','1.75h'],
      ['notes','17:00-18:00','📝 Notes: SSRF payloads, deserialization chains (Java, PHP, Python), SSTI payloads per engine','','1h'],
    ],
    questions:['What cloud metadata endpoint does SSRF target on AWS?','What is insecure deserialization?','How does SSTI differ from XSS?','What template engines are vulnerable to SSTI?']
  },
  { theme:'Advanced SQLi & Command Injection', diff:'🔴 Hard',
    tasks:[
      ['lab','09:00-11:30','PortSwigger: SQL Injection (Practitioner Labs)','https://portswigger.net/web-security/sql-injection','2.5h'],
      ['lab','11:30-13:00','PortSwigger: OS Command Injection','https://portswigger.net/web-security/os-command-injection','1.5h'],
      ['lab','13:15-15:15','THM: Command Injection','https://tryhackme.com/room/dvwa','2h'],
      ['challenge','15:30-17:30','THM: Injection','https://tryhackme.com/room/dvwa','2h'],
      ['notes','17:30-18:15','📝 Notes: Blind SQLi extraction, sqlmap tamper scripts, command injection filter bypasses','','45m'],
    ],
    questions:['How does time-based blind SQLi extract data?','What is out-of-band SQL injection?','How do you bypass command injection filters?','What sqlmap tamper script bypasses spaces?']
  },
  { theme:'API & Advanced Web Attacks', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:30','TCM — API Hacking','https://www.youtube.com/watch?v=qqmyAxfGV9c','1.5h'],
      ['lab','10:30-12:30','PortSwigger: XXE Labs','https://portswigger.net/web-security/xxe','2h'],
      ['lab','12:45-14:45','PortSwigger: HTTP Request Smuggling','https://portswigger.net/web-security/request-smuggling','2h'],
      ['lab','15:00-17:00','THM: OWASP API Security Top 10','https://tryhackme.com/room/dvwa','2h'],
      ['notes','17:00-18:00','📝 Notes: XXE payloads, request smuggling CL.TE/TE.CL, API testing methodology','','1h'],
    ],
    questions:['What is XXE and how do you exploit it?','What is HTTP request smuggling?','What tools test API security?','What is BOLA in API context?']
  },
  { theme:'Web Challenge Marathon', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Vulnversity (Re-do from scratch, faster)','https://tryhackme.com/room/vulnversity','3h'],
      ['challenge','12:15-15:15','THM: HackPark','https://tryhackme.com/room/hackpark','3h'],
      ['challenge','15:30-17:30','OverTheWire: Natas Levels 11-20','https://overthewire.org/wargames/natas/','2h'],
      ['notes','17:30-18:30','📝 Notes: Professional writeups for all machines','','1h'],
    ],
    questions:['Compare your RootMe approach now vs Month 1 — what improved?']
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🌙 REST: Review web hacking notes. You should now know OWASP Top 10 cold.','','']],
    questions:[]
  },
]);

week(1, 6, 'Windows Hacking & OS Exploitation',
  'WHY: Most corporate environments run Windows + Active Directory. Windows exploitation (EternalBlue, token impersonation) is tested in OSCP. You MUST be comfortable attacking Windows.',
[
  { theme:'Windows Fundamentals & CMD/PowerShell', diff:'🟡 Intermediate',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Windows Section','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=37800s','2h'],
      ['lab','11:00-12:30','THM: Windows Fundamentals 1','https://tryhackme.com/room/windowsfundamentals1xbx','1.5h'],
      ['lab','12:45-14:15','THM: Windows Fundamentals 2','https://tryhackme.com/room/windowsfundamentals2x0x','1.5h'],
      ['lab','14:15-15:45','THM: Windows Fundamentals 3','https://tryhackme.com/room/windowsfundamentals3xzx','1.5h'],
      ['lab','16:00-17:30','THM: Investigating Windows','https://tryhackme.com/room/investigatingwindows','1.5h'],
      ['notes','17:30-18:15','📝 Notes: Windows services, registry, event logs, PowerShell basics, net commands','','45m'],
    ],
    questions:['What is the SAM database?','How do you list running services in Windows?','What is the difference between CMD and PowerShell?','What registry hive stores user passwords?','What is LSASS and why do attackers target it?']
  },
  { theme:'EternalBlue & Windows Exploitation', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:00','HackerSploit — EternalBlue Exploitation','https://www.youtube.com/watch?v=f56Y4lNAE1E','1h'],
      ['challenge','10:00-13:00','THM: Blue (MS17-010 EternalBlue)','https://tryhackme.com/room/blue','3h'],
      ['challenge','13:15-16:15','THM: Ice (Icecast + Meterpreter)','https://tryhackme.com/room/ice','3h'],
      ['challenge','16:30-18:00','THM: Blaster','https://tryhackme.com/room/blaster','1.5h'],
      ['notes','18:00-18:45','📝 Notes: MS17-010 exploit chain, Meterpreter post-exploitation, hashdump, mimikatz intro','','45m'],
    ],
    questions:['What is EternalBlue (MS17-010)?','What does hashdump reveal?','What is pass-the-hash?','How do you migrate processes in Meterpreter?']
  },
  { theme:'More Windows Machines', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Steel Mountain','https://tryhackme.com/room/steelmountain','3h'],
      ['challenge','12:15-15:15','THM: Alfred','https://tryhackme.com/room/alfred','3h'],
      ['challenge','15:30-17:30','THM: Anthem','https://tryhackme.com/room/anthem','2h'],
      ['notes','17:30-18:30','📝 Notes: Full writeups for all 3 machines','','1h'],
    ],
    questions:['What service did you exploit on Steel Mountain?','How did you escalate on Alfred?']
  },
  { theme:'Password Attacks & Credential Harvesting', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:00','TCM — Password Attacks Deep Dive','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=37800s','1h'],
      ['lab','10:00-12:00','THM: Crack the Hash','https://tryhackme.com/room/crackthehash','2h'],
      ['lab','12:15-14:15','THM: John The Ripper','https://tryhackme.com/room/johntheripper0','2h'],
      ['lab','14:30-16:00','THM: Password Attacks','https://tryhackme.com/room/dvwa','1.5h'],
      ['read','16:00-17:00','Read: Hashcat Wiki — Examples','https://hashcat.net/wiki/doku.php?id=example_hashes','1h'],
      ['notes','17:00-18:00','📝 Notes: Hash types (MD5,SHA1,NTLM,bcrypt), John vs Hashcat, wordlist generation (CeWL)','','1h'],
    ],
    questions:['What is hash type 1000 in hashcat?','How do you crack NTLM hashes?','What is salting?','What tool generates wordlists from websites?','What is the difference between online and offline password attacks?']
  },
  { theme:'Windows Challenge Day', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Blueprint','https://tryhackme.com/room/blueprint','3h'],
      ['challenge','12:15-15:15','THM: Relevant','https://tryhackme.com/room/relevant','3h'],
      ['challenge','15:30-17:30','THM: Retro','https://tryhackme.com/room/retro','2h'],
      ['notes','17:30-18:30','📝 Notes: Full writeups with focus on Windows-specific techniques','','1h'],
    ],
    questions:['What Windows services did you enumerate?','How did privilege escalation differ from Linux?']
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🌙 REST: Review Windows notes. Practice password cracking.','','']],
    questions:[]
  },
]);

week(1, 7, 'Privilege Escalation Mastery (Linux + Windows)',
  'WHY: Getting initial access is only half the battle. OSCP requires you to escalate from low-privilege user to root/SYSTEM. PrivEsc is what separates script kiddies from real pentesters.',
[
  { theme:'Linux PrivEsc — SUID, Sudo, Cron', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-11:00','TCM — Linux Privilege Escalation (Full)','https://www.youtube.com/watch?v=ZTnwg3qCdVM','2h'],
      ['lab','11:00-13:30','THM: Linux PrivEsc','https://tryhackme.com/room/linprivesc','2.5h'],
      ['read','13:45-14:30','Read: GTFOBins (SUID/Sudo Reference)','https://gtfobins.github.io/','45m'],
      ['lab','14:30-17:00','THM: Linux PrivEsc Arena','https://tryhackme.com/room/dvwa','2.5h'],
      ['notes','17:00-18:00','📝 Notes: LinPEAS output analysis, SUID exploitation, sudo -l techniques, cron job abuse, PATH hijacking','','1h'],
    ],
    questions:['What does find / -perm -4000 find?','How do you exploit a writable cron job?','What is PATH hijacking?','How do you exploit sudo vim?','What kernel exploit tool do you use?']
  },
  { theme:'Windows PrivEsc — Services, Registry, Tokens', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-11:00','TCM — Windows Privilege Escalation','https://www.youtube.com/watch?v=uTcrbNBcoxQ','2h'],
      ['lab','11:00-13:30','THM: Windows PrivEsc','https://tryhackme.com/room/windows10privesc','2.5h'],
      ['read','13:45-14:30','Read: LOLBAS Project','https://lolbas-project.github.io/','45m'],
      ['lab','14:30-17:00','THM: Windows PrivEsc Arena','https://tryhackme.com/room/dvwa','2.5h'],
      ['notes','17:00-18:00','📝 Notes: WinPEAS output analysis, unquoted service paths, DLL hijacking, token impersonation (potato attacks)','','1h'],
    ],
    questions:['What is an unquoted service path vulnerability?','How does DLL hijacking work?','What is Juicy/Rotten Potato?','What does whoami /priv show?','How do you exploit SeImpersonatePrivilege?']
  },
  { theme:'PrivEsc CTF Marathon', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Skynet','https://tryhackme.com/room/skynet','3h'],
      ['challenge','12:15-15:15','THM: Daily Bugle','https://tryhackme.com/room/dailybugle','3h'],
      ['challenge','15:30-17:30','THM: Overpass 2 — Hacked','https://tryhackme.com/room/dvwa','2h'],
      ['notes','17:30-18:30','📝 Notes: Detail the PrivEsc technique used for each machine','','1h'],
    ],
    questions:['What PrivEsc technique worked on each machine?','Which was hardest and why?']
  },
  { theme:'Linux Agency + PrivEsc Practice', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Linux Agency (26 tasks!)','https://tryhackme.com/room/dvwa','3h'],
      ['challenge','12:15-14:15','THM: Sudo Security Bypass','https://tryhackme.com/room/dvwa','2h'],
      ['lab','14:30-16:30','THM: Common Linux PrivEsc','https://tryhackme.com/room/dvwa','2h'],
      ['read','16:30-17:30','Read: PEASS-ng Documentation','https://github.com/carlospolop/PEASS-ng','1h'],
      ['notes','17:30-18:15','📝 Notes: Create your own PrivEsc checklist (Linux + Windows)','','45m'],
    ],
    questions:['What is your step-by-step PrivEsc methodology?']
  },
  { theme:'Challenge Marathon', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:30','THM: Mr Robot CTF','https://tryhackme.com/room/mrrobot','3.5h'],
      ['challenge','12:45-16:15','THM: Internal','https://tryhackme.com/room/internal','3.5h'],
      ['notes','16:15-17:15','📝 Notes: Professional pentest reports for both machines','','1h'],
      ['challenge','17:15-18:15','Write a blog-style CTF writeup for Mr Robot','','1h'],
    ],
    questions:['What was the full attack chain for Mr Robot?']
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🌙 REST: Review PrivEsc notes. Create PrivEsc mind map.','','']],
    questions:[]
  },
]);

week(1, 8, 'HackTheBox & Professional Methodology',
  'WHY: HTB machines simulate real pentests. Learn to approach boxes like a professional — systematic enumeration, documentation, and report writing. This is OSCP exam simulation.',
[
  { theme:'HTB Starting Point + IppSec Methodology', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:30','IppSec — HTB Lame Walkthrough','https://www.youtube.com/watch?v=3sZw4i3nDZg','1.5h'],
      ['lab','10:30-13:30','HTB: Starting Point Tier 0 (All)','https://app.hackthebox.com/starting-point','3h'],
      ['lab','13:45-16:45','HTB: Starting Point Tier 1 (First 4)','https://app.hackthebox.com/starting-point','3h'],
      ['notes','16:45-17:45','📝 Notes: Document each machine in report format','','1h'],
    ],
    questions:['What was your methodology for each HTB machine?']
  },
  { theme:'HTB Tier 1 + Report Writing', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:30','IppSec — HTB Jerry','https://www.youtube.com/watch?v=PJeBsNGU1nA','1.5h'],
      ['lab','10:30-13:30','HTB: Starting Point Tier 1 (Last 4)','https://app.hackthebox.com/starting-point','3h'],
      ['read','13:45-14:45','Read: OffSec — How to Write a Pentest Report','https://www.offsec.com/offsec/penetration-testing-report/','1h'],
      ['lab','15:00-17:00','HTB: Starting Point Tier 2 (First 3)','https://app.hackthebox.com/starting-point','2h'],
      ['notes','17:00-18:00','📝 Notes: Write executive summary for one HTB machine','','1h'],
    ],
    questions:['What sections does a professional pentest report have?','What is an executive summary?']
  },
  { theme:'HTB Tier 2 + Active Machines', diff:'🔴 Hard',
    tasks:[
      ['lab','09:00-12:00','HTB: Starting Point Tier 2 (Finish)','https://app.hackthebox.com/starting-point','3h'],
      ['challenge','12:15-15:15','HTB: Attempt 1 Active Easy Machine','https://app.hackthebox.com/','3h'],
      ['notes','15:15-16:45','📝 Notes: Full pentest report for the active machine','','1.5h'],
      ['questions','16:45-18:00','Answer 15 Interview Prep Questions','','1.25h'],
    ],
    questions:['What was the hardest part of your first active machine?']
  },
  { theme:'Month 2 Review + Portfolio Start', diff:'🟡',
    tasks:[
      ['read','09:00-10:00','Review: All Month 2 notes & cheat sheets','','1h'],
      ['challenge','10:00-13:00','HTB: Attempt 1 more Active Easy Machine','https://app.hackthebox.com/','3h'],
      ['read','13:15-14:15','Action: Create GitHub portfolio repo','','1h'],
      ['challenge','14:15-16:15','Write 2 CTF writeups for your blog','','2h'],
      ['notes','16:15-17:00','📝 Month 2 Summary: Weak areas, strong areas, confidence level','','45m'],
      ['paid','17:00-17:30','💰 PAID: TCM Windows PrivEsc Course ($30) + PNPT Cert','https://academy.tcm-sec.com/',''],
    ],
    questions:[]
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🏆 MONTH 2 COMPLETE! You can now exploit web apps AND systems!','','']],
    questions:[]
  },
]);

// ══════════════════════════════════════════════════
// MONTH 3 — ADVANCED + JOB READY (Days 61-90)
// ══════════════════════════════════════════════════

week(2, 9, 'Active Directory Pentesting',
  'WHY: 95% of Fortune 500 companies use Active Directory. AD exploitation (Kerberoasting, Pass-the-Hash, DCSync) is THE most asked skill in pentesting job interviews and is heavily tested in OSCP/PNPT.',
[
  { theme:'AD Architecture & Kerberos', diff:'🔴 Hard',
    tasks:[
      ['course','09:00-11:30','TCM PEH — Active Directory Section (10:00:00 - 12:30:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=36000s','2.5h'],
      ['lab','11:30-13:30','THM: Active Directory Basics','https://tryhackme.com/room/winadbasics','2h'],
      ['read','13:45-14:45','Read: AD Security Cheat Sheet','https://adsecurity.org/','1h'],
      ['lab','15:00-17:00','THM: Attacktive Directory (Tasks 1-4)','https://tryhackme.com/room/attacktivedirectory','2h'],
      ['notes','17:00-18:00','📝 Notes: AD components (DC, Forest, Trust), Kerberos TGT/TGS flow, LDAP, Group Policy','','1h'],
    ],
    questions:['What is a Domain Controller?','Explain the Kerberos authentication process','What is a Golden Ticket?','What is the difference between Forest and Domain?','What port does LDAP use?']
  },
  { theme:'LLMNR Poisoning, SMB Relay & Kerberoasting', diff:'🔴 Hard',
    tasks:[
      ['course','09:00-11:00','TCM PEH — AD Attacks (LLMNR, Relay)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=39600s','2h'],
      ['lab','11:00-13:00','THM: Attacktive Directory (Tasks 5-8, finish)','https://tryhackme.com/room/attacktivedirectory','2h'],
      ['read','13:15-14:00','Read: BloodHound Docs','https://bloodhound.readthedocs.io/','45m'],
      ['lab','14:00-16:00','THM: Post-Exploitation Basics','https://tryhackme.com/room/postexploit','2h'],
      ['lab','16:15-17:45','THM: Hacking Active Directory','https://tryhackme.com/room/dvwa','1.5h'],
      ['notes','17:45-18:30','📝 Notes: Responder, ntlmrelayx, Kerberoasting with GetUserSPNs, AS-REP Roasting','','45m'],
    ],
    questions:['What is LLMNR poisoning?','What tool performs SMB relay?','What is Kerberoasting?','What is AS-REP Roasting?','What is BloodHound and how do you use it?']
  },
  { theme:'Pass-the-Hash, DCSync & Lateral Movement', diff:'🔴 Hard',
    tasks:[
      ['course','09:00-11:00','TCM PEH — Post-Exploitation AD (12:30:00 - 14:00:00)','https://www.youtube.com/watch?v=fNzpcB7ODxQ&t=45000s','2h'],
      ['video','11:00-12:00','TCM — Pivoting with Chisel','https://www.youtube.com/watch?v=dIqoULXmhXg','1h'],
      ['lab','12:15-14:15','THM: Wreath Network (Section 1)','https://tryhackme.com/room/wreath','2h'],
      ['challenge','14:30-17:30','THM: Relevant','https://tryhackme.com/room/relevant','3h'],
      ['notes','17:30-18:30','📝 Notes: PtH with psexec/wmiexec, DCSync with secretsdump, Golden/Silver Ticket creation','','1h'],
    ],
    questions:['What is Pass-the-Hash?','What is DCSync?','What is the difference between Golden and Silver Ticket?','What tools perform lateral movement?']
  },
  { theme:'Wreath Network — Multi-Machine AD Lab', diff:'🔴 Hard',
    tasks:[
      ['lab','09:00-12:00','THM: Wreath Network (Section 2)','https://tryhackme.com/room/wreath','3h'],
      ['lab','12:15-15:15','THM: Wreath Network (Section 3)','https://tryhackme.com/room/wreath','3h'],
      ['notes','15:15-16:45','📝 Notes: Full Wreath writeup — pivot techniques, tunneling, multi-machine approach','','1.5h'],
      ['read','16:45-17:45','Read: Chisel Tunneling Guide','https://github.com/jpillora/chisel','1h'],
    ],
    questions:['How do you pivot through a compromised machine?','What is the difference between SOCKS proxy and port forwarding?','How does Chisel work?']
  },
  { theme:'AD Challenge Day', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:30','THM: Daily Bugle','https://tryhackme.com/room/dailybugle','3.5h'],
      ['challenge','12:45-16:15','THM: Internal','https://tryhackme.com/room/internal','3.5h'],
      ['notes','16:15-17:15','📝 Notes: Professional writeups','','1h'],
      ['questions','17:15-18:15','AD Interview Questions (10 questions)','','1h'],
    ],
    questions:['Describe a full AD attack chain from initial access to domain admin']
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🌙 REST: Create AD attack cheat sheet mind map','','']],
    questions:[]
  },
]);

week(2, 10, 'Advanced Techniques & Buffer Overflow',
  'WHY: Buffer overflow is tested in OSCP. OSINT, pivoting, and tunneling are real-world pentesting skills. These advanced techniques separate junior from senior pentesters.',
[
  { theme:'Buffer Overflow (OSCP Prep)', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:30','LiveOverflow — Binary Exploitation Basics','https://www.youtube.com/watch?v=iyAyN3GFM7A','1.5h'],
      ['lab','10:30-13:30','THM: Buffer Overflow Prep','https://tryhackme.com/room/bufferoverflowprep','3h'],
      ['lab','13:45-16:45','THM: Buffer Overflow Prep (continued — all 10 overflows)','https://tryhackme.com/room/bufferoverflowprep','3h'],
      ['notes','16:45-18:00','📝 Notes: BOF methodology — fuzzing, finding EIP offset, bad chars, JMP ESP, shellcode','','1.25h'],
    ],
    questions:['What is a buffer overflow?','What is the EIP register?','How do you find the offset?','What are bad characters?','How do you find a JMP ESP address?']
  },
  { theme:'Buffer Overflow Day 2 + Brainpan', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:00','THM: Brainpan 1','https://tryhackme.com/room/brainpan','3h'],
      ['challenge','12:15-15:15','THM: Gatekeeper','https://tryhackme.com/room/gatekeeper','3h'],
      ['notes','15:15-16:15','📝 Notes: Full BOF writeups with exploit scripts','','1h'],
      ['read','16:15-17:15','Read: OSCP BOF Methodology','https://github.com/Tib3rius/Pentest-Cheatsheets','1h'],
    ],
    questions:['Write the step-by-step BOF exploitation methodology','What Python struct is used for packing addresses?']
  },
  { theme:'OSINT & Reconnaissance', diff:'🟡 Intermediate',
    tasks:[
      ['video','09:00-10:30','John Hammond — OSINT Tutorial','https://www.youtube.com/watch?v=ImWJrMvFzm8','1.5h'],
      ['lab','10:30-12:30','THM: OhSINT','https://tryhackme.com/room/ohsint','2h'],
      ['lab','12:45-14:45','THM: Sakura Room (OSINT)','https://tryhackme.com/room/dvwa','2h'],
      ['lab','14:45-16:15','THM: Shodan.io','https://tryhackme.com/room/dvwa','1.5h'],
      ['challenge','16:15-17:45','Practice: OSINT on your own digital footprint','','1.5h'],
      ['notes','17:45-18:30','📝 Notes: OSINT tools (theHarvester, Maltego, Recon-ng), Google dork operators','','45m'],
    ],
    questions:['What OSINT tool enumerates emails?','How do you find subdomains passively?','What is Shodan used for?']
  },
  { theme:'Advanced Machine Marathon', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-12:30','HTB: 1 Active Easy Machine','https://app.hackthebox.com/','3.5h'],
      ['challenge','12:45-16:15','HTB: 1 Active Easy Machine (different OS)','https://app.hackthebox.com/','3.5h'],
      ['notes','16:15-17:45','📝 Notes: Professional pentest reports for both','','1.5h'],
    ],
    questions:['Document your complete methodology for each']
  },
  { theme:'HTB Medium Attempt', diff:'🔴 Hard',
    tasks:[
      ['video','09:00-10:30','IppSec — Watch a Medium box walkthrough','https://www.youtube.com/c/ippsec','1.5h'],
      ['challenge','10:30-14:30','HTB: Attempt 1 Active Medium Machine','https://app.hackthebox.com/','4h'],
      ['notes','14:45-16:15','📝 Notes: Document approach even if not rooted','','1.5h'],
      ['read','16:15-17:15','Action: Answer 20 Interview Questions','','1h'],
    ],
    questions:['What was the hardest part of the medium machine?']
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🌙 REST: Review all advanced technique notes','','']],
    questions:[]
  },
]);

week(2, 11, 'Mock Pentests & Portfolio Building',
  'WHY: Your portfolio is what gets you hired. CTF writeups, pentest reports, and HTB rank are proof of skill. Recruiters want to see you can DO the work, not just talk about it.',
[
  { theme:'HTB Machine Blitz + Reports', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-13:00','HTB: Own 1 Active Easy OS Machine + Full Report','https://app.hackthebox.com/','4h'],
      ['challenge','13:15-17:15','HTB: Own 1 Active Easy Web Machine + Full Report','https://app.hackthebox.com/','4h'],
      ['notes','17:15-18:15','📝 Professional executive reports for both machines','','1h'],
    ],
    questions:['What risk rating would you assign each vulnerability?']
  },
  { theme:'HTB Medium + Blog Writing', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-13:00','HTB: Attempt 1 Active Medium Machine','https://app.hackthebox.com/','4h'],
      ['challenge','13:15-15:15','Publish 2 CTF writeups on GitHub/blog','','2h'],
      ['read','15:30-16:30','Action: Create professional GitHub portfolio README','','1h'],
      ['notes','16:30-17:30','📝 Compile 3 best pentest reports into portfolio','','1h'],
    ],
    questions:[]
  },
  { theme:'Full Mock Pentest', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-14:00','FULL MOCK PENTEST: Pick any 2 THM machines, treat as a real engagement','','5h'],
      ['notes','14:00-16:00','📝 Write complete professional pentest report with: Executive Summary, Methodology, Findings, Risk Ratings, Remediation','','2h'],
      ['read','16:00-17:00','Peer review: Compare your report to OffSec sample reports','https://www.offsec.com/offsec/penetration-testing-report/','1h'],
    ],
    questions:['Does your report have executive summary, findings, and remediation?']
  },
  { theme:'Resume & Interview Prep', diff:'🟡',
    tasks:[
      ['read','09:00-10:30','Action: Build professional cybersecurity resume','','1.5h'],
      ['read','10:30-12:00','Action: Update LinkedIn with projects, certs, HTB rank','','1.5h'],
      ['video','12:15-13:15','Gerald Auger — How to Get a Cybersec Job','https://www.youtube.com/watch?v=Zf0p6qctGpA','1h'],
      ['questions','13:15-15:15','Full Mock Interview: 30 Technical Questions (time yourself)','','2h'],
      ['questions','15:30-16:30','Full Mock Interview: 10 Behavioral Questions','','1h'],
      ['notes','16:30-17:30','📝 Notes: Weak areas from mock interview, study plan for gaps','','1h'],
    ],
    questions:['Can you explain your pentesting methodology?','What is the difference between a vulnerability assessment and a penetration test?','Walk me through exploiting a web application']
  },
  { theme:'Challenge Day', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-13:00','THM: Complete any 2 rooms from Labs Tracker','','4h'],
      ['challenge','13:15-16:15','HTB: Attempt another Medium machine','https://app.hackthebox.com/','3h'],
      ['notes','16:15-17:15','📝 Writeups','','1h'],
    ],
    questions:[]
  },
  { theme:'Rest', diff:'🟢',
    tasks:[['rest','','🌙 REST: Portfolio polish, resume review','','']],
    questions:[]
  },
]);

week(2, 12, 'Job Ready — Final Push',
  'WHY: Everything has been leading to this. Apply aggressively, interview confidently, and use your portfolio as proof. You are now at junior pentester / SOC L1 analyst level with a path to OSCP/PNPT.',
[
  { theme:'Job Applications + Machine Practice', diff:'🟡',
    tasks:[
      ['read','09:00-10:30','Action: Apply to 5 Junior Pentester/SOC roles','','1.5h'],
      ['read','10:30-11:30','Action: Connect with 5 cybersec recruiters on LinkedIn','','1h'],
      ['video','11:30-12:30','Black Hills InfoSec — Getting Into InfoSec','https://www.youtube.com/watch?v=Uv-AfK7PkxU','1h'],
      ['challenge','12:45-16:15','THM: Complete 3 rooms you haven\'t done','','3.5h'],
      ['notes','16:15-17:00','📝 Job application tracker','','45m'],
    ],
    questions:[]
  },
  { theme:'Technical Interview Grind', diff:'🟡',
    tasks:[
      ['questions','09:00-11:00','Full Mock Interview (record yourself): Technical','','2h'],
      ['questions','11:00-12:00','Full Mock Interview: Behavioral + Scenario','','1h'],
      ['challenge','12:15-15:15','HTB: 1 Active Easy Machine (speed run under 2 hours)','https://app.hackthebox.com/','3h'],
      ['read','15:30-16:30','Action: Apply to 5 more jobs, tweak resume per role','','1h'],
      ['notes','16:30-17:30','📝 Interview performance self-assessment','','1h'],
    ],
    questions:[]
  },
  { theme:'Final Boss Machine', diff:'🔴 Hard',
    tasks:[
      ['challenge','09:00-14:00','FINAL BOSS: HTB Medium Machine — Full Own + Report','https://app.hackthebox.com/','5h'],
      ['notes','14:00-16:00','📝 Write your best pentest report ever','','2h'],
      ['read','16:00-17:00','Action: Add this report to your portfolio','','1h'],
    ],
    questions:[]
  },
  { theme:'Certification Planning + Knowledge Review', diff:'🟡',
    tasks:[
      ['read','09:00-10:30','Review: Complete knowledge checklist for all 3 months','','1.5h'],
      ['read','10:30-12:00','Research: eJPT vs PNPT vs OSCP — create study plan','','1.5h'],
      ['questions','12:15-14:15','Final 50-Question Comprehensive Knowledge Test','','2h'],
      ['read','14:30-15:30','Action: Apply to 5 more jobs','','1h'],
      ['notes','15:30-16:30','📝 90-Day Journey Summary — What you learned, what\'s next','','1h'],
      ['paid','16:30-17:00','💰 NEXT: TCM PNPT Bundle ($300) or OffSec OSCP ($1599)','https://certifications.tcm-sec.com/pnpt/',''],
    ],
    questions:[]
  },
  { theme:'Rest Buffer', diff:'🟢',
    tasks:[['rest','','🌙 Buffer day — catch up on any remaining tasks','','']],
    questions:[]
  },
  { theme:'GRADUATION', diff:'🏆',
    tasks:[['rest','','🎉 GRADUATION DAY! 90 days of hardcore training complete. You are OSCP-READY. You are JOB-READY. Keep hacking! 🔥','','']],
    questions:[]
  },
]);

};
