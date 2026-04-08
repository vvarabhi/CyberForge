// Generator script - run with: node generate-labs.js
// This creates the full labs.js with 350+ TryHackMe rooms

const fs = require('fs');

const categories = [
  { id: 'intro', name: 'Intro Rooms', icon: '🚀', color: 'var(--neon-green)', difficulty: 'Easy', rooms: [
    ['hello','Welcome'],['howtousetryhackme','How to use TryHackMe'],['welcome','Welcome Room'],['tutorial','Tutorial'],['openvpn','OpenVPN'],['beginnerpathintro','Learning Cyber Security'],['startingoutincybersec','Starting Out In Cyber Sec'],['introtoresearch','Introductory Researching'],['ccpentesting','CC: Pen Testing'],['catregex','Regular Expressions']
  ]},
  { id: 'linux', name: 'Linux Fundamentals', icon: '🐧', color: 'var(--neon-green)', difficulty: 'Easy', rooms: [
    ['zthlinux','Learn Linux'],['linuxmodules','Linux Modules'],['linuxfundamentalspart1','Linux Fundamentals Part 1'],['linuxfundamentalspart2','Linux Fundamentals Part 2'],['linuxfundamentalspart3','Linux Fundamentals Part 3']
  ]},
  { id: 'windows', name: 'Windows Fundamentals', icon: '🪟', color: 'var(--neon-cyan)', difficulty: 'Easy', rooms: [
    ['windowsfundamentals1xbx','Windows Fundamentals 1'],['windowsfundamentals2x0x','Windows Fundamentals 2'],['windowsfundamentals3xzx','Windows Fundamentals 3']
  ]},
  { id: 'basics', name: 'Basic Rooms', icon: '📘', color: 'var(--neon-cyan)', difficulty: 'Easy', rooms: [
    ['basicpentestingjt','Basic Pentesting'],['pentestingfundamentals','Pentesting Fundamentals'],['principlesofsecurity','Principles of Security'],['hackermethodology','The Hacker Methodology'],['physicalsecurityintro','Physical Security Intro'],['linuxstrengthtraining','Linux Strength Training'],['openvas','OpenVAS'],['iso27001','ISO27001'],['ultratech1','UltraTech']
  ]},
  { id: 'recon', name: 'Reconnaissance', icon: '🔍', color: 'var(--neon-orange)', difficulty: 'Easy', rooms: [
    ['passiverecon','Passive Reconnaissance'],['activerecon','Active Reconnaissance'],['contentdiscovery','Content Discovery'],['ohsint','OhSINT'],['shodan','Shodan.io'],['googledorking','Google Dorking'],['webosint','WebOSINT'],['sakura','Sakura Room'],['redteamrecon','Red Team Recon'],['searchlightosint','Searchlight - IMINT']
  ]},
  { id: 'scripting', name: 'Scripting', icon: '💻', color: 'var(--neon-purple)', difficulty: 'Easy', rooms: [
    ['pythonbasics','Python Basics'],['pythonplayground','Python Playground'],['intropocscripting','Intro PoC Scripting'],['peakhill','Peak Hill'],['javascriptbasics','JavaScript Basics'],['bashscripting','Bash Scripting'],['rust','Learn Rust'],['yara','Yara']
  ]},
  { id: 'networking', name: 'Networking', icon: '🔌', color: 'var(--neon-cyan)', difficulty: 'Easy', rooms: [
    ['introtonetworking','Introductory Networking'],['whatisnetworking','What is Networking?'],['bpnetworking','Networking'],['introtolan','Intro to LAN'],['httpindetail','HTTP in Detail'],['dnsindetail','DNS in Detail'],['rfirmware','Dumping Router Firmware']
  ]},
  { id: 'tooling', name: 'Tooling', icon: '🔧', color: 'var(--neon-orange)', difficulty: 'Medium', rooms: [
    ['metasploitintro','Metasploit: Introduction'],['rpmetasploit','Metasploit'],['rptmux','tmux'],['tmuxremux','REmux The Tmux'],['hydra','Hydra'],['rpsublist3r','Sublist3r'],['toolboxvim','Toolbox: Vim'],['learnowaspzap','Introduction to OWASP ZAP'],['phishinghiddeneye','Phishing: HiddenEye'],['rustscan','RustScan'],['rpnessusredux','Nessus'],['nmap01','Nmap Live Host Discovery'],['furthernmap','Nmap'],['tshark','TShark'],['ffuf','ffuf'],['burpsuitebasics','Burp Suite: The Basics'],['burpsuiterepeater','Burp Suite: Repeater']
  ]},
  { id: 'crypto', name: 'Crypto & Hashes', icon: '🔐', color: 'var(--neon-yellow)', difficulty: 'Easy', rooms: [
    ['cryptographyfordummies','Cryptography for Dummies'],['crackthehash','Crack the Hash'],['crackthehashlevel2','Crack The Hash Level 2'],['agentsudoctf','Agent Sudo'],['bruteit','Brute It']
  ]},
  { id: 'stego', name: 'Steganography', icon: '🖼️', color: 'var(--neon-purple)', difficulty: 'Medium', rooms: [
    ['ccstego','CC: Steganography'],['cicada3301vol1','Cicada-3301 Vol:1'],['musicalstego','Musical Stego'],['madness','Madness'],['psychobreak','Psycho Break'],['unstabletwin','Unstable Twin']
  ]},
  { id: 'web', name: 'Web Security', icon: '🌐', color: 'var(--neon-orange)', difficulty: 'Medium', rooms: [
    ['webfundamentals','Web Fundamentals'],['webappsec101','WebAppSec 101'],['vulnerabilities101','Vulnerabilities 101'],['walkinganapplication','Walking An Application'],['owasptop10','OWASP Top 10'],['owaspjuiceshop','OWASP Juice Shop'],['rpwebscanning','Web Scanning'],['owaspmutillidae','OWASP Mutillidae II'],['webgoat','WebGOAT'],['dvwa','DVWA'],['vulnnet1','VulnNet'],['juicydetails','Juicy Details'],['vulnversity','Vulnversity'],['injection','Injection'],['lfibasics','LFI Basics'],['inclusion','Inclusion'],['sqlilab','SQL Injection Lab'],['learnssti','SSTI'],['sqlinjectionlm','SQL Injection'],['ignite','Ignite'],['overpass','Overpass'],['yearoftherabbit','Year of the Rabbit'],['bsidesgtdevelpy','Develpy'],['jackofalltrades','Jack-of-All-Trades'],['bolt','Bolt']
  ]},
  { id: 'android', name: 'Android', icon: '📱', color: 'var(--neon-green)', difficulty: 'Medium', rooms: [
    ['androidhacking101','Android Hacking 101']
  ]},
  { id: 'forensics', name: 'Forensics', icon: '🔬', color: 'var(--neon-cyan)', difficulty: 'Medium', rooms: [
    ['linuxserverforensics','Linux Server Forensics'],['forensics','Forensics'],['memoryforensics','Memory Forensics'],['bpvolatility','Volatility'],['autopsy2ze0','Disk Analysis & Autopsy']
  ]},
  { id: 'wifi', name: 'Wi-Fi Hacking', icon: '📡', color: 'var(--neon-yellow)', difficulty: 'Medium', rooms: [
    ['wifihacking101','Wifi Hacking 101']
  ]},
  { id: 'reveng', name: 'Reverse Engineering', icon: '⚙️', color: 'var(--neon-red)', difficulty: 'Hard', rooms: [
    ['introtox8664','Intro to x86-64'],['win64assembly','Windows x64 Assembly'],['reverseengineering','Reverse Engineering'],['reverselfiles','Reversing ELF'],['jvmreverseengineering','JVM Reverse Engineering'],['ccradare2','CC: Radare2'],['ccghidra','CC: Ghidra'],['aster','Aster'],['classicpasswd','Classic Passwd'],['reloaded','REloaded']
  ]},
  { id: 'malware', name: 'Malware Analysis', icon: '🦠', color: 'var(--neon-red)', difficulty: 'Medium', rooms: [
    ['historyofmalware','History of Malware'],['malmalintroductory','MAL: Malware Introductory'],['basicmalwarere','Basic Malware RE'],['malresearching','MAL: Researching'],['mma','Mobile Malware Analysis'],['c2carnage','Carnage'],['dunklematerieptxc9','Dunkle Materie']
  ]},
  { id: 'privesc', name: 'Privilege Escalation', icon: '⬆️', color: 'var(--neon-orange)', difficulty: 'Medium', rooms: [
    ['linprivesc','Linux Privilege Escalation'],['linuxprivesc','Linux PrivEsc'],['linuxprivescarena','Linux PrivEsc Arena'],['windows10privesc','Windows PrivEsc'],['windowsprivescarena','Windows PrivEsc Arena'],['linuxagency','Linux Agency'],['sudovulnsbypass','Sudo Security Bypass'],['sudovulnsbof','Sudo Buffer Overflow'],['blaster','Blaster'],['kenobi','Kenobi'],['c4ptur3th3fl4g','c4ptur3-th3-fl4g'],['picklerick','Pickle Rick']
  ]},
  { id: 'windowsadv', name: 'Windows', icon: '🪟', color: 'var(--neon-cyan)', difficulty: 'Medium', rooms: [
    ['investigatingwindows','Investigating Windows'],['investigatingwindows2','Investigating Windows 2.0'],['investigatingwindows3','Investigating Windows 3.x'],['blueprint','Blueprint'],['vulnnetactive','VulnNet: Active'],['anthem','Anthem'],['blue','Blue']
  ]},
  { id: 'ad', name: 'Active Directory', icon: '🏢', color: 'var(--neon-purple)', difficulty: 'Hard', rooms: [
    ['attacktivedirectory','Attacktive Directory'],['postexploit','Post-Exploitation Basics'],['ustoun','USTOUN'],['enterprise','Enterprise'],['raz0rblack','RazorBlack']
  ]},
  { id: 'pcap', name: 'PCAP Analysis', icon: '📊', color: 'var(--neon-cyan)', difficulty: 'Medium', rooms: [
    ['h4cked','h4cked'],['cct2019','CCT2019'],['overpass2hacked','Overpass 2 - Hacked']
  ]},
  { id: 'bof', name: 'Buffer Overflow', icon: '💥', color: 'var(--neon-red)', difficulty: 'Hard', rooms: [
    ['bufferoverflowprep','Buffer Overflow Prep'],['gatekeeper','Gatekeeper'],['chronicle','Chronicle'],['introtopwntools','Intro To Pwntools']
  ]},
  { id: 'easyctf', name: 'Easy CTF', icon: '🟢', color: 'var(--neon-green)', difficulty: 'Easy', rooms: [
    ['gamingserver','GamingServer'],['overlayfs','OverlayFS - CVE-2021-3493'],['cowboyhacker','Bounty Hacker'],['ctf','Fowsniff CTF'],['rrootme','RootMe'],['attackerkb','AttackerKB'],['bsidesgtlibrary','Library'],['bsidesgtthompson','Thompson'],['easyctf','Simple CTF'],['lazyadmin','LazyAdmin'],['bsidesgtanonforce','Anonforce'],['wgelctf','Wgel CTF'],['bsidesgtdav','Dav'],['ninjaskills','Ninja Skills'],['ice','Ice'],['lianyu','Lian_Yu'],['thecodcaper','The Cod Caper'],['encryptioncrypto101','Encryption - Crypto 101'],['brooklynninenine','Brooklyn Nine Nine'],['kothfoodctf','KoTH Food CTF'],['easypeasyctf','Easy Peasy'],['tonythetiger','Tony the Tiger'],['ctfcollectionvol1','CTF Collection Vol.1'],['smaggrotto','Smag Grotto'],['couch','Couch'],['source','Source'],['pokemon','Gotta Catch em All!'],['overpass2hacked','Overpass 2 - Hacked'],['kiba','kiba'],['poster','Poster'],['chocolatefactory','Chocolate Factory'],['startup','Startup'],['chillhack','Chill Hack'],['colddboxeasy','ColddBox: Easy'],['glitch','GLITCH'],['allinonemj','All in One'],['archangel','Archangel'],['cyborgt8','Cyborg'],['lunizzctfnd','Lunizz CTF'],['badbyte','Badbyte'],['teamcw','Team'],['vulnnetnode','VulnNet: Node'],['vulnnetinternal','VulnNet: Internal'],['atlas','Atlas'],['vulnnetroasted','VulnNet: Roasted'],['catpictures','Cat Pictures'],['mustacchio','Mustacchio']
  ]},
  { id: 'medctf', name: 'Medium CTF', icon: '🟡', color: 'var(--neon-yellow)', difficulty: 'Medium', rooms: [
    ['mrrobot','Mr Robot CTF'],['goldeneye','GoldenEye'],['stuxctf','StuxCTF'],['boilerctf2','Boiler CTF'],['jokerctf','HA Joker CTF'],['biohazard','Biohazard'],['breakit','Break it'],['willow','Willow'],['marketplace','The Marketplace'],['nax','Nax'],['mindgames','Mindgames'],['anonymous','Anonymous'],['blog','Blog'],['wonderland','Wonderland'],['0day','0day'],['ctfcollectionvol2','CTF Collection Vol.2'],['cmess','CMesS'],['dejavu','Deja Vu'],['hackernote','hackerNote'],['dogcat','dogcat'],['convertmyvideo','ConvertMyVideo'],['kothhackers','KoTH Hackers'],['revenge','Revenge'],['harder','harder'],['haskhell','HaskHell'],['undiscoveredup','Undiscovered'],['breakoutthecage1','Break Out The Cage'],['theimpossiblechallenge','The Impossible Challenge'],['lookingglass','Looking Glass'],['recovery','Recovery'],['relevant','Relevant'],['ghizerctf','Ghizer'],['mnemonic','Mnemonic'],['wwbuddy','WWBuddy'],['theblobblog','The Blob Blog'],['cooctusadventures','Cooctus Stories'],['ctfonepiece65','One Piece'],['toc2','toc2'],['nerdherd','NerdHerd'],['kuberneteschalltdi2020','Kubernetes Chall TDI 2020'],['theserverfromhell','The Server From Hell'],['jacobtheboss','Jacob the Boss'],['unbakedpie','Unbaked Pie'],['bookstoreoc','Bookstore'],['overpass3hosting','Overpass 3 - Hosting'],['battery','battery'],['madeyescastle','Madeyes Castle'],['enpass','En-pass'],['sustah','Sustah'],['somesint','KaffeeSec - SoMeSINT'],['tokyoghoul666','Tokyo Ghoul'],['watcher','Watcher'],['broker','broker'],['inferno','Inferno'],['vulnnetdotpy','VulnNet: dotpy'],['wekorra','Wekor'],['pylonzf','pyLon'],['thegreatescape','The Great Escape'],['safezone','SafeZone'],['nahamstore','NahamStore'],['sweettoothinc','Sweettooth Inc.'],['cmspit','CMSpit'],['superspamr','Super-Spam'],['thatstheticket','Thats The Ticket'],['debug','Debug'],['redstoneonecarat','Red Stone One Carat'],['coldvvars','Cold VVars'],['metamorphosis','Metamorphosis'],['sqhell','SQHell'],['fortress','Fortress'],['cybercrafted','CyberCrafted'],['road','Road']
  ]},
  { id: 'hardctf', name: 'Hard CTF', icon: '🔴', color: 'var(--neon-red)', difficulty: 'Hard', rooms: [
    ['motunui','Motunui'],['spring','Spring'],['brainpan','Brainpan 1'],['borderlands','Borderlands'],['hc0nchristmasctf','hc0n Christmas CTF'],['dailybugle','Daily Bugle'],['retro','Retro'],['jeff','Jeff'],['racetrackbank','Racetrack Bank'],['davesblog','Daves Blog'],['cherryblossom','CherryBlossom'],['ironcorp','Iron Corp'],['carpediem1','Carpe Diem 1'],['ra','Ra'],['yotf','Year of the Fox'],['forbusinessreasons','For Business Reasons'],['anonymousplayground','Anonymous Playground'],['misguidedghosts','Misguided Ghosts'],['theseus','Theseus'],['internal','Internal'],['yearofthedog','Year of the Dog'],['inacave','Youre in a cave'],['yearoftheowl','Year of the Owl'],['yearofthepig','Year of the Pig'],['envizon','envizon'],['gamebuzz','GameBuzz'],['fusioncorp','Fusion Corp'],['crocccrew','Crocc Crew'],['uranium','Uranium CTF'],['yearofthejellyfish','Year of the Jellyfish'],['rocket','Rocket'],['squidgameroom','Squid Game'],['enterprize','EnterPrize'],['adana','Different CTF'],['vulnnetdotjar','VulnNet: dotjar'],['m4tr1xexitdenied','M4tr1x: Exit Denied'],['shaker','Shaker']
  ]},
  { id: 'misc', name: 'Misc & CVEs', icon: '🧩', color: 'var(--neon-yellow)', difficulty: 'Mixed', rooms: [
    ['django','Introduction to Django'],['githappens','Git Happens'],['meltdownexplained','Meltdown Explained'],['bpsplunk','Splunk'],['linuxbackdoors','Linux Backdoors'],['jupyter101','Jupyter 101'],['geolocatingimages','Geolocating Images'],['torforbeginners','Tor'],['tomghost','tomghost'],['dllhijacking','DLL Hijacking'],['iotintro','Intro to IoT Pentesting'],['attackingics1','Attacking ICS Plant #1'],['attackingics2','Attacking ICS Plant #2'],['printerhacking101','Printer Hacking 101'],['dnsmanipulation','DNS Manipulation'],['flask','Introduction to Flask'],['mitre','MITRE'],['magician','magician'],['jpgchat','JPGChat'],['sudovulnssamedit','Baron Samedit'],['cve202141773','CVE-2021-41773/42013'],['binaryheaven','Binary Heaven'],['gitandcrumpets','Git and Crumpets'],['polkit','Polkit: CVE-2021-3560'],['hipflask','Hip Flask'],['bypassdisablefunctions','Bypass Disable Functions'],['wordpresscve202129447','Wordpress: CVE-2021-29447'],['linuxfunctionhooking','Linux Function Hooking'],['revilcorp','REvil Corp'],['solar','Solar exploiting log4j'],['contiransomwarehgh','Conti'],['dirtypipe','Dirty Pipe: CVE-2022-0847'],['thefindcommand','The find command']
  ]},
  { id: 'events', name: 'Special Events', icon: '🎄', color: 'var(--neon-green)', difficulty: 'Mixed', rooms: [
    ['learncyberin25days','25 Days of Cyber Security'],['25daysofchristmas','Advent of Cyber 1 [2019]'],['adventofcyber2','Advent of Cyber 2 [2020]'],['adventofcyber3','Advent of Cyber 3 (2021)'],['adventofcyber4','Advent of Cyber 2022'],['cyberweek2021','Cyber Scotland 2021'],['hackerofthehill','Hacker of the Hill #1'],['tickets1','Learn and win prizes'],['tickets2','Learn and win prizes #2']
  ]}
];

