import 'jest-dom/extend-expect'
import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';

import Project from '../projects/project';

const mockProject = {
    "id": 2,
    "name": "Ganba!",
    "image": "ganba",
    "tools": "Laravel, Vue.js, ES6, PHP",
    "description": "Test Description.",
    "repo": "https://github.com/kwboyd/ganba-app",
    "docs": "https://kwboyd.gitbooks.io/japanese-api/content/",
    "live": "https://ganba.herokuapp.com/",
    "awards": ['Awesome Award', 'Top Notch']
}

const testImg = "../test.png";

afterEach(cleanup)

test('renders the project name', () => {
    const {getAllByText} = render(<Project project={mockProject} image={testImg} />)
    expect(getAllByText('Ganba!').length).toBeGreaterThanOrEqual(1);
})

test('renders the project image', () => {
    const {getByAltText} = render(<Project project={mockProject} image={testImg} />)
    expect(getByAltText('Ganba!')).toHaveAttribute('src', testImg);
})

test('renders the tools list', () => {
    const {getByText} = render(<Project project={mockProject} image={testImg} />)
    expect(getByText(mockProject.tools, { exact: false })).toBeTruthy();
})

test('renders the project description', () => {
    const {getByText} = render(<Project project={mockProject} image={testImg} />)
    expect(getByText(mockProject.description)).toBeTruthy();
})

test('renders three project links if the project has them all', () => {
    const {getByText} = render(<Project project={mockProject} image={testImg} />)
    expect(getByText('repo')).toHaveAttribute('href', 'https://github.com/kwboyd/ganba-app');
    expect(getByText('docs')).toHaveAttribute('href', 'https://kwboyd.gitbooks.io/japanese-api/content/');
    expect(getByText('live')).toHaveAttribute('href', 'https://ganba.herokuapp.com/');
})

test('does not render links if the project does not have them', () => {
    const projectWithoutLinks = {...mockProject, ...{
        live: null,
        repo: null,
        docs: null
    }}
    const {queryByText} = render(<Project project={projectWithoutLinks} image={testImg} />)
    expect(queryByText('repo')).toBeNull();
    expect(queryByText('docs')).toBeNull();
    expect(queryByText('live')).toBeNull();
})

test('renders awards if the project has them', () => {
    const {getByText} = render(<Project project={mockProject} image={testImg} />)
    expect(getByText(mockProject.awards[0])).toBeTruthy();
    expect(getByText(mockProject.awards[1])).toBeTruthy();
})

test('does not render awards if the project does not have them', () => {
    const projectWithoutAwards = {...mockProject, ...{
        awards: []
    }}
    const {queryByTestId} = render(<Project project={projectWithoutAwards} image={testImg} />)
    expect(queryByTestId('awards')).toBeNull();
})