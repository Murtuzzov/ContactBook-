const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h1>Телефонная книга</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phone}
            <button onClick={() => deleteContact(contact)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
