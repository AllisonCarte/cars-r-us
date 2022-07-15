import { getOrder, getInterior, getPaint, getTech} from "./database.js";
import { getWheels } from "./database.js";

const buildOrderListItem = (order) => {
// define variables to store imported functions
const interiorList = getInterior()
const colorList = getPaint()
const technoList = getTech()
const wheelsList = getWheels()

const foundInterior = interiorList.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const foundPaints = colorList.find(
    (paint) => {
        return paint.id === order.paintId
    }
)

const foundTech = technoList.find(
    (tech) => {
        return tech.id === order.techId
    }
)

const foundWheels = wheelsList.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)


//totalCost is equal to the price of selected components
const totalCost = foundInterior.price + foundPaints.price + foundTech.price + foundWheels.price

let costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

// string interpolation used to return order.id and constString as part of a list item
return `<li>
Order #${order.id} is a ${foundPaints.color} car with a ${foundInterior.type} interior and ${foundWheels.wheel} wheels. It includes the ${foundTech.capabilities} and costs ${costString}`
}

export const Orders = () => {

    const orders = getOrder()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}