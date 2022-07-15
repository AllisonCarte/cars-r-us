import { CarsR } from "./cars-r-us.js"
// defined variable and used querySelector to select #container from index.html
const mainContainer = document.querySelector("#container")
// set the innerHTML of #container in index.html to the imported CarsR() function
const renderAllHTML = () => {
    mainContainer.innerHTML = CarsR()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})