
// const el = document.querySelector('.okay');
// el.addEventListener('click', handleIt)
// function handleIt(){
//     console.log('how')
// }

// const el = document.querySelector(".text")
// const el2 = document.querySelector("#text2")
// const el3 = document.querySelector("#text3")
// const el4 = document.querySelector("#text4")
// const el5 = document.querySelector("#text5")
// const el6 = document.querySelector("#text6")


// el.addEventListener("mouseover", handleIt)
// function handleIt() {

// }
// el2.addEventListener("click", handleIt)
// function handleIt() {
    
// }
// el3.addEventListener("click", handleIt)
// function handleIt() {
   
// }
// el4.addEventListener("click", handleIt)
// function handleIt() {
    
// }
// el5.addEventListener("click", handleIt)
// function handleIt() {
    
// }
// el6.addEventListener("mouseover", handleIt)
// function handleIt() {
//     console.log('hi')
//     el.style.display = "block"
// }


const el = document.querySelectorAll(".text")

el. forEach(p =>
    p.addEventListener('mouseover', handleIt))


function handleIt(e) {
    e.target.style.display = "none"

}

// function changeColor (e) {
//     e.navbar.style.color = "blue";
// }

// navbar.forEach(p => p.addEventListener("mouseover", changeColor))