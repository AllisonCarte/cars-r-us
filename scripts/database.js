// the DB that the rest of my code will pull from
const database = {
    orderBuilder: {},

    paintColors: [
        {id: 1, color: "silver", price: 300},
        {id: 2, color: "midnight blue", price: 250,},
        {id: 3, color: "firebrick red", price: 250},
        {id: 4, color: "spring green", price: 250}
    ],
    interior: [
        {id: 1, type: "beige fabric", price: 75},
        {id: 2, type: "charcoal fabric", price: 100},
        {id: 3, type: "white leather", price: 200},
        {id: 4, type: "black leather", price: 150}
    ],
    tech: [
        {id: 1, capabilities: "basic package", price: 135},
        {id: 2, capabilities: "navigation package", price: 300},
        {id: 3, capabilities: "visibility package", price: 450},
        {id: 4, capabilities: "ultra package", price: 600}
    ],
    wheels: [
        {id: 1, wheel: "17-inch pair radial", price: 75},
        {id: 2, wheel: "17-inch pair radial black", price: 85},
        {id: 3, wheel: "18-inch pair spoke silver", price: 225},
        {id: 4, wheel: "18-inch pair spoke black", price: 330}
    ],
    customOrder: [
        {
            id: 1,
            paintId: 2,
            interiorId: 3,
            techId: 4,
            wheelId: 1,
            timestamp: 6514952281682
        }
    ]
}
// pulls and exports from paintColors
export const getPaint = () => {
    return database.paintColors.map(color => ({...color}))
}
// pulls and exports from interior
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
// pulls and exports from tech
export const getTech = () => {
    return database.tech.map(tech => ({...tech}))
}
// pulls and exports from wheels
export const getWheels = () => {
    return database.wheels.map(tacoW => ({...tacoW}))
}
// pulls and exports from customOrder
export const getOrder = () => {
    return database.customOrder.map(order => ({...order}))
}



export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // copy the current state of user choices
    const newOrder = { ...database.orderBuilder}

// add a new primary key to the object 
const lastIndex = database.customOrder.length - 1
newOrder.id = database.customOrder[lastIndex].id + 1

// add a timestamp to the order
newOrder.timestamp = Date.now()

// add the new order object to custom orders state
database.customOrder.push(newOrder)

// reset the temporary state for user choices
database.orderBuilder = {}

// broadcast a notification that permanent state has changed
document.dispatchEvent(new CustomEvent("stateChanged"))

}