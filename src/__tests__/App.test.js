import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import App from '../App';

afterEach(cleanup)

test('renders the app', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('app')).toBeTruthy();
})