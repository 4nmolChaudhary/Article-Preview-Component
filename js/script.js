const shareIcon = document.querySelector('.share');
const toolTip = document.querySelector('.tooltip');

shareIcon.addEventListener('click', () => {
    toolTip.style.visibility = 'visible';
    shareIcon.style.background = "hsl(214, 17%, 51%)";
    document.querySelector('path').style.fill = "hsl(210, 46%, 95%)";
});

document.addEventListener("click", (evt) => {
    let targetElement = evt.target;
    do {
        if (targetElement === toolTip || targetElement === shareIcon) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    toolTip.style.visibility = 'hidden';
});