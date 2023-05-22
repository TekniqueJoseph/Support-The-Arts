const open = document.getElementById('responsivelist');
const closeL = document.querySelectorAll('.li')
const closeSlide = document.getElementById('closemenu')
const newMenu = document.getElementById('hamburger')


const openMenu = () => {
    open.style.width = "200px";
    return
}

const closeMenu = () => {
    console.log('Hello')
    open.style.width = "0";
    
    return
}

closeL.forEach(list => {
    list.addEventListener('click', function handleClick(event) {
      console.log('box clicked', event);
      open.style.width = "0";
  
    //   .setAttribute('style', 'background-color: yellow;');
    });
  });


// const liCloseMenu = () => {
//     // open.style.width = "0";
//     console.log('Hello')
//     return
// }
 
newMenu.addEventListener('click', openMenu)
closeSlide.addEventListener('click', closeMenu)
// closeL.addEventListener('click', closeS)
