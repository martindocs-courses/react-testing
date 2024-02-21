import { test, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from '../components/UserForm';

// User from 
describe('User Form', () => {
  
  // When run the test, all is handled by Node.js environment
  test('should render two inputs and a button', () => {

    /** QUERIES from React Testing Library 
     * Important part of testing is finding the elements that our component has created, examples;     * 
     - test the form --> we need to render form and find a button to click
     - test navigation --> we need to render navigation and find a link to click
     - make sure a header is visible --> find the header      
     */

    // 1. Render the component
    render(<UserForm />); // create fake browser environment   
    
    // 2. Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox'); // The "textbox" role is commonly used for input elements 
    const button = screen.getByRole('button');
 
    // 3. Assertion - what component is doing is what we expect 
    expect(inputs).toHaveLength(2)
    expect(button).toBeDefined();

  })

})