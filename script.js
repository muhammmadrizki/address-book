const contacts = [
  {
    id: 1,
    name: "Muhammad Rizki",
    email: "muhammadrizki05@gmail.com",
    phone: "+6212345678",
    isALive: true,
  },

  {
    id: 2,
    name: "Monica",
    email: "monica@example.com",
    phone: "+6212345678",
    isALive: true,
  },

  {
    id: 3,
    name: "Shafa",
    email: "shafana@example.co.id",
    phone: "+6253536737",
    isAlive: false,
  },
];

// for (let index = 0; index < contacts.length; index++) {
//   const contact = contacts[index];
//   console.log(`
//     id : ${contact.id}
//     name :${contact.name}
//     email : ${contact.email}
//     phone :${contact.phone}
//     isAlive : ${contact.isAlive}

//     `);
// }

// READ
function displayContacts() {
  console.log("\n=== Contact List ===");
  contacts.forEach((contact) => {
    console.log(`
    id: ${contact.id}
    name: ${contact.name}
    email: ${contact.email}
    phone: ${contact.phone}
    address: ${contact.address || "-"}
    isAlive: ${contact.isAlive}
    `);
  });
}

// CREATE
function createContact(newContact) {
  const nextId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
  const contactToAdd = {
    ...newContact,
    id: nextId,
  };
  contacts.push(contactToAdd);
  console.log("Contact successfully created.");
  return contactToAdd;
}

// UPDATE
function updateContact(id, updateData) {
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    contacts[contactIndex] = {
      ...contacts[contactIndex],
      ...updateData,
    };
    console.log(`Contact with id ${id} updated successfully.`);
  } else {
    console.log(`Contact with id ${id} not found.`);
  }
}

function deleteContact(id) {
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    contacts.splice(contactIndex, 1);
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
createContact({
  name: "Budi",
  email: "budi@example.com",
  phone: "+6288888888",
  address: "Jakarta",
  isAlive: true,
});

createContact({
  name: "Mochammad",
  email: "mochammad@example.net",
  phone: "+629121445255",
  address: "Jogja",
  isAlive: false,
});

createContact({
  name: "Michael Phelps",
  email: "michael.phelps@example.net",
  phone: "+622564674",
  address: "Baltimore, Maryland, USA",
  isAlive: true,
});

// READ
displayContacts();

// UPDATE
updateContact(2, { name: "Monica Bellucci", address: "Italy" });

// DELETE
deleteContact(3);

// READ AGAIN TO SEE CHANGES
displayContacts();
