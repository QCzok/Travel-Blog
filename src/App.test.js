import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Start from './pages/Start';

test('Start page with simple text match', () => {
  render(
    <BrowserRouter>
      <Start />
    </BrowserRouter>);
  const linkElement = screen.getByText('Travel Blog');
  expect(linkElement).toBeInTheDocument();
});

test('Check Link functionality', () => {
  render(
    <BrowserRouter>
      <Start />
    </BrowserRouter>);
  fireEvent(
    screen.getByText('Galerie'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});