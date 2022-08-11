import { validateForm } from '../formValidation';

describe('validate form test', () => {
  test('validate first name field true value', () => {
    expect(validateForm('firstName', 'Alex')).toEqual({
      firstName: { valid: true, message: '' },
    });
  });
  test('validate first name field false value', () => {
    expect(validateForm('firstName', 'A')).toEqual({
      firstName: {
        valid: false,
        message: 'First name must be 2 char. min.',
      },
    });
  });
  test('validate last name field true value', () => {
    expect(validateForm('lastName', 'Sanches')).toEqual({
      lastName: {
        valid: true,
        message: '',
      },
    });
  });
  test('validate last name field false value', () => {
    expect(validateForm('lastName', 'S')).toEqual({
      lastName: {
        valid: false,
        message: 'Last name must be 2 char. min.',
      },
    });
  });
  test('validate email field false value', () => {
    expect(validateForm('email', 'aleksgmail.com')).toEqual({
      email: {
        valid: false,
        message: 'Email must be valid.',
      },
    });
  });
  test('validate email field true value', () => {
    expect(validateForm('email', 'aleks@gmail.com')).toEqual({
      email: {
        valid: true,
        message: '',
      },
    });
  });
  test('validate feedback field too short value', () => {
    expect(
      validateForm(
        'feedback',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit'
      )
    ).toEqual({
      feedback: {
        valid: false,
        message: 'Feedback must be 100 char. min.',
      },
    });
  });
  test('validate feedback field true value', () => {
    expect(
      validateForm(
        'feedback',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos recusandae deserunt accusamus est illum nesciunt soluta quae iusto.'
      )
    ).toEqual({
      feedback: { valid: true, message: '' },
    });
  });

  test('validate feedback field too long value', () => {
    expect(
      validateForm(
        'feedback',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos recusandae deserunt accusamus est illum nesciunt soluta quae iusto.'
      )
    ).toEqual({
      feedback: {
        valid: false,
        message: 'Feedback must be 150 char. max.',
      },
    });
  });

  test('validate phone field false value', () => {
    expect(validateForm('phone', '380 (98) 66 70 67')).toEqual({
      phone: { valid: false, message: 'Phone must be valid' },
    });
  });

  test('validate phone field true value', () => {
    expect(validateForm('phone', '+380 (98) 66 70 677')).toEqual({
      phone: { valid: true, message: '' },
    });
  });

  test('not valid form field name', () => {
    expect(validateForm('rating')).toBe(undefined);
  });
});
