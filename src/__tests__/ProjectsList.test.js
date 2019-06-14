import 'jest-dom/extend-expect'
import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import ProjectsList from '../projects/ProjectsList';

afterEach(cleanup)

test('renders at least three projects', () => {
    const {getAllByTestId} = render(<ProjectsList />)
    expect(getAllByTestId('project').length).toBeGreaterThanOrEqual(3);
})