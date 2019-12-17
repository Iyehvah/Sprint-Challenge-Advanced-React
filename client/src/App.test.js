import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
describe("Does the app render?" , () => {
    test('renders', () => {
        render(<App />);
      }); 
});

