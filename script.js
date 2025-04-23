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
    city: ${contact.city || "-"}
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
        ...oneContact, // id, name, email, phone, city, ....
        ...newContactData, // name, city, ...
      };
    } else {
      return oneContact;
    }
  });

  allContacts = updatedAllContacts;
  console.log(`Contact id:${id} has been updated`);
}

function deleteContact(id) {
  const contactIndex = allContacts.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    allContacts.splice(contactIndex, 1);
    console.log(`Contact with id ${id} deleted successfully.`);
  } else {
    console.log(`Contact with id ${id} not found.`);
  }
}
// Contoh pemakaian:
// -----------------
// Start Application
// -----------------

// CREATE EXAMPLES
// createContact({
//   name: "Budi",
//   email: "budi@example.com",
//   phone: "+6288888888",
//   address: "Jakarta",
//   isAlive: true,
// });

// createContact({
//   name: "Mochammad",
//   email: "mochammad@example.net",
//   phone: "+629121445255",
//   address: "Jogja",
//   isAlive: false,
// });

// createContact({
//   name: "Michael Phelps",
//   email: "michael.phelps@example.net",
//   phone: "+622564674",
//   address: "Baltimore, Maryland, USA",
//   isAlive: true,
// });

// READ
// displayContacts();

// UPDATE
updateContact(2, { name: "Monica Bellucci", city: "Rome" });
displayContacts();

// DELETE
// deleteContact(3);

// READ AGAIN TO SEE CHANGES
// displayContacts();
