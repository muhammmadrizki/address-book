let allContacts = [
  {
    id: 1,
    name: "Muhammad Rizki",
    email: "muhammadrizki05@gmail.com",
    phone: "+6212345678",
    isAlive: true,
    city: "Palembang",
  },

  {
    id: 2,
    name: "Monica",
    email: "monica@example.com",
    phone: "+6212345678",
    isAlive: true,
    city: "Jakarta",
  },

  {
    id: 3,
    name: "Shafa",
    email: "shafana@example.co.id",
    phone: "+6253536737",
    isAlive: false,
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
    alive: ${contact.isAlive}
    `);
  });
}

// CREATE
function createContact(newContact) {
  const nextId =
    allContacts.length > 0 ? allContacts[allContacts.length - 1].id + 1 : 1;
  const contactToAdd = {
    ...newContact,
    id: nextId,
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
        ...oneContact, //id, name,email,phone,city
        ...newContactData, //name, city
      };
    } else {
      return oneContact;
    }
  });

  allContacts = updatedAllContacts;
  console.log(`Contact id:${id} has been updated`);
}

//DELETE
function deleteContact(id) {
  const updateContacts = allContacts.filter((contact) => contact.id !== id);
  if (updateContacts.length === allContacts.length) {
    console.log(`Contact with id{id} does not exist `);
  } else {
    allContacts = updateContacts;
    console.log(`Contact with id{id} contact removed`);
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
  isAlive: true,
  city: "Bandung",
});

createContact({
  name: "Mochammad",
  email: "mochammad@example.net",
  phone: "+629121445255",
  isAlive: false,
  city: "Jogjakarta",
});

createContact({
  name: "Michael Phelps",
  email: "michael.phelps@example.net",
  phone: "+622564674",
  isAlive: true,
  city: "Baltimore, Maryland, USA",
});

createContact({
  name: "Yao Ming",
  email: "yao.ming@examples.com",
  phone: "+142553647",
  isAlive: true,
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
    <p>${oneContact.isAlive} </p>
    <p>${oneContact.city}</p>
    </li>`;
    })
    .join("");
}

renderContacts();
