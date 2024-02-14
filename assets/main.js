let box = document.querySelectorAll('.box');
let toggle = document.getElementById('toggle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

toggle.addEventListener("click", () => {
    box.forEach(element => {
        element.classList.toggle("active");
    });
});

function handleClick(forword) {
    let currentActiveIndex = Array.from(box).findIndex(element => element.classList.contains("active"));
    if(forword) {
        if (currentActiveIndex !== -1) {
            box[currentActiveIndex].classList.remove("active");
            let prevIndex = (currentActiveIndex !== 0) ? currentActiveIndex - 1 : box.length - 1;
            box[prevIndex].classList.add("active");
        }
    }
    else {
        if (currentActiveIndex !== -1) {
            box[currentActiveIndex].classList.remove("active");
            let nextIndex = (currentActiveIndex !== box.length - 1) ? currentActiveIndex + 1 : 0;
            box[nextIndex].classList.add("active");
        }
    }

}

prev.addEventListener("click", () => {
    handleClick(true);
});

next.addEventListener("click", () => {
     handleClick(false);
});