// Build JS
let totalRooms = 0;
categories.forEach(c => totalRooms += c.rooms.length);

let js = `/* ===== CyberForge Labs Tracker Module ===== */\n`;
js += `/* 350+ Free TryHackMe Rooms — Source: github.com/uttambodara/TryHackMeRoadmap */\n\n`;
js += `const LabsData = {\n  platforms: [\n`;

categories.forEach((cat, ci) => {
  js += `    {\n`;
  js += `      id: '${cat.id}',\n`;
  js += `      name: '${cat.name}',\n`;
  js += `      icon: '${cat.icon}',\n`;
  js += `      color: '${cat.color}',\n`;
  js += `      baseUrl: 'https://tryhackme.com/room/',\n`;
  js += `      labs: [\n`;
  cat.rooms.forEach((r, ri) => {
    const comma = ri < cat.rooms.length - 1 ? ',' : '';
    js += `        { id: 'thm_${r[0]}', name: '${r[1].replace(/'/g, "\\'")}', difficulty: '${cat.difficulty}', slug: '${r[0]}' }${comma}\n`;
  });
  js += `      ]\n`;
  js += `    }${ci < categories.length - 1 ? ',' : ''}\n`;
});

js += `  ],\n\n`;
js += `  getAllLabCount() {\n    let c = 0;\n    this.platforms.forEach(p => c += p.labs.length);\n    return c;\n  }\n};\n\n`;

