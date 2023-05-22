const hamburger = document.getElementById('hamburger')
const slide = document.getElementById('responsivelist');
const slideListItems = document.querySelectorAll('.li')
const x = document.getElementById('closemenu')


const openMenu = () => {
    slide.style.width = "200px";
    return
}

const closeMenu = () => {
    slide.style.width = "0";
    return
}

slideListItems.forEach(listItem => {
    listItem.addEventListener('click', function handleClick(event) {
      slide.style.width = "0";
    });
  }); 
hamburger.addEventListener('click', openMenu)
x.addEventListener('click', closeMenu)

