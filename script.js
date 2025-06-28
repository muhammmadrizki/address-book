// Inisialisasi data dari localStorage
let allContacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Simpan ke localStorage
function saveToLocalStorage() {
  localStorage.setItem("contacts", JSON.stringify(allContacts));
}

// CREATE
function createContact(newContact) {
  const nextId =
    allContacts.length > 0 ? allContacts[allContacts.length - 1].id + 1 : 1;
  const contactToAdd = { id: nextId, ...newContact };
  allContacts.push(contactToAdd);
  saveToLocalStorage();
  renderContacts();
}

// UPDATE
function updateContact(id, newContactData) {
  allContacts = allContacts.map((contact) =>
    contact.id === id ? { ...contact, ...newContactData } : contact
  );
  saveToLocalStorage();
  renderContacts();
}

// DELETE
function deleteContact(id) {
  allContacts = allContacts.filter((contact) => contact.id !== id);
  saveToLocalStorage();
  renderContacts();
}

// Render ke HTML
function renderContacts() {
  const allContactsListElement = document.getElementById("all-contacts");
  allContactsListElement.innerHTML = allContacts
    .map((contact) => {
      return `
        <li class="p-4 bg-white dark:bg-gray-700 shadow rounded">
          <h2 class="text-lg font-semibold">${contact.name}</h2>
          <p>Email: ${contact.email}</p>
          <p>Phone: ${contact.phone}</p>
          <p>Age: ${contact.age}</p>
          <p>City: ${contact.city}</p>
          <button class="delete-button mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" data-id="${contact.id}">
            Delete
          </button>
        </li>
      `;
    })
    .join("");

  // Event listener untuk delete
  document.querySelectorAll(".delete-button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.getAttribute("data-id"));
      deleteContact(id);
    });
  });
}

// Form Submit Handler
function handleSubmitContactForm(event) {
  event.preventDefault();

  const formData = new FormData(contactFormElement);
  const newContact = {
    name: String(formData.get("name")),
    age: Number(formData.get("age")),
    email: String(formData.get("email")),
    phone: String(formData.get("phone")),
    city: String(formData.get("city")),
  };

  createContact(newContact);
  contactFormElement.reset();
}

// Ambil elemen form & beri event listener
const contactFormElement = document.getElementById("contact-form");
contactFormElement.addEventListener("submit", handleSubmitContactForm);

// Tampilkan data saat aplikasi pertama dijalankan
renderContacts();