// Add the Labs UI module
js += `const Labs = {
  currentPlatform: 'all',
  searchQuery: '',

  init() { this.render(); },

  render() {
    const container = document.getElementById('labs-content');
    if (!container) return;

    const progress = Storage.getLabsProgress();
    const totalLabs = LabsData.getAllLabCount();
    const completedLabs = Object.values(progress).filter(l => l.completed).length;
    const pct = Math.round((completedLabs / totalLabs) * 100);

    const platformTabs = [
      \`<button class="tab-btn \${this.currentPlatform === 'all' ? 'active' : ''}" onclick="Labs.setFilter('all')">All (\${totalLabs})</button>\`,
      ...LabsData.platforms.map(p => {
        const pc = p.labs.filter(l => progress[l.id]?.completed).length;
        return \`<button class="tab-btn \${this.currentPlatform === p.id ? 'active' : ''}" onclick="Labs.setFilter('\${p.id}')">\${p.icon} \${p.name} (\${pc}/\${p.labs.length})</button>\`;
      })
    ].join('');

    let platformsHtml = '';
    const filteredPlatforms = this.currentPlatform === 'all' ? LabsData.platforms : LabsData.platforms.filter(p => p.id === this.currentPlatform);

    filteredPlatforms.forEach(platform => {
      let labs = platform.labs;
      if (this.searchQuery) {
        labs = labs.filter(l => l.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      if (labs.length === 0) return;

      const platCompleted = platform.labs.filter(l => progress[l.id]?.completed).length;

      platformsHtml += \`<div class="card-static" style="margin-bottom:var(--space-6);">
        <div class="card-header">
          <h3><span>\${platform.icon}</span> \${platform.name}</h3>
          <span class="badge badge-green">\${platCompleted}/\${platform.labs.length}</span>
        </div>
        <div class="progress-bar" style="margin-bottom:var(--space-4);">
          <div class="progress-fill" style="width:\${platform.labs.length > 0 ? Math.round((platCompleted/platform.labs.length)*100) : 0}%;"></div>
        </div>\`;

      labs.forEach(lab => {
        const labP = progress[lab.id] || {};
        const checked = labP.completed ? 'checked' : '';
        const completedClass = labP.completed ? 'completed' : '';
        const url = (platform.baseUrl || 'https://tryhackme.com/room/') + (lab.slug || '');
        const diffBadge = Labs.getDiffBadge(lab.difficulty);

        platformsHtml += \`<div class="checkbox-item \${completedClass}" style="border-bottom:1px solid var(--border-subtle);">
          <input type="checkbox" \${checked} onchange="Labs.toggleLab('\${lab.id}', this.checked)">
          <div class="checkbox-label" style="flex:1;">
            <div class="flex items-center gap-2">
              <span>\${lab.name}</span>
              <span class="badge \${diffBadge}">\${lab.difficulty}</span>
            </div>
            <span class="sub-text">
              <a href="\${url}" target="_blank" rel="noopener">🔗 Open Room</a>
              \${labP.timeSpent ? \` · ⏱️ \${labP.timeSpent}m\` : ''}
            </span>
          </div>
        </div>\`;
      });

      platformsHtml += \`</div>\`;
    });

    container.innerHTML = \`
      <div class="page-header">
        <h1>🧪 TryHackMe Labs (350+ Rooms)</h1>
        <div style="text-align:right;">
          <div class="text-mono text-lg text-accent">\${pct}%</div>
          <div class="text-xs text-muted">\${completedLabs}/\${totalLabs} rooms completed</div>
        </div>
      </div>

      <div class="progress-bar progress-bar-lg progress-shine" style="margin-bottom:var(--space-5);">
        <div class="progress-fill" style="width:\${pct}%;"></div>
      </div>

      <div class="search-input" style="margin-bottom:var(--space-4);">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Search 350+ rooms..." value="\${this.searchQuery}" oninput="Labs.searchLabs(this.value)">
      </div>

      <div class="tabs" style="margin-bottom:var(--space-6);overflow-x:auto;flex-wrap:wrap;">\${platformTabs}</div>

      \${platformsHtml}
    \`;
  },

  getDiffBadge(diff) {
    const map = { 'Very Easy': 'badge-green', 'Easy': 'badge-green', 'Medium': 'badge-orange', 'Hard': 'badge-red', 'Mixed': 'badge-purple' };
    return map[diff] || 'badge-cyan';
  },

  toggleLab(id, completed) {
    Storage.setLabStatus(id, { completed });
    if (completed) Storage.updateStreak();
    this.render();
    if (typeof Dashboard !== 'undefined') Dashboard.renderStats();
  },

  setFilter(platform) {
    this.currentPlatform = platform;
    this.render();
  },

  searchLabs(query) {
    this.searchQuery = query;
    this.render();
  }
};
`;

fs.writeFileSync('js/labs.js', js, 'utf8');
console.log('✅ labs.js generated with ' + totalRooms + ' rooms across ' + categories.length + ' categories!');
