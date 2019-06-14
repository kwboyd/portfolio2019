import 'jest-dom/extend-expect'
import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import Links from '../about/Links';

afterEach(cleanup)

test('renders a GitHub link', () => {
    const {getByText} = render(<Links />)
    expect(getByText('GitHub')).toHaveAttribute('href', 'https://github.com/kwboyd');
})


test('renders a list element with a list-1 class', () => {
    const {getByTestId} = render(<Links />)
    expect(getByTestId('li-1')).toHaveClass('list-1');
})