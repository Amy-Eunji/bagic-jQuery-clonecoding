const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const moreBtn: Element
moreBtn.addEventListener('click',() => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});