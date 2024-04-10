import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const addSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Field must be more then 3!")
      .max(50, "Field must be less then 50!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Field must be more then 3!")
      .max(50, "Field must be less then 50!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, options) => {
    addContact({ ...data, id: nanoid() });
    options.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addSchema}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage component="alert" name="name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage component="alert" name="name" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
