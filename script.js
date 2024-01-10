document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    const fields = document.querySelectorAll('.field');

    fields.forEach(field => {
        field.addEventListener('drop', drop);
        field.addEventListener('dragover', allowDrop);
    });
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnd() {
    // Do something after dragging ends (if needed)
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedCrop = document.getElementById(data);

    // Check if the crop is being dropped on a field
    if (event.target.classList.contains('field')) {
        const newCrop = draggedCrop.cloneNode(true);
        newCrop.style.position = 'absolute';
        newCrop.style.left = `${event.clientX - event.target.getBoundingClientRect().left - newCrop.clientWidth / 2}px`;
        newCrop.style.top = `${event.clientY - event.target.getBoundingClientRect().top - newCrop.clientHeight / 2}px`;
        event.target.appendChild(newCrop);
    }
}
