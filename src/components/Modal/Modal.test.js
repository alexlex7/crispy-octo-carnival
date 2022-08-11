import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './Modal';

test('modal shows the children and a close button', () => {
  const handleClose = jest.fn();

  render(
    <Modal toggleModal={handleClose} isModalOpen={true}>
      <div>test</div>
    </Modal>
  );
  expect(screen.getByText('test')).toBeTruthy();

  fireEvent.click(screen.getByText(/x/i));

  expect(handleClose).toHaveBeenCalledTimes(1);
});
