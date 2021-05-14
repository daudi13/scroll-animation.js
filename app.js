const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes() {

    const triggerBottom = window.innerHeight / 7 * 4;

    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;

        if (boxtop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    })
}