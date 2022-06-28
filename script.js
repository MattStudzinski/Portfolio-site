
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class = "button"></span>`;
    })

    carousel.insertAdjacentHTML("beforeend", `
    <div class="navigation">
    ${ buttonsHtml.join("")}
    </div>
    `)
    const buttons = carousel.querySelectorAll(".button")

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("item--selected"))
            buttons.forEach(button => button.classList.remove("button--selected"))

            items[i].classList.add("item--selected")
            button.classList.add("button--selected")
        })
    })

    items[0].classList.add("item--selected")
    buttons[0].classList.add("button--selected")
})

const Btn = document.querySelector(".modal-btn")
const Bg = document.querySelector(".modal_bg")
const closer = document.querySelector(".close")



Btn.addEventListener('click', function(){
    Bg.classList.add('bg-active')
})
closer.addEventListener('click',function(){
    Bg.classList.remove('bg-active')
})
