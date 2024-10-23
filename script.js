const toggleButton = document.getElementsByClassName('toggle-button')[0] //Skapar variabeln toggleButton och hämtar första värdet i arrayen toggle-button
const navbarLinks = document.getElementsByClassName('navbar-links')[0] //Skapar variabeln navbarLinks och hämtar första värdet i arrayen navbar-links

toggleButton.addEventListener('click', () => { //toggleButton lyssnar efter om toggle-button klickas.
    navbarLinks.classList.toggle('active') //Om så visas menyn
})