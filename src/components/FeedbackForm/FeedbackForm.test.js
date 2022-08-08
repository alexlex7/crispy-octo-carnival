import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import FeedbackForm from './FeedbackForm';
import userEvent from '@testing-library/user-event';

test('rendering and submitting form', async () => {
  const handleSubmit = jest.fn();
  render(<FeedbackForm onSubmitForm={handleSubmit} />);
  const feedback = userEvent.setup();

  expect(
    screen.getByRole('textbox', { name: /first name/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('textbox', { name: /last name/i })
  ).toBeInTheDocument();

  expect(screen.getByRole('textbox', { name: /phone/i })).toBeInTheDocument();

  expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();

  expect(
    screen.getByRole('textbox', { name: /feedback/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('combobox', { name: /department/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('checkbox', {
      name: /\- permission to process personal data/i,
    })
  ).toBeInTheDocument();

  await feedback.type(
    screen.getByRole('textbox', { name: /first name/i }),
    'Alex'
  );
  await feedback.type(
    screen.getByRole('textbox', { name: /last name/i }),
    'Dee'
  );
  await feedback.type(
    screen.getByRole('textbox', { name: /phone/i }),
    '+380 (93) 321 23'
  );
  await feedback.type(
    screen.getByRole('textbox', { name: /email/i }),
    'mail@gmail.com'
  );
  await feedback.type(
    screen.getByRole('textbox', { name: /feedback/i }),
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos recusandae deserunt accusamus est illum nesciunt soluta quae iusto.'
  );
  await feedback.selectOptions(
    screen.getByRole('combobox', { name: /department/i }),
    'value2'
  );
  await feedback.click(
    screen.getByRole('checkbox', {
      name: /\- permission to process personal data/i,
    })
  );

  await feedback.click(screen.getByRole('button', { name: /Send feedback/i }));

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'Alex',
      lastName: 'Dee',
      phone: '3809332123',
      email: 'mail@gmail.com',
      feedback:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos recusandae deserunt accusamus est illum nesciunt soluta quae iusto.',
      department: 'value2',
      permission: true,
      rating: 0,
    });
  });
});
