/*==================================================
    PETER ABIYA PORTFOLIO
    Main JavaScript File
====================================================*/

/*==================================================
    1. ROTATING HERO TAGLINE
====================================================*/

(function () {

    const el = document.getElementById("rotateTagline");

    if (!el) return;

    const phrases = [

        "Engineering Secure Systems.",

        "Designing Detection Pipelines.",

        "Building Threat Visibility.",

        "Automating Security Operations.",

        "Strengthening Cloud Security.",

        "Engineering Resilient Defenses.",

        "Turning Threat Intelligence into Action."

    ];

    let index = 0;

    function rotate() {

        el.style.opacity = "0";

        el.style.transform = "translateY(12px)";

        setTimeout(() => {

            index = (index + 1) % phrases.length;

            el.textContent = phrases[index];

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }, 350);

    }

    setInterval(rotate, 2500);

})();

/*==================================================
    2. SOC LIVE EVENT CONSOLE
====================================================*/

const securityEvents = [

    {
        time: "15:02:11",
        severity: "HIGH",
        class: "sev-high",
        message: "SSH brute-force detected (MITRE T1110)"
    },

    {
        time: "15:02:28",
        severity: "MEDIUM",
        class: "sev-med",
        message: "Privilege escalation attempt identified"
    },

    {
        time: "15:02:46",
        severity: "HIGH",
        class: "sev-high",
        message: "CloudTrail root account login detected"
    },

    {
        time: "15:03:14",
        severity: "LOW",
        class: "sev-low",
        message: "PowerShell execution outside baseline"
    },

    {
        time: "15:03:39",
        severity: "HIGH",
        class: "sev-high",
        message: "SQL injection attempt blocked"
    },

    {
        time: "15:04:02",
        severity: "INFO",
        class: "sev-ok",
        message: "Automated response completed successfully"
    },

    {
        time: "15:04:21",
        severity: "HIGH",
        class: "sev-high",
        message: "Suspicious IAM policy modification detected"
    },

    {
        time: "15:04:39",
        severity: "MEDIUM",
        class: "sev-med",
        message: "Nmap scan identified across internal subnet"
    },

    {
        time: "15:05:03",
        severity: "HIGH",
        class: "sev-high",
        message: "Encoded PowerShell command detected"
    },

    {
        time: "15:05:29",
        severity: "INFO",
        class: "sev-ok",
        message: "Threat intelligence enrichment completed"
    }

];

const feedLines = document.querySelectorAll(".feed-line");

let currentIndex = 0;

if (feedLines.length > 0) {

    setInterval(() => {

        feedLines.forEach((line, i) => {

            const event = securityEvents[(currentIndex + i) % securityEvents.length];

            line.querySelector(".feed-ts").textContent = event.time;

            const sev = line.querySelector(".feed-sev");

            sev.textContent = event.severity;

            sev.className = "feed-sev " + event.class;

            line.querySelector(".feed-msg").textContent = event.message;

        });

        currentIndex++;

    }, 3000);

}

/*==================================================
    3. SCROLL REVEAL ANIMATION
====================================================*/

(function () {

    const reveals = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window) || reveals.length === 0) {

        reveals.forEach(el => el.classList.add("visible"));

        return;

    }

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12,

        rootMargin: "0px 0px -60px 0px"

    });

    reveals.forEach(el => observer.observe(el));

})();

/*==================================================
    4. BACK TO TOP BUTTON
====================================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display =

            document.documentElement.scrollTop > 500

                ? "block"

                : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================================
    5. MOBILE NAVIGATION
====================================================*/

const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navMenu.classList.toggle("active");

    });

    document.querySelectorAll(".navlinks a").forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");

            navMenu.classList.remove("active");

        });

    });

}

/*==================================================
    6. PAGE LOADER
====================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    },2200);

});

/*==================================================
    7. ACTIVE NAVIGATION
====================================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navlinks a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/*==================================================
    8. PROJECT CARD REVEAL
====================================================*/

const cards=document.querySelectorAll(".alert-card");

const projectObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const card=entry.target;

const delay=[...cards].indexOf(card)*180;

setTimeout(()=>{

card.classList.add("show");

},delay);

projectObserver.unobserve(card);

}

});

},{

threshold:.18

});

cards.forEach(card=>{

projectObserver.observe(card);

});