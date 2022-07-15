import { getInterior, setInterior } from "./database.js";
const interiors = getInterior()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setInterior(parseInt(chosenOption))
        }
    }
)

// export function to return html for interiors
export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior style</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.type}</option>`
    }
    html += "</select>"
    return html
}