import eventListeners from "./contactCollection"

let counter = 0
const createHTML = {
    createContactHTML: (contact) => {
        const contactWrapper = document.createElement("DIV")


        contactWrapper.setAttribute("id", contact.id)
        const h = document.createElement("h1")
        const text = document.createTextNode(contact.name)
        const numberP = document.createElement("P")
        const number = document.createTextNode(contact.phoneNumber)
        const addressP = document.createElement("P")
        const address = document.createTextNode(contact.address)

        // Delete button
        const deleteContactButton = document.createElement("button")
        deleteContactButton.setAttribute("id", `deleteButton--${contact.id}`)
        deleteContactButton.textContent = `Delete ${contact.name}`

        // Edit button
        const editContactButton = document.createElement("button")
        editContactButton.setAttribute("id", `editButton--${contact.id}`)
        editContactButton.textContent = `Edit ${contact.name}`

        h.appendChild(text)
        numberP.appendChild(number)
        addressP.appendChild(address)
        contactWrapper.appendChild(h)
        contactWrapper.appendChild(addressP)
        contactWrapper.appendChild(numberP)
        contactWrapper.appendChild(deleteContactButton)
        contactWrapper.appendChild(editContactButton)

        return contactWrapper
    }
    ,
    addDeleteButton: () => {
        const newButton = document.createElement("BUTTON")
        newButton.setAttribute("id", "delete_button")
        newButton.innerHTML = "Delete"
        document.querySelector("fieldset").appendChild(newButton)
    }
}
export default createHTML