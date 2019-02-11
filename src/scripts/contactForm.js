import createContact from "./contact"
import contactManager from "./contactCollection"
import clearDOM from "./clearDOM";

const saveButton = document.querySelector("#save_button")
const loadButton = document.querySelector("#load_button")
const output = document.querySelector(".output")

const eventListeners = {
    editContactListener: () => {
        output.addEventListener("click", (event) => {
            // Was the event generated on a delete contact button?
            if (event.target.id.startsWith("editButton--")) {

                // Get the primary key of the contact from the button
                const contactId = event.target.id.split("--")[1]
                document.querySelector("#currentContactId").value = contactId

                // Change the text of the save button
                document.querySelector("#save_button").textContent = "Update"

                contactManager.getContact(contactId).then(
                    (contact) => {
                        document.querySelector("#input_1").value = contact.name
                        document.querySelector("#input_2").value = contact.address
                        document.querySelector("#input_3").value = contact.phoneNumber

                    }
                )
            }

        })
    },
    deleteContactListener: () => {
        output.addEventListener("click", (event) => {
            // Was the event generated on a delete contact button?
            if (event.target.id.startsWith("deleteButton--")) {

                // Get the primary key of the contact from the button
                const contactId = event.target.id.split("--")[1]

                // Remove from API
                contactManager.deleteContact(contactId).then(
                    contactManager.getContacts
                )

                // Show all contacts again
                // contactManager.getContacts()
            }

        })
    },
    saveListener: () => {
        saveButton.addEventListener("click", (event) => {
            const buttonText = document.querySelector("#save_button").textContent


            const name = document.querySelector("#input_1").value
            const address = document.querySelector("#input_3").value
            const phoneNumber = document.querySelector("#input_2").value

            const newContact = createContact(name, address, phoneNumber)

            if (buttonText === "Update") {
                const contactId = document.querySelector("#currentContactId").value
                contactManager.editContact( newContact, contactId )
                    .then(contactManager.getContacts)
            } else {
                contactManager.postContact(newContact)
            }



        })
    }
    ,
    loadListener: () => {
        loadButton.addEventListener("click", (event) => {
            // console.log(event)
            contactManager.getContacts()
            document.createElement
        }
        )
    }
    ,
    deleteListener: () => {
        const deleteButton = document.querySelector("#delete_button")
        deleteButton.addEventListener("click", (event) => {
            clearDOM()
            const deleteButton = (document.querySelector("#delete_button"))
            const fieldset = document.querySelector("#fieldset")
            fieldset.removeChild(deleteButton)
        })
    }
}



export default eventListeners
