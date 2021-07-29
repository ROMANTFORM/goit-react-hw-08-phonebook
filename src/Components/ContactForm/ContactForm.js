
import React, { Component } from 'react';
import { connect } from "react-redux";
import shortid from "shortid";
import * as operations from '../../redux/contacts/contact-operations';

 const inputId = shortid.generate();
class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    };

    onInputChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };
    
    handleSubmit = evt => {
        evt.preventDefault();
        const { name, number } = this.state;
       
        this.props.addContact(name, number, inputId);

        this.setState({ name: "", number: "" });   
    };
    
    render()
    {
       
        const { name, number } = this.state;

        return (
            <div >
                <form className="form" onSubmit={this.handleSubmit}>
      
      <div className="subtitle">You can add new contact!</div>
      <div className="input-container ic2">
                        <input
                            id={inputId}
                            className="input"
                            type="text"
                            placeholder=" "
                            value={name}
                            name="name"
                            onChange={this.onInputChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
        <div className="cut cut-short"></div>
        <label htmlFor={inputId} className="placeholder">Name</label>
      </div>
      <div className="input-container ic2">
                        <input
                            id={inputId}
                            className="input"
                            type="tel"
                            placeholder=" "
                            value={number}
                            name="number"
                            onChange={this.onInputChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                        />
        <div className="cut"></div>
        <label htmlFor={inputId} className="placeholder">Number</label>
      </div>
      
      <button type="submit" className="submit">Add Contact</button>
    </form>

                </div>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    addContact: (name, number) => dispatch(operations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);