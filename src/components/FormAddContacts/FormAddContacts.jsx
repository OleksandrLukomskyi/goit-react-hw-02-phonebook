 import React, { Component } from 'react'
 import { nanoid } from 'nanoid'


 export class FormAddContacts extends Component {
   state = {
      name: ''
    }  
    
    
   nameInputId = nanoid(); 
   
   handleNameChange = (e) => {
      console.log(e.currentTarget.value); 
      this.setState({name: e.currentTarget.value})
          }


   handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
     
         }

         reset = () => {
            this.setState({name: ''})
         }

   render() {
           return (

<form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
         <input type="text" name="name" id={this.nameInputId} value={this.state.name} onChange={this.handleNameChange} required />
          
          <button type='submit'>Add contact</button>
       </form>

      )
         }
       }
       
       
             
           
       
       export default FormAddContacts
