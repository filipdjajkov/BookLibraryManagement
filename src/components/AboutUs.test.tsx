import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs';

it('showing the location of the object', () => {
    const { queryByText } = render(<AboutUs />);
    expect(queryByText(/Location/i)).toBeTruthy();
});
