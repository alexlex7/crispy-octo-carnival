export function validateForm(name, value) {
  switch (name) {
    case 'firstName':
      if (value.length < 2) {
        return {
          firstName: {
            valid: false,
            message: 'First name must be 2 char. min.',
          },
        };
      } else {
        return {
          firstName: { valid: true, message: '' },
        };
      }
    case 'lastName':
      if (value.length < 2) {
        return {
          lastName: {
            valid: false,
            message: 'Last name must be 2 char. min.',
          },
        };
      } else {
        return {
          lastName: { valid: true, message: '' },
        };
      }
    case 'email':
      if (!value.match(/@/)) {
        return {
          email: {
            valid: false,
            message: 'Email must be valid.',
          },
        };
      } else {
        return {
          email: { valid: true, message: '' },
        };
      }

    case 'feedback':
      if (value.length < 100) {
        return {
          feedback: {
            valid: false,
            message: 'Feedback must be 100 char. min.',
          },
        };
      } else if (value.length > 150) {
        return {
          feedback: {
            valid: false,
            message: 'Feedback must be 150 char. max.',
          },
        };
      } else {
        return {
          feedback: { valid: true, message: '' },
        };
      }
    case 'phone':
      if (value.length < 19) {
        return {
          phone: {
            valid: false,
            message: 'Phone must be valid',
          },
        };
      } else {
        return {
          phone: { valid: true, message: '' },
        };
      }
    default:
      break;
  }
}
