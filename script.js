const wrapper = document.querySelector("#main");
const right = document.querySelector("#right");
const firstCardWidth = right.querySelector(".elem, .elem0").offsetWidth;
const arrowBtns = document.querySelectorAll(".slider");

let isDragging = false, startX, startScrollLeft;


// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        right.scrollLeft += btn.id == "prevBtn" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    right.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = right.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    right.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    right.classList.remove("dragging");
}

// Prevent default drag behavior on images within .elem and .elem0 classes
document.querySelectorAll('.elem img, .elem0 img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});


right.addEventListener("mousedown", dragStart);
right.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);








