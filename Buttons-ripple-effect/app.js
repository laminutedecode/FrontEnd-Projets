

const links = document.querySelectorAll('.container a')

.forEach((button) => {
    button.onclick = function(e){
     let x = e.clientX - e.target.offsetLeft;
     let y = e.clientY - e.target.offsetTop;
     let effetBtn = document.createElement('span')

     effetBtn.style.left = `${x}px`;
     effetBtn.style.top = `${y}px`;

     this.appendChild(effetBtn)

     setTimeout(function(){
        effetBtn.remove()
     }, 600)
    }
})