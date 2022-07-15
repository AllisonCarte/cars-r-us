import { Technology } from "./technologies.js"
import { Paints } from "./paints.js"
import { Wheels } from "./wheels.js"
import { Interiors } from "./interiors.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click", (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)
// html builder with string interpolation to call upon functions imported from other modules
export const CarsR = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                ${Paints()}
                  
            </section>
            <section class="choices__interior options">
                ${Interiors()}
                
            </section>
            <section class="choices__tech options">
                ${Technology()}
                 
            </section>
            <section class="choices__wheels options">
            ${Wheels()}  
        </section>
       </article>

       <article>
        <button id="orderButton">Create Custom Order</button>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

