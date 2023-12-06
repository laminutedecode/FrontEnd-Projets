const btn = document.querySelector('button');
const post= document.querySelector('.post');
const etoiles = document.querySelector('.etoiles');
const edit = document.querySelector('.edit');

btn.onclick = () => {
    etoiles.style.display = "none";
   post.style.display = "block";
edit.onclick = () => {
    etoiles.style.display = "block";
   post.style.display = "none";
}
    return false;
}