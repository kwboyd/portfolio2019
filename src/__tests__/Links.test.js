import 'jest-dom/extend-expect'
import React from 'react';
import {
    render,
    cleanup
} from '@testing-library/react';

import Links from '../about/Links';

afterEach(cleanup)

test('renders a GitHub link with href', () => {
    const {getByText} = render(<Links />)
    expect(getByText('GitHub')).toHaveAttribute('href', 'https://github.com/kwboyd');
})

test('renders at least three links', () => {
    const {getAllByTestId} = render(<Links />)
    expect(getAllByTestId('link-list').length).toBeGreaterThanOrEqual(3);
})

test('renders a list element with a list-0 class', () => {
    const {queryAllByTestId} = render(<Links />)
    expect(queryAllByTestId('link-list')[0]).toHaveClass('list-0');
})