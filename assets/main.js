let box = document.querySelectorAll('.box');
let toggle = document.getElementById('toggle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let start = document.getElementById('start')
let controller;


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

start.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * box.length);
    controller = setInterval(() => {
        box.forEach(element => {
            element.classList.remove("active");
        });
        randomIndex = Math.floor(Math.random() * box.length);
        box[randomIndex].classList.add("active");
    }, 1_0);

    setTimeout(() => {
        clearInterval(controller);
    },5_000)
});













