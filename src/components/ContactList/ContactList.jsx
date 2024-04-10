import Contact from "../Contact/Contact";

const ContactList = ({ contacts = [] }) => {
  if (!contacts.length) {
    return "No contacts to show...";
  }
  return (
    <ul>
      <h2> Contact List</h2>
      {contacts.map((contact) => (
        <Contact item={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
