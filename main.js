let bools = document.querySelectorAll("ul li");
let exp = document.querySelector(".color-box");

if (window.localStorage.getItem("color")) {
    exp.style.backgroundColor = window.localStorage.getItem("color");
    bools.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

bools.forEach((li) => {
    li.addEventListener("click", (e) => {
        bools.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});

document.getElementById("reset-button").addEventListener("click", () => {
    exp.style.backgroundColor = 'red';
    bools.forEach((li) => li.classList.remove("active"));
    document.querySelector('.color-red').classList.add("active");
});
