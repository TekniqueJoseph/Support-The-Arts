const open = document.getElementById('responsivelist');
const closeL = document.querySelectorAll('.li')
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

closeL.forEach(list => {
    list.addEventListener('click', function handleClick(event) {
      console.log('box clicked', event);
      open.style.width = "0";
    });
  }); 
newMenu.addEventListener('click', openMenu)
closeSlide.addEventListener('click', closeMenu)

