// first I declare global const to select which element to work with  
const sectionsElements = document.getElementsByTagName("section");
const navigationBar = document.querySelector("ul");
// I use document fragment here to help with performance 
const docFrag = document.createDocumentFragment();

// Here I use a for loop to get each section data and then achieve the 1st requirement : a newly created list item appended to docFrag then ul
for(let i = 0; i <= sectionsElements.length-1; i++) {
    // get section id
    const secId = sectionsElements[i].getAttribute("id");
    //create list item 
    const navItem = document.createElement("li");
    // add content to list item
    navItem.innerHTML = `<a href="#${secId}">${secId}</a>`;
    // to prevent default scroll and add smooth scroll instead
    navItem.addEventListener("click", element => {
        element.preventDefault();
        sectionsElements[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    // append it first to document fragment
    docFrag.appendChild(navItem);
    // then append it to navigation Bar
    navigationBar.append(docFrag);
};

// For the 2nd requirement which is while scrolling the user can know on which section he is in by highlighting both section and nav item
// add an event listener that listen for a user when he scrolls
window.addEventListener("scroll", function() {
// run a for loop on all section elements    
    for (z = 0; z < sectionsElements.length; z++) {
// I used getBoundingClientRect method by getting the top position of each section
        // declare sectionTop
        const sectionTop = sectionsElements[z].getBoundingClientRect().top;
        // select all li item to be able to add or remove the active class
        const listItem = document.querySelectorAll("li");
        // check if the section top lies between the condition
        if ((sectionTop < 160) && (sectionTop >= -320)) {
        sectionsElements[z].classList.add("your-active-class");
        listItem[z].classList.add("active-class");
        } else {
            sectionsElements[z].classList.remove("your-active-class");
            listItem[z].classList.remove("active-class");
        }
    };
});