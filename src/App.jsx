import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactToDelete) => {
    setContacts(contacts.filter((contact) => contact !== contactToDelete));
  };

  return (
    <>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
      <ContactForm addContact={addContact} />
    </>
  );
}

export default App;
