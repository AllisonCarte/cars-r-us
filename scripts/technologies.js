import { getTech, setTech } from "./database.js";
const technology = getTech()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setTech(parseInt(chosenOption))
        }
    }
)

// export function (technology) to return html for tech
export const Technology = () => {
   let html = "<h2>Technology</h2>"

   html += '<select id="tech">'
   html += '<option value="0">Select a tech package</option>'

for (const tech of technology) {
    html += `<option value="${tech.id}">${tech.capabilities}</option>`
}
html += "</select>"
return html
}