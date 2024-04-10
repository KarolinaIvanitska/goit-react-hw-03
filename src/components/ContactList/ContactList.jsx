import Contact from "../Contact/Contact";

const ContactList = ({ contacts = [], onDelete }) => {
  if (!contacts.length) {
    return "No contacts to show...";
  }
  return (
    <ul>
      <h2> Contact List</h2>
      {contacts.map((contact) => (
        <Contact item={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
