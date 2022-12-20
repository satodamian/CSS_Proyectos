const bMore = document.querySelector('#b-more');
const links = document.querySelector('#links');
bMore.addEventListener('click', ()=>{
   links.classList.toggle('collapsed');
});