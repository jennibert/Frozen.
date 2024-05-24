const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListner('click',()=>{navbarLinks.classLists.toggle('active')})
