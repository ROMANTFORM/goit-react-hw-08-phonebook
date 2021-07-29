import './ContactList.css';
import React from 'react';
import { connect } from "react-redux";
import * as operations from '../../redux/contacts/contact-operations';
import * as selectors from '../../redux/contacts/contact-selectors';
// import shortid from "shortid";


const ContactList = ({ contacts, onDeleteContact }) => {
    
    return (

        <div className="Contact-container">
            <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li key={contact.id} className="Contact-container__item">{contact.name}: {contact.number}
                        <button onClick={() => onDeleteContact(contact.id)} className="Contact-list__btn" >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    contacts: selectors.getVisibleContacts(state)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(operations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);