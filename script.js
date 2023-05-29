const hamburger = document.getElementById('hamburger')
const slideMenu = document.getElementById('responsivelist');
const x = document.getElementById('closemenu')
const slideListItems = document.querySelectorAll('.li')

const key = document.getElementById('input')
const addBtn = document.querySelector('#add')
const deleteBtn = document.querySelector('#delete')
const btn = document.getElementById("myBtn");
const orderBtn = document.querySelector('#orderBtn')
let ul = document.getElementById('cardList')
let listLi = document.querySelectorAll('#cardList li')
const modal = document.getElementById("myModal");
const closeModal = document.getElementById('xModal')

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

let items = [];

const addToList = () => {
    let listLi = document.querySelectorAll('#cardList li')
    let listLength = listLi.length
    if (listLength === 4) {
        document.getElementById('input').value = ''
        alert('You Have Entered The Maximum Amount Of Items To Add')
        return
    } else if (key.value === '') {
        alert('Please enter items for smoothies')
        return
    } else {
        let usrInput = document.getElementById('input').value
        const textNode = document.createTextNode(usrInput)
        const li = document.createElement('li')
        li.append(textNode)
        ul.appendChild(li)
        const drinkFlav = {
            userChoice: usrInput
        }
        items.push(drinkFlav)
        document.getElementById('input').value = ''
        return
    }
}


const deleteLi = () => {
  let listLi = document.querySelectorAll('#cardList li')
  let listLength = listLi.length
  if(listLength === 0){
      alert('There is nothing to remove.')
  } else {
      ul.removeChild(ul.lastElementChild)
      items.pop()
      return
  }
}
ul.addEventListener('click', function(e) {
  let target = e.target;
  let parent = target.parentNode;
  let index = [].indexOf.call(parent.children, target);
  items.push(items.splice(index, 1)[0]);
  this.removeChild(e.target);
  items.pop()
 
})

const printOrder = () => {
  let listLi = document.querySelectorAll('#cardList li')
  let listLength = listLi.length
  if(listLength === 0) {
      alert('Please enter items for smoothie before ordering')
      modal.style.display = "none";
  } else {
      const ordNum = Math.floor(Math.random() * 1000) + 1;
      console.log(`Customer# ${ordNum} ordered`, items)
      alert(`Your Order# is ${ordNum} and it has been placed. Thank You!`)
      ul.replaceChildren()
      items = []
      modal.style.display = "none";
      return  
  }
}

const openModal = () => {
  modal.style.display = "block";
  return
}

const snap = () => {
  modal.style.display = "none";
  return
}

key.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      return addToList()
  }
})
addBtn.addEventListener('click', addToList)
deleteBtn.addEventListener('click', deleteLi)
orderBtn.addEventListener('click', printOrder)
btn.addEventListener('click', openModal)
closeModal.addEventListener('click', snap)
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


