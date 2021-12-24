const title = document.querySelectorAll(".title");

title.forEach(item => {
    item.addEventListener("click", () => {
        const parent = item.closest(".content");
        const heading = item.querySelector("h2");
        const arrow = item.querySelector(".arrow");
        const text = parent.querySelector("p");
        heading.classList.toggle("active-title");
        arrow.classList.toggle("up");
        text.classList.toggle("active");
    })
})