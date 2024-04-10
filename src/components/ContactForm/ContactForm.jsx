import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, options) => {
    console.log({ ...data, id: nanoid() });
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
