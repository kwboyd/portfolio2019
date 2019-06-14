import 'jest-dom/extend-expect'
import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import AboutText from '../about/AboutText';

afterEach(cleanup)

test('renders the intro text', () => {
    const {getByTestId} = render(<AboutText />)
    expect(getByTestId('intro')).toHaveTextContent('Hi! I\'m a full-stack developer in Denver, CO.');
})