const burgerIcon = document.getElementById('burger-menu-icon')
const burgerMenu = document.getElementById('burger-menu')
const tipsAndTools = document.getElementById('tips-and-tools');
const subNav = document.getElementById('sub-nav');
const header = document.getElementById('header');
const expandFaqButtons = document.querySelectorAll('.expand-faq-button');
const glossaryListElements = document.querySelectorAll('.glossary-list-element');

const glossariInformationTexts = [
    {
        title: 'Botnet',
        text: 'A botnet is a number of Internet-connected devices, each of which runs one or more bots. Botnets can be used to perform Distributed Denial-of-Service attacks, steal data, send spam, and allow the attacker to access the device and its connection. The owner can control the botnet using command and control software',
    },
    {
        title: 'Breach',
        text: 'A data breach is a security violation, in which sensitive, protected or confidential data is copied, transmitted, viewed, stolen or used by an individual unauthorized to do so. Other terms are unintentional information disclosure, data leak, information leakage, and data spill.',
    },
    {
        title: 'Cloud',
        text: '"The cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers. Cloud servers are located in data centers all over the world',
    },
    {
        title: 'DDos',
        text: 'In computing, a denial-of-service attack is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to a network.',
    },
    {
        title: 'Domain',
        text: 'A domain name is a string that identifies a realm of administrative autonomy, authority or control within the Internet. Domain names are used in various networking contexts and for application-specific naming and addressing purposes.',
    },
    {
        title: 'Endpoint',
        text: 'Endpoint security is the practice of securing endpoints or entry points of end-user devices such as desktops, laptops, and mobile devices from being exploited by malicious actors and campaigns. Endpoint security systems protect these endpoints on a network or in the cloud from cybersecurity threats.',
    },
    {
        title: 'Exploit',
        text: 'An exploit is a piece of software, a chunk of data, or a sequence of commands that takes advantage of a bug or vulnerability to cause unintended or unanticipated behavior to occur on computer software, hardware, or something electronic.',
    },
    {
        title: 'Firewall',
        text: 'In computing, a firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. A firewall typically establishes a barrier between a trusted network and an untrusted network, such as the Internet',
    },
    {
        title: 'IP Address',
        text: 'An Internet Protocol address is a numerical label such as 192.0.2.1 that is connected to a computer network that uses the Internet Protocol for communication.',
    },
    {
        title: 'Malware',
        text: 'Malware is any software intentionally designed to cause disruption to a computer, server, client, or computer network, leak private information, gain unauthorized access to information or systems, deprive users access to information or which unknowingly interferes with the user\'s computer security and privacy',
    },
    {
        title: 'Penetration Test',
        text: 'A penetration test, colloquially known as a pen test or ethical hacking, is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system; this is not to be confused with a vulnerability assessment.',
    },
    {
        title: 'Phishing / Spearphishing',
        text: 'Phishing and spear phishing are both types of email impersonation attacks in which the sender attempts to steal data or install malware such as ransomware.',
    },
    {
        title: 'ng',
        text: 'Cyber Security specialists driving value using disruptive technology, to put users first for better visibility & response.'
    },
    {
        title: 'Ransomware',
        text: 'Malicious software that blocks access to a system until a ransom is paid.',
    },
    {
        title: 'Session Hijacking',
        text: 'Session hijacking is a technique used by hackers to gain access to a target\'s computer or online accounts. In a session hijacking attack, a hacker takes control of a user\'s browsing session to gain access to their personal information and passwords.',
    },
    {
        title: 'Social Engineering',
        text: 'In the context of information security, social engineering is the psychological manipulation of people into performing actions or divulging confidential information. This differs from social engineering within the social sciences, which does not concern the divulging of confidential information.',
    },
]


glossaryListElements.forEach((glossaryListElement, index) => {
    glossaryListElement.addEventListener('click', () => {
        let glossaryInfo;
        
        if(glossaryListElement.parentElement.parentElement.lastElementChild.id === 'glossary-info') {
            glossaryListElement.parentElement.parentElement.removeChild(document.getElementById('glossary-info'));
        }

        glossaryInfo = document.createElement('div');
        glossaryInfo.className = 'glossary-info';
        glossaryInfo.id = 'glossary-info';

        let glossaryInfoTitle = document.createElement('h2');
        glossaryInfoTitle.className = 'glossary-info-title';
        glossaryInfoTitle.innerText = glossariInformationTexts[index].title;
        
        let glossaryInfoText = document.createElement('p');
        glossaryInfoText.className = 'glossary-info-text';
        glossaryInfoText.innerText = glossariInformationTexts[index].text;
        
        glossaryInfo.appendChild(glossaryInfoTitle);
        glossaryInfo.appendChild(glossaryInfoText);
        glossaryListElement.parentElement.parentElement.appendChild(glossaryInfo);
    });
});

expandFaqButtons.forEach((expandFaqButton) => {
    expandFaqButton.addEventListener('click', () => {

        if(expandFaqButton.parentElement.lastElementChild.className === 'faq-answer') {
            expandFaqButton.parentElement.removeChild(expandFaqButton.parentElement.lastChild);
        } else {
            let faqAnswer = document.createElement('div');
            faqAnswer.className = 'faq-answer';

            let answerLetter = document.createElement('h2');
            answerLetter.className = 'faq-letter';
            answerLetter.innerText = 'A';

            let answerText = document.createElement('p');
            answerText.className = 'faq-answer-text';
            answerText.innerText = 'Everyone needs cybersecurity. Some information requires more protection than other information, but our solution is adaptable to every business. ';
        
            faqAnswer.appendChild(answerLetter);
            faqAnswer.appendChild(answerText);

            expandFaqButton.parentElement.appendChild(faqAnswer);
        }

        expandFaqButton.children[0].className = expandFaqButton.children[0].className === 'fa fa-angle-down' ? 'fa fa-angle-up' : 'fa fa-angle-down';
    });
});

burgerIcon.addEventListener('click', () => {
    if(burgerIcon.classList.contains('fa-bars')) {
        burgerIcon.className = 'fas fa-times';
        header.className = 'fixed-header';
        burgerMenu.className = 'expandable-menu expanded';
        burgerMenu.style.display = 'flex';
        tipsAndTools.style.display = 'none';
        subNav.style.display = 'none';
    } else {
        burgerIcon.className = 'fas fa-bars';
        header.className = '';
        burgerMenu.className = 'expandable-menu';
        burgerMenu.style.display = 'none';
        tipsAndTools.style.display = 'block';
        subNav.style.display = 'flex';
    }
});
