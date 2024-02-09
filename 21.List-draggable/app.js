const items = document.querySelectorAll('.item');

let draggedItem = null;

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragleave', dragLeave);
  item.addEventListener('drop', drop);
});

function dragStart() {
  this.classList.add('dragging');
  draggedItem = this;
}

function dragEnd() {
  this.classList.remove('dragging');
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.parentNode.insertBefore(draggedItem, this.nextSibling);
}
