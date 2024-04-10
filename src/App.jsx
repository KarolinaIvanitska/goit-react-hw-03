import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  //contact-logic
  const phoneContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(phoneContacts);

  const handleDelete = (id) => {
    console.log(id);
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };
  //=====================================

  //Searchbar-logic
  const [searchStr, setSearchStr] = useState("");

  //Відфільтровані дані масиву - виконається пошук за ім'ям
  const getFilteredData = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };

  const filteredData = getFilteredData();
  //======================================

  //Add contacts
  const addContact = (contact) => {
    setContacts((prev) => [contact, ...prev]);
  };
  //======================================

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchStr={searchStr} setSearch={setSearchStr} />
      <ContactList contacts={filteredData} onDelete={handleDelete} />
    </div>
  );
}

export default App;
