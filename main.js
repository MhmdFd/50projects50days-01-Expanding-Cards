const box = document.querySelectorAll('.box');
const h3 = document.querySelectorAll('h3');

box.forEach(box => {
    box.addEventListener('click', () => {
        removeActive();
        box.classList.add('active')
    } )
});
function removeActive() {
    box.forEach(box => {
        box.classList.remove('active')

    })
}
