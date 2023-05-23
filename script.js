const hamburger = document.getElementById('hamburger')
const slideMenu = document.getElementById('responsivelist');
const x = document.getElementById('closemenu')
const slideListItems = document.querySelectorAll('.li')

const openSlideMenu = () => {
    slideMenu.style.width = "200px";
    return
}
const closeSlideMenu = () => {
    slideMenu.style.width = "0";
    return
}
slideListItems.forEach(listItem => {
    listItem.addEventListener('click', function handleClick(event) {
      slideMenu.style.width = "0";
    });
  }); 
hamburger.addEventListener('click', openSlideMenu)
x.addEventListener('click', closeSlideMenu)

