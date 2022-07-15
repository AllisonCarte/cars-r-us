import { getWheels, setWheels } from "./database.js";
const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setWheels(parseInt(chosenOption))
        }
    }
)

// export function (Wheels) to return html for wheels
export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel style</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }
html += "</select>"
return html
}