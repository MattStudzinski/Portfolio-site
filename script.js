
// const el = document.querySelector('.okay');
// el.addEventListener('click', handleIt)
// function handleIt(){
//     console.log('how')
// }

const el = document.querySelectorAll(".text")
// const el2 = document.querySelector("#text2")
// const el3 = document.querySelector("#text3")
// const el4 = document.querySelector("#text4")
// const el5 = document.querySelector("#text5")
// const el6 = document.querySelector("#text6")

function hide (e) {
    e.el.style.color = 'green';
}
el.forEach(p =>
    p.addEventListener('mouseover', hide))

// el.addEventListener("mouseover", handleIt)
// function handleIt() {
//     Style.
// }
// el2.addEventListener("click", handleIt)
// function handleIt() {
//     console.log('hi')
// }
// el3.addEventListener("click", handleIt)
// function handleIt() {
//     console.log('hi')
// }
// el4.addEventListener("click", handleIt)
// function handleIt() {
//     console.log('hi')
// }
// el5.addEventListener("click", handleIt)
// function handleIt() {
//     console.log('hi')
// }
// el6.addEventListener("click", handleIt)
// function handleIt() {
//     console.log('hi')
// }


// const navbar = document.querySelectorAll(".nav-link")

// function changeColor (e) {
//     e.target.style.color = "blue";
// }

// navbar.forEach(p => p.addEventListener("mouseover", changeColor))