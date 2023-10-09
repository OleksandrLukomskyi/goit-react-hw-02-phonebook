import React, {Component} from 'react';
import { nanoid } from 'nanoid'
import FormAddContacts from 'components/FormAddContacts/FormAddContacts';

export class App extends Component {
   
    state = {
      contacts: [],
      filter: ''
    }
    nameInputId = nanoid();
formSubmitHandler = data => {
   console.log(data)
}
   render()
   {
      return (
     <div
       style={{
         height: '100vh',
         display: 'flex',
         justifyContent: 'center',
         flexDirection: 'column',
         alignItems: 'center',
         fontSize: 40,
         color: '#010101'
       }}
     >
      <h1>Phonebook</h1>
<FormAddContacts onSubmit={this.formSubmitHandler} />

  
  

  <h2>Contacts</h2>
{/* //   <Filter ... /> */}
{/* //   <ContactList ... /> */}

     </div>
   )}
 };
 
 export default App
 
