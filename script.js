const slide = document.getElementById('responsivelist');
const closeL = document.querySelectorAll('.li')
const closeSlide = document.getElementById('closemenu')
const newMenu = document.getElementById('hamburger')

const openMenu = () => {
    slide.style.width = "200px";
    return
}

const closeMenu = () => {
    slide.style.width = "0";
    return
}

closeL.forEach(list => {
    list.addEventListener('click', function handleClick(event) {
      slide.style.width = "0";
    });
  }); 
newMenu.addEventListener('click', openMenu)
closeSlide.addEventListener('click', closeMenu)

