const open = document.getElementById('responsivelist');
const closeSlide = document.getElementById('closemenu')
const newMenu = document.getElementById('hamburger')


const openMenu = () => {
    open.style.width = "200px";
    return
}

const closeMenu = () => {
    open.style.width = "0";
    return
}
 
newMenu.addEventListener('click', openMenu)
closeSlide.addEventListener('click', closeMenu)
