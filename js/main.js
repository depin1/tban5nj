const box = document.querySelector('.boxtop');
const chilled = document.querySelector('.boxtop_chilled');
const rotate = document.querySelector('.rotate');
box.addEventListener('click', function() {
    chilled.classList.toggle('extra')
    rotate.classList.toggle('extra')
});