import React, { useState } from 'react';
import styles from './FeedbackForm.module.css';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  feedback: '',
  department: 'value1',
  permission: false,
};

const initialErrors = {
  firstName: { valid: true, message: '' },
  lastName: { valid: true, message: '' },
  phone: { valid: true, message: '' },
  email: { valid: true, message: '' },
  feedback: { valid: true, message: '' },
};

const validateEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function FeedbackForm() {
  const [formData, setFormData] = useState(initialState);
  const [validationErrors, setValidationErrors] = useState(initialErrors);

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleChangeInputs = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFormData({ ...formData, firstName: e.target.value });
        break;
      case 'lastName':
        setFormData({ ...formData, lastName: e.target.value });
        break;
      case 'email':
        setFormData({ ...formData, email: e.target.value });
        break;
      case 'feedback':
        setFormData({ ...formData, feedback: e.target.value });
        break;
      case 'department':
        setFormData({ ...formData, department: e.target.value });
        break;
      case 'permission':
        setFormData({ ...formData, permission: e.target.checked });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialState);
  };

  // const validatePhone = (value, country) => {
  //   if (value.match(/12345/)) {
  //     return 'Invalid value: ' + value + ', ' + country.name;
  //   } else if (value.match(/1234/)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const validate = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        if (value.length < 2) {
          setValidationErrors({
            ...validationErrors,
            [name]: {
              valid: false,
              message: 'First name must be 2 char. min.',
            },
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            [name]: { valid: true },
            message: '',
          });
        }
        break;
      case 'lastName':
        if (value.length < 2) {
          setValidationErrors({
            ...validationErrors,
            [name]: {
              valid: false,
              message: 'Last name must be 2 char. min.',
            },
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            [name]: { valid: true },
            message: '',
          });
        }
        break;
      case 'email':
        if (!value.match(validateEmail)) {
          setValidationErrors({
            ...validationErrors,
            [name]: {
              valid: false,
              message: 'Email must be valid.',
            },
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            [name]: { valid: true },
            message: '',
          });
        }
        break;
      case 'feedback':
        if (value.length < 100) {
          setValidationErrors({
            ...validationErrors,
            [name]: {
              valid: false,
              message: 'Feedback must be 100 char. min.',
            },
          });
        } else if (value.length > 150) {
          setValidationErrors({
            ...validationErrors,
            [name]: {
              valid: false,
              message: 'Feedback must be 150 char. max.',
            },
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            [name]: { valid: true },
            message: '',
          });
        }
        break;
      case 'phone':
        if (value.length < 19) {
          setValidationErrors({
            ...validationErrors,
            [name]: {
              valid: false,
              message: 'Phone must be valid',
            },
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            [name]: { valid: true },
            message: '',
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        First name
        <input
          className={styles.input}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChangeInputs}
          required
          minLength="2"
          placeholder="enter your first name"
          onBlur={validate}
        />
        {!validationErrors.firstName.valid ? (
          <span className={styles.error}>
            {validationErrors.firstName.message}
          </span>
        ) : null}
      </label>
      <label>
        Last name
        <input
          className={styles.input}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChangeInputs}
          required
          minLength="2"
          placeholder="enter your last name"
          onBlur={validate}
        />
        {!validationErrors.lastName.valid ? (
          <span className={styles.error}>
            {validationErrors.lastName.message}
          </span>
        ) : null}
      </label>
      <label>
        Phone
        <PhoneInput
          inputProps={{ name: 'phone' }}
          buttonClass={styles.dropdownBtn}
          inputClass={styles.phoneInput}
          inputStyle={{ width: '100%' }}
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="+380 (93) 321 23"
          onBlur={validate}
        />
        {!validationErrors.phone.valid ? (
          <span className={styles.error}>{validationErrors.phone.message}</span>
        ) : null}
      </label>
      <label>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeInputs}
          required
          placeholder="email"
          onBlur={validate}
        />
        {!validationErrors.email.valid ? (
          <span className={styles.error}>{validationErrors.email.message}</span>
        ) : null}
      </label>
      <label>
        Feedback
        <textarea
          className={styles.input}
          name="feedback"
          rows="6"
          value={formData.feedback}
          onChange={handleChangeInputs}
          required
          minLength="100"
          maxLength="150"
          placeholder="feedback text"
          onBlur={validate}
        ></textarea>
        {!validationErrors.feedback.valid ? (
          <span className={styles.error}>
            {validationErrors.feedback.message}
          </span>
        ) : null}
      </label>
      <label>
        Department
        <select
          name="department"
          value={formData.department}
          onChange={handleChangeInputs}
          className={styles.select}
        >
          <option value="value1">Значение 1</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </label>
      <label>
        permission to process personal data
        <input
          type="checkbox"
          name="permission"
          checked={formData.permission}
          onChange={handleChangeInputs}
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Send feedback
      </button>
    </form>
  );
}
