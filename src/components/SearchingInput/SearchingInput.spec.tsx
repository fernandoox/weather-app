import React from 'react';
import {render, screen} from '@testing-library/react';
import SearchingInput from './SearchingInput';

test('renders SearchingInput component', () => {
    render(<SearchingInput/>);
    const inputEl = screen.getByTestId("searching-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("placeholder", "Search for a city");
});