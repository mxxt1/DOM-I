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

//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let nav = document.querySelector("nav");


let newLink1 = document.createElement("a");
newLink1.innerText = "newLink1";
nav.appendChild(newLink1);


let navItems = document.querySelectorAll('a');
console.log(navItems);
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];
// navItems[0].textContent = siteContent["nav"][0];
// console.log(siteContent["nav"][0]);
// console.log(nav[0]);
// navItems.forEach(x => {
//   for (let i=0;i<navItems.length;i++){
//   x.textContent = siteContent["nav"][i];
//   console.log(siteContent["nav"][i]);
//   };
// })

let newLink2 = document.createElement("a");
newLink2.innerText = "newLink2";
nav.prepend(newLink2);

//turn navlinks green
navItems.forEach(x =>{
  x.style.color = "green";
});


//Hero
let ctaText = document.querySelector('.cta-text');
console.log(ctaText);
// ctaText.children[0].textContent = siteContent.cta["h1"]; //TODO: how to add <br> into h1 string
ctaText.children[0].innerHTML = "<h1>Dom<br>Is<br>Awesome";
ctaText.children[1].textContent = siteContent.cta["button"];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src',siteContent["cta"]["img-src"]);


//Content

let textContent = document.querySelectorAll(".text-content");
//topbox 1
textContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
textContent[0].children[1].textContent = siteContent["main-content"]["features-content"];

//topbox 2
textContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
textContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

//middle images

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])

//bottom box 1
textContent[2].children[0].textContent = siteContent["main-content"]["services-h4"];
textContent[2].children[1].textContent = siteContent["main-content"]["services-content"];

//bottom box 2
textContent[3].children[0].textContent = siteContent["main-content"]["product-h4"];
textContent[3].children[1].textContent = siteContent["main-content"]["product-content"];

//bottom box 3
textContent[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
textContent[4].children[1].textContent = siteContent["main-content"]["vision-content"];


//contact

let contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

//footer

let footer = document.querySelector('footer');
footer.children[0].textContent = siteContent["footer"]["copyright"];
