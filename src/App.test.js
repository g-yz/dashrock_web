import App from './App';
import { store } from './app/store';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
