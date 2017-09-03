var accordionHeading = document.querySelectorAll('.accordion-heading')
    , accordionContent = document.querySelectorAll('.accordion-content');
for (var i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].addEventListener('click', accordion);
}

function accordion() {
    var next = this.nextElementSibling;
    if (next.style.maxHeight) {
        next.style.maxHeight = null;
    }
    else {
        next.style.maxHeight = next.scrollHeight + "px";
    }
}