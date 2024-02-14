let box = document.querySelectorAll('.box');
let toggle = document.getElementById('toggle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

toggle.addEventListener("click", () => {
    box.forEach(element => {
        element.classList.toggle("active");
    });
});

function handleClick(forward) {
    let currentActiveIndex = Array.from(box).findIndex(element => element.classList.contains("active"));    
    if (currentActiveIndex !== -1) {
        box[currentActiveIndex].classList.remove("active");

        let nextIndex = (forward) ? (currentActiveIndex + 1) % box.length : (currentActiveIndex - 1 + box.length) % box.length;
        box[nextIndex].classList.add("active");
    }

}

prev.addEventListener("click", () => {
    handleClick(true);
});

next.addEventListener("click", () => {
     handleClick(false);
});
