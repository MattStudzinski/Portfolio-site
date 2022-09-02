

// grabs each one of the "items" inside of the carousel tag
document.querySelectorAll(".carousel").forEach(carousel => {
    // makes an array for each item here, so three buttons
    const items = carousel.querySelectorAll(".item");

    // this is where we tell js what kind of element we want
    
    const buttonsHtml = Array.from(items, () => {
        return `<span class = "button"></span>`;
    })
// makes a <span> for every item in .carousel

// this is placing some html before the end of .carousel
    carousel.insertAdjacentHTML("beforeend", `
    <div class="navigation">
    ${ buttonsHtml.join("")}
    </div>
    `)
    // making a nav bar with the buttons on them the join combines the <span> defined  earlier together
    const buttons = carousel.querySelectorAll(".button")
// grab the buttons
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("item--selected"))
            buttons.forEach(button => button.classList.remove("button--selected"))
// the buttons have an index now and can remove the call so it wont be displayed. on click it will dissapear
            items[i].classList.add("item--selected")
            button.classList.add("button--selected")
        })
    })
// these do the opposite, will show the selected i
    items[0].classList.add("item--selected")
    buttons[0].classList.add("button--selected")
})
// makes it so when page is loaded, the first selected in i 0 otherwise it would be blank

const Btn = document.querySelector(".modal-btn")
const Bg = document.querySelector(".modal_bg")
const closer = document.querySelector(".close")



Btn.addEventListener('click', function(){
    Bg.classList.add('bg-active')
})
closer.addEventListener('click',function(){
    Bg.classList.remove('bg-active')
})
