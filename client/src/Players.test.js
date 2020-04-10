import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import ChungusData from './components/DummyComponent'; 

test('test if click it appears on the document', () => {
    // Arrange 
    const {getByText} = render(<ChungusData />);  

    // Act 
    // none

    // Assert
    const clickBait = getByText(/Click it!/i)
    expect(clickBait).toBeInTheDocument();  
})

test('if my h2 appears on the document', () => {
    // Arrange 
    const {getByText} = render(<ChungusData />); 

    // Act
    // none

    //Assert 
    const theHeader = getByText(/Women's World Cup Searches/i); 
    expect(theHeader).toBeVisible(); 
})

test('if my h3 appears in the document', () => {
    // Arrange 
    const {getByText} = render(<ChungusData />); 

    // Act 
    // none

    // Assert 
    const theH3 = getByText(/Wanna see something cool?/i); 
    expect(theH3).toBeInTheDocument(); 
})

test('if one of the p"s exist in the document', () => {
    // Arrange 
    const {getByText} = render(<ChungusData />); 

    // Act 
    // none

    //Assert
    const theP = getByText(/That little toggle up there/i); 
    expect(theP).toBeVisible(); 
})