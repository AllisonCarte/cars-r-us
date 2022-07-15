import { getPaint,setPaint } from "./database.js";
const paints = getPaint()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setPaint(parseInt(chosenOption))
        }
    }
)

// export function (paints) to return html for paint colors
export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }
    html += "</select>"
    return html
}