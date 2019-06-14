import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import About from '../about/About';

afterEach(cleanup)

test('renders the about and links columns', () => {
    const {getByTestId} = render(<About />)
    expect(getByTestId('about-column')).toBeTruthy();
    expect(getByTestId('links-column')).toBeTruthy();
})