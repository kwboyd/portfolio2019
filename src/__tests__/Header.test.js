import 'jest-dom/extend-expect'
import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import Header from '../header/Header';

afterEach(cleanup)

test('renders Kate Boyd', () => {
    const {getByText} = render(<Header />)
    expect(getByText('Kate Boyd')).toBeTruthy();
})