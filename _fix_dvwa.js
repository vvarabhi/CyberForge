// Fix all dvwa placeholder links in roadmap-data.js and cert-oscp-data.js
const fs = require('fs');

// Context-aware room mapping based on the task text
const roomMap = {
  'Scripting': 'intropocscripting',
  'CSRF': 'dvwa',  // DVWA is actually a valid THM room for CSRF practice
  'Injection': 'dvwa', // DVWA is actually a valid THM room
  'File Upload': 'dvwa',
  'SQL Injection': 'sqlilab',
  'sqlmap': 'dvwa',
  'SQLi': 'sqlilab',
  'XSS': 'dvwa',
  'Command Injection': 'dvwa',
  'SSRF': 'dvwa',
  'SSTI': 'learnssti',
  'LFI': 'dvwa',
  'File Inclusion': 'dvwa',
  'Brute Force': 'dvwa',
  'OWASP': 'owasptop10',
  'Juice Shop': 'dvwa',
  'Web Exploitation': 'dvwa',
  'Web Hacking': 'dvwa',
  'Web App': 'dvwa',
  'Buffer Overflow': 'dvwa',
  'BOF': 'dvwa',
  'Privilege Escalation': 'dvwa',
  'PrivEsc': 'dvwa',
  'Active Directory': 'dvwa',
  'Pivoting': 'dvwa',
  'Metasploit': 'rpmetasploit',
  'Nmap': 'furthernmap',
  'Enumeration': 'dvwa',
  'Reverse Shell': 'dvwa',
  'Password Attack': 'dvwa',
  'Hydra': 'hydra',
  'Nikto': 'dvwa',
  'Gobuster': 'dvwa',
  'Burp': 'dvwa',
};

// DVWA is actually a valid TryHackMe room (https://tryhackme.com/room/dvwa)
// It's a Damn Vulnerable Web Application room that exists on TryHackMe
// So these links are actually VALID - they point to a real room

// Let me verify by checking which links should be changed vs kept
let rd = fs.readFileSync('js/roadmap-data.js', 'utf8');
const lines = rd.split('\n');
let count = 0;
lines.forEach((line, i) => {
  if (line.includes('tryhackme.com/room/dvwa')) {
    count++;
    // Get context
    let textLine = '';
    for (let j = Math.max(0, i-4); j < i; j++) {
      if (lines[j].includes('"text"')) textLine = lines[j].trim();
    }
    console.log(`L${i+1}: ${textLine}`);
  }
});
console.log(`\nTotal dvwa links in roadmap-data.js: ${count}`);

// Check cert-oscp-data.js
let oscp = fs.readFileSync('js/cert-oscp-data.js', 'utf8');
const oscpLines = oscp.split('\n');
let oscpCount = 0;
oscpLines.forEach((line, i) => {
  if (line.includes('dvwa')) {
    oscpCount++;
    let textLine = '';
    for (let j = Math.max(0, i-4); j < i; j++) {
      if (oscpLines[j].includes('"text"') || oscpLines[j].includes('text:')) textLine = oscpLines[j].trim();
    }
    console.log(`OSCP L${i+1}: ${textLine || line.trim()}`);
  }
});
console.log(`Total dvwa refs in cert-oscp-data.js: ${oscpCount}`);
