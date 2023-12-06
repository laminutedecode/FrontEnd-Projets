const container = document.querySelector('.tabs-container')
const icons = document.querySelectorAll('.icon i')
let toggle = false;
const allTabs = document.querySelectorAll('.tab')

const moovIcons = () => {
  let valScroll = Math.round(container.scrollLeft)
  let maxScroll = container.scrollWidth - container.clientWidth
  console.log(valScroll, maxScroll);
  icons[0].parentElement.style.display = valScroll > 0 ? "flex" : "none";
  icons[1].parentElement.style.display = maxScroll > valScroll ? "flex" : "none";
}

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    // console.log(icon.id);
    container.scrollLeft += icon.id === "left" ? -350 : 350;
   setTimeout(()=>  moovIcons(), 50)
    
  })
})
allTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    container.querySelector('.active').classList.remove('active')
    tab.classList.add('active')
    
  })
})

const dragging = (e)=> {
if(!toggle)return;
console.log("dragging...");
container.scrollLeft -= e.movementX;
container.classList.add('active')

moovIcons()
}

const dragStop = ()=> {
  toggle: false
  container.classList.remove("active");
}



container.addEventListener('mousedown', ()=> toggle = true) 
container.addEventListener('mousemove', dragging) 
document.addEventListener('mouseup', dragStop) 