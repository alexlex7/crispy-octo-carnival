import React, { useState } from 'react';
import styles from './FeedbackForm.module.css';
import PhoneInput from 'react-phone-input-2';
import StarRating from '../StarRating/StarRating';
import PropTypes from 'prop-types';
import { calculateRating } from '../../helpers/calculateRating';
import { validateForm } from '../../helpers/formValidation.js';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  feedback: '',
  department: 'value1',
  permission: false,
  rating: 0,
};

const initialErrors = {
  firstName: { valid: true, message: '' },
  lastName: { valid: true, message: '' },
  phone: { valid: true, message: '' },
  email: { valid: true, message: '' },
  feedback: { valid: true, message: '' },
};

export default function FeedbackForm({ onSubmitForm }) {
  const [formData, setFormData] = useState(initialState);
  const [validationErrors, setValidationErrors] = useState(initialErrors);

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleChangeInputs = (e) => {
    const { name } = e.target;
    switch (name) {
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

  const validationHandler = (e) => {
    const { name, value } = e.target;
    const validateResult = validateForm(name, value);
    if (validateResult === undefined) {
      return;
    }
    setValidationErrors({ ...validationErrors, ...validateResult });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmitForm(formData);
    setFormData(initialState);
  };

  const handleSetRating = (mousePosition) => {
    const rating = calculateRating(mousePosition);
    setFormData({ ...formData, rating });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        First name
        <input
          className={styles.input}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChangeInputs}
          required
          minLength="1"
          placeholder="enter your first name"
          onBlur={validationHandler}
        />
        {!validationErrors.firstName.valid ? (
          <span className={styles.error}>
            {validationErrors.firstName.message}
          </span>
        ) : null}
      </label>
      <label className={styles.label}>
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
          onBlur={validationHandler}
        />
        {!validationErrors.lastName.valid ? (
          <span className={styles.error}>
            {validationErrors.lastName.message}
          </span>
        ) : null}
      </label>
      <label className={styles.label}>
        Phone
        <PhoneInput
          inputProps={{ name: 'phone' }}
          buttonClass={styles.dropdownBtn}
          inputClass={styles.phoneInput}
          inputStyle={{ width: '100%' }}
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="+380 (93) 321 23"
          onBlur={validationHandler}
        />
        {!validationErrors.phone.valid ? (
          <span className={styles.error}>{validationErrors.phone.message}</span>
        ) : null}
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeInputs}
          required
          placeholder="email"
          onBlur={validationHandler}
        />
        {!validationErrors.email.valid ? (
          <span className={styles.error}>{validationErrors.email.message}</span>
        ) : null}
      </label>
      <label className={styles.label}>
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
          onBlur={validationHandler}
        ></textarea>
        {!validationErrors.feedback.valid ? (
          <span className={styles.error}>
            {validationErrors.feedback.message}
          </span>
        ) : null}
      </label>
      <label className={styles.ratingLabel}>
        <StarRating
          handleSetRating={handleSetRating}
          rating={formData.rating}
        />
        <p>{formData.rating}</p>
      </label>
      <label className={styles.label}>
        Department
        <select
          name="department"
          value={formData.department}
          onChange={handleChangeInputs}
          className={styles.select}
        >
          <option value="value1">Sales</option>
          <option value="value2">Delivery</option>
          <option value="value3">Support</option>
        </select>
      </label>
      <div className={styles.wrapper}>
        <label htmlFor="permission">
          - permission to process personal data
        </label>
        <input
          id="permission"
          type="checkbox"
          name="permission"
          checked={formData.permission}
          onChange={handleChangeInputs}
          required
        />
      </div>
      <button className={styles.btn} type="submit">
        Send feedback
      </button>
    </form>
  );
}

FeedbackForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
