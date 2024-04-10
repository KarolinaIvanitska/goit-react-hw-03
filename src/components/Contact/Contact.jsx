const Contact = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li>
      <h2> {name}</h2>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
