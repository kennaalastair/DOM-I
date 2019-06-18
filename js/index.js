const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Links in header
const navLinks = document.querySelectorAll('nav > a');

const link1 = navLinks[0];
const link2 = navLinks[1];
const link3 = navLinks[2];
const link4 = navLinks[3];
const link5 = navLinks[4];
const link6 = navLinks[5];

link1.textContent = siteContent['nav']['nav-item-1'];
link2.textContent = siteContent['nav']['nav-item-2'];
link3.textContent = siteContent['nav']['nav-item-3'];
link4.textContent = siteContent['nav']['nav-item-4'];
link5.textContent = siteContent['nav']['nav-item-5'];
link6.textContent = siteContent['nav']['nav-item-6'];

// append new nav link
const newNavLinks = document.querySelector('nav');
const link7 = document.createElement('a')
link7.textContent = 'Home';
newNavLinks.prepend(link7);

//prepend new nav link
const link8 = document.createElement('a')
link8.textContent = 'Blog';
newNavLinks.appendChild(link8);

//nav links color green
const allNavLinks = document.querySelectorAll('nav a');

allNavLinks.forEach((link) => {
  link.style.color = 'green';
});

//cta text h1
const ctaHeader = document.querySelector('.cta-text > h1');
ctaHeader.textContent = siteContent['cta']['h1'];

//logo image
const logoImg = document.querySelector('#logo-img');
logoImg.setAttribute('src', siteContent['nav']['img-src']);

//cta button
const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent['cta']['button'];

//header image
const headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

//top content headers
const topContentHeaders = document.querySelectorAll('.top-content > .text-content > h4');
topContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
topContentHeaders[1].textContent = siteContent['main-content']['about-h4'];

//top content paragraphs
const topContentPara = document.querySelectorAll('.top-content > .text-content > p');
topContentPara[0].textContent = siteContent['main-content']['features-content'];
topContentPara[1].textContent = siteContent['main-content']['about-content'];

//middle image
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content headers
const bottomContentHeaders = document.querySelectorAll('.bottom-content > .text-content > h4');
bottomContentHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].textContent = siteContent['main-content']['vision-h4'];

//bottom content paragraphs
const bottomContentPara = document.querySelectorAll('.bottom-content > .text-content > p');
bottomContentPara[0].textContent = siteContent['main-content']['services-content'];
bottomContentPara[1].textContent = siteContent['main-content']['product-content'];
bottomContentPara[2].textContent = siteContent['main-content']['vision-content'];

//contact section
//contact header
const contactHeader = document.querySelector('.contact > h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

//contact info
const contactInfo = document.querySelectorAll('.contact > p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

//footer
const footer = document.querySelector('footer > p');
footer.textContent = siteContent['footer']['copyright'];