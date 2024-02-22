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
    
    /**
     * ARIA Role clarify the prupouse of an HTML element.
     * Many elements have implicit role, so we don't need to assign role for them, examples
     * 
     * heading --> h1, h2, h3, h4, h5, h6
     * list --> ul, li
     * button --> button
     * link --> a
     * textbox --> input, type="text"
     * 
     * get by role is prefered way
     */

    // 2. Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox'); // The "textbox" role is commonly used for input elements 
    const button = screen.getByRole('button');
 
    // 3. Assertion - what component is doing is what we expect 
    
    expect(inputs) // expect function is provided by Jest
    .toHaveLength(2) // matcher can be from React Testing Library or from Jest
    expect(button).toBeDefined();
  });

  test('it invoke onUserAdd when the form is submitted', async ()=> {
   
    // NOT THE BEST WAY 
    const argList = [];
    const callback = (...args) => {
      // when the callback is called the ...args argument are pushed to the array
       argList.push(args);
    }

    // 1. Render the component
    // render(<UserForm />);
    // render(<UserForm onUserAdd={()=> {}} />); 
    render(<UserForm onUserAdd={callback} />);

    // 2. Find two inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox'); 
    
    /**
     * Most common user events
     * 
     * user.click(element) --> simulate clicking on the provided element
     * user.keyboard('123') --> simulate typing
     * user.keyboard('{Enter}') --> simulate pressing enter key
     * 
     */
    
    // 2.1. Type the name in the input
    user.click(nameInput); // first click on input
    user.keyboard('Martin'); // type the string in the input
    
    // 2.2. Type the email in the input
    user.click(emailInput); // first click on input
    user.keyboard('martin@gmail.com'); // type the string in the input

    // 2.3. Find the button 
    const button = screen.getByRole('button');

    console.log('argList:', argList);

    // 2.4. Simulate the button click
    await user.click(button);

    // 3. Assertion to make sure 'onUserAdd' gets called with name and email
  
    expect(argList).toHaveLength(1); // callback function called atleast once
    expect(argList[0][0]).toEqual({name: 'Martin', email: 'martin@gmail.com'}) // check if argsList has the corerct name and email prop

  })

})