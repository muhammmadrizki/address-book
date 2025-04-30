let allContacts = [
  {
    id: 1,
    name: "Muhammad Rizki",
    email: "muhammadrizki05@gmail.com",
    phone: "+6212345678",
    age: 26,
    city: "Palembang",
  },

  {
    id: 2,
    name: "Monica",
    email: "monica@example.com",
    phone: "+6212345678",
    age: 21,
    city: "Jakarta",
  },

  {
    id: 3,
    name: "Shafa",
    email: "shafana@example.co.id",
    phone: "+6253536737",
    age: 30,
    city: "Bandung",
  },
];

// READ
function displayContacts() {
  console.log("\n=== Contact List ===");
  allContacts.forEach((contact) => {
    console.log(`
    id: ${contact.id}
    name: ${contact.name}
    email: ${contact.email}
    phone: ${contact.phone}
    city: ${contact.city}
    age: ${contact.age}
    `);
  });
}

// CREATE
function createContact(newContact) {
  const nextId =
    allContacts.length > 0 ? allContacts[allContacts.length - 1].id + 1 : 1;

  const contactToAdd = {
    id: nextId,
    ...newContact,
  };

  allContacts.push(contactToAdd);

  console.log("Contact successfully created.");

  return contactToAdd;
}

// UPDATE
function updateContact(id, newContactData) {
  const updatedAllContacts = allContacts.map((oneContact) => {
    if (oneContact.id === id) {
      return {
        ...oneContact,
        ...newContactData,
      };
    } else {
      return oneContact;
    }
  });

  allContacts = updatedAllContacts;
  console.log(`Contact id:${id} has been updated`);
}

// DELETE
function deleteContact(id) {
  const updateContacts = allContacts.filter((contact) => contact.id !== id);
  if (updateContacts.length === allContacts.length) {
    console.log(`Contact with id ${id} does not exist`);
  } else {
    allContacts = updateContacts;
    console.log(`Contact with id ${id} has been removed`);
  }
}

// -----------------
// Start Application
// -----------------

// CREATE EXAMPLES
createContact({
  name: "Budi",
  email: "budi@example.com",
  phone: "+6288888888",
  age: 35,
  city: "Bandung",
});

createContact({
  name: "Mochammad",
  email: "mochammad@example.net",
  phone: "+629121445255",
  age: 32,
  city: "Jogjakarta",
});

createContact({
  name: "Michael Phelps",
  email: "michael.phelps@example.net",
  phone: "+622564674",
  age: 18,
  city: "Baltimore, Maryland, USA",
});

createContact({
  name: "Yao Ming",
  email: "yao.ming@examples.com",
  phone: "+142553647",
  age: 45,
  city: "Beijing",
});

// READ
displayContacts();

// UPDATE
// updateContact(2, { name: "Monica Bellerina", city: "Rome" });

// DELETE
// deleteContact(4);

// Render contacts to HTML
function renderContacts() {
  const allContactsListElement = document.getElementById("all-contacts");

  allContactsListElement.innerHTML = allContacts
    .map((oneContact) => {
      return `<li>
    <h2>${oneContact.name}</h2>
    <p>${oneContact.email}</p>
    <p>${oneContact.phone}</p>
    <p>${oneContact.age} </p>
    <p>${oneContact.city}</p>
    <button class="delete-button" data-id="${oneContact.id}">Delete</button>
    </li>`;
    })
    .join("");

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const contactId = Number(event.target.getAttribute("data-id"));
      deleteContact(contactId);
      renderContacts();
    });
  });
}

const contactFormElement = document.getElementById("contact-form");

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactFormElement);

  const newContactFormData = {
    name: String(formData.get("name")),
    age: Number(formData.get("age")),
    email: String(formData.get("email")),
    phone: String(formData.get("phone")),
    city: String(formData.get("city")),
  };

  createContact(newContactFormData);

  renderContacts();
});

renderContacts();
