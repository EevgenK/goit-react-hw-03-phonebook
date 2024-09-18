import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
// import { Component } from 'react';
import inititalState from './initialState';

import styles from './contact-form.module.scss';

// class ContactForm extends Component {
//   state = { ...inititalState };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     const result = onSubmit({ ...this.state });
//     if (result) {
//       this.reset();
//     }
//   };

//   reset() {
//     this.setState({ ...inititalState });
//   }
//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     const { handleSubmit, handleChange } = this;
//     return (
//
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <label className={styles.label}> Name</label>
//           <input
//             placeholder="Enter name"
//             className={styles.input}
//             onChange={handleChange}
//             type="text"
//             name="name"
//             value={name}
//             required
//           />
//           <label className={styles.label}> Number</label>
//           <input
//             placeholder="Enter phone number"
//             className={styles.input}
//             onChange={handleChange}
//             type="tel"
//             name="number"
//             value={number}
//             required
//           />
//           <button className={styles.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//
//     );
//   }
// }

// ****************************Formik*********

const validNumber = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
const schema = yup.object().shape({
  name: yup.string().min(3, 'Name is too short.').trim().required(),
  number: yup
    .string()
    .matches(
      validNumber,
      `The phone number must consist only of integer numbers and be in the following format: XXX-XXX-XX-XX`
    )
    .required(),
});

const ContactForm = props => {
  const handleSubmit = (values, { resetForm }) => {
    const { onSubmit } = props;
    const result = onSubmit({ ...values });
    result && resetForm();
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={inititalState}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="nameInp">
          {' '}
          Name
        </label>
        <Field
          placeholder="Enter name"
          className={styles.input}
          type="text"
          name="name"
          required
          id="nameInp"
        />
        <ErrorMessage component="p" className={styles.error} name="name" />
        <label className={styles.label} htmlFor="numberInp">
          {' '}
          Number
        </label>
        <Field
          placeholder="Enter phone number"
          className={styles.input}
          type="tel"
          name="number"
          required
          id="numberInp"
        />
        <ErrorMessage component="p" className={styles.error} name="number" />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
