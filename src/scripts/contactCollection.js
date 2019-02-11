import createHTML from "./contactList";
import clearDOM from "./clearDOM";
import eventListeners from "./contactForm";


const addToDOM = (HTML, DOMlocation) => {
  DOMlocation.appendChild(HTML);

};

const contactManager = {
  deleteContact: (contactId) => {
        return fetch(`http://127.0.0.1:8088/contacts/${contactId}`, {
                method: "DELETE"
        })

  },
  editContact: (contact, contactId) => {
        return fetch(`http://127.0.0.1:8088/contacts/${contactId}`, {
                method: "PUT",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
        }
        )
        .then(res => res.json())

  },
  getContact: (contactId) => {
        return fetch(`http://127.0.0.1:8088/contacts/${contactId}`)
        .then(res => res.json())

  },
  getContacts: () => {
    return fetch("http://127.0.0.1:8088/contacts")
      .then(res => res.json())
      .then(parsedContacts => {
        clearDOM();
        parsedContacts.forEach(element => {
          const contactWrapper = createHTML.createContactHTML(element);
          addToDOM(contactWrapper, document.querySelector(".output"));
        });

        createHTML.addDeleteButton();
        eventListeners.deleteListener();
        eventListeners.deleteContactListener()
        eventListeners.editContactListener()
      });
  },
  postContact: contactObject => {
    return fetch("http://127.0.0.1:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObject)
    }).then(res => res.json());
  }
};
export default contactManager;
