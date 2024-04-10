const Contact = ({ item }) => {
  const { id, name, number } = item;
  return (
    <li>
      <h2> {name}</h2>
      <p>{number}</p>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
