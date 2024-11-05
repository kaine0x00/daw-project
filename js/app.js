document.addEventListener("DOMContentLoaded", function () {
  let root = document.documentElement;
  let id = null;

  const storedColourData = localStorage.getItem('colour')
  const defaultColours = {
    accent: "#993abc",
    accent2: "#5e1a78",
    bg: "#010415",
    textcolour: "#ffffff"
  };

  if (storedColourData) {
    const colourData = JSON.parse(storedColourData);
    console.log(colourData);
    root.style.setProperty("--accent", colourData.accent);
    root.style.setProperty("--accent2", colourData.accent2);
    root.style.setProperty("--bg", colourData.bg);
    root.style.setProperty("--textcolour", colourData.textcolour);
  } else {
    console.log('User data not found in local storage. Filling user data with default colours');
    localStorage.setItem('colour', JSON.stringify(defaultColours));
    const colourData = JSON.parse(storedColourData);
    console.log(colourData);
  }

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 170,
          behavior: "smooth",

        });
      }
    });
  });

  document.getElementById('blogToggle').addEventListener('click', function (){
    console.log("button clicked")
    const element = document.getElementById('blogmenu');
    const topmenu = document.getElementById('topmenu')
    let pos = -10;
    if (element.style.display === "none"){
      clearInterval(id);
      topmenu.style.boxShadow = "none";
      element.style.display = "flex";
      id = setInterval(frame, 22 );
      function frame(){
        if (pos === 13){
          clearInterval(id)
        } else {
          pos++;
          element.style.top = pos*8 + 'px';
        }
      }
    } else {
      clearInterval(id)
      element.style.display = "none";
      topmenu.style.boxShadow = "0.01em 3em 2em var(--bg)";
      element.style.top = 0;
    }
  });

  document.getElementById('profileToggle').addEventListener('click', function () {
    const element = document.getElementById('profile');
    const blackout = document.getElementById('blackout');
    let pos = 0;
    blackout.style.display = "block";
    element.style.display = "block";
    clearInterval(id);
    id = setInterval(frame, 25);

    function frame() {
      if (pos === 3) {
        clearInterval(id)
      } else {
        pos++;
        element.style.right = pos * 5 + 'px';
      }
    }
  });

  document.getElementById('closeProfile').addEventListener('click', function (){
    const element = document.getElementById('profile');
    const blackout = document.getElementById('blackout');
    element.style.display = "none";
    blackout.style.display = "none";
    element.style.right = "0";
  });

  let colours = JSON.parse(storedColourData)

  document.getElementById('accentToggle').addEventListener('click', function (){
    let colour = document.getElementById('accent').value;
    root.style.setProperty("--accent" , colour);
    colours.accent = colour;
    localStorage.setItem('colour', JSON.stringify(colours))
    console.log(storedColourData)
  });

  document.getElementById('accent2Toggle').addEventListener('click', function (){
    let colour = document.getElementById('accent2').value;
    root.style.setProperty("--accent2" , colour);
    colours.accent2 = colour;
    localStorage.setItem('colour', JSON.stringify(colours))
    console.log(storedColourData)
  });

  document.getElementById('bgToggle').addEventListener('click', function (){
    let colour = document.getElementById('bg').value;
    root.style.setProperty("--bg" , colour);
    colours.bg = colour;
    localStorage.setItem('colour', JSON.stringify(colours))
    console.log(storedColourData)
  });

  document.getElementById('textcolourToggle').addEventListener('click', function (){
    let colour = document.getElementById('textcolour').value;
    root.style.setProperty("--textcolour" , colour);
    colours.textcolour = colour;
    localStorage.setItem('colour', JSON.stringify(colours))
    console.log(storedColourData)
  });

  document.getElementById('colourReset').addEventListener('click', function (){
    localStorage.setItem('colour', JSON.stringify(defaultColours))
  });

  function showSection(type, sectionId) {
    const sections = {
      xss: [
        "xss-overview",
        "reflected-xss",
        "stored-xss",
        "dom-based-xss",
        "self-xss"
      ],
      hardware: [
        "hardware-overview",
        "bluetooth-hacking",
        "wifi-hacking",
        "nfc-hacking",
        "ethernet-hacking",
        "rubber-duckies"
      ],
      idor: [
        "idor-overview",
        "insecure-objects",
        "url-manipulation",
        "parameter-tampering",
        "access-control-issues"
      ],
      phishing: [
        "phishing-overview",
        "email-phishing",
        "spear-phishing",
        "whaling-phishing",
        "vishing-phishing",
        "smishing-phishing"
      ],
      sql: [
        "sql-overview",
        "in-band-sql-injection",
        "blind-sql-injection",
        "out-of-band-sql-injection",
        "union-based-sql-injection"
      ],
      malware: [
        "malware-overview",
        "virus-malware",
        "worm-malware",
        "trojan-malware",
        "ransomware-malware",
        "spyware-malware",
        "adware-malware"
      ],
      dos: [
        "dos-overview",
        "syn-flood",
        "udp-flood",
        "http-flood"
      ],
      zeroday: [
        "zeroday-overview",
        "remote-zeroday",
        "local-zeroday",
        "webapp-zeroday"
      ]
    };

    if (sections[type]) {
      sections[type].forEach(id => {
        document.getElementById(id).style.display = "none";
        document.getElementById(id+'Btn').style.border = "var(--accent) 1px solid";
        document.getElementById(id+'Btn').style.color = "var(--accent)";
        document.getElementById(id+'Btn').style.backgroundColor = "var(--bg)";
      });
    }

    document.getElementById(sectionId).style.display = "block";
    document.getElementById(sectionId+'Btn').style.border = "var(--bg) 1px solid";
    document.getElementById(sectionId+'Btn').style.color = "var(--bg)";
    document.getElementById(sectionId+'Btn').style.backgroundColor = "var(--accent)";
  }

  const buttons = document.querySelectorAll('.blogButton');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      const type = this.getAttribute('data-type');

      showSection(type, sectionId);
    });
  });

});
