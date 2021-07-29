import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import * as contactOperations from "../redux/contacts/contact-operations"

class Contacts extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    };

    render() {
        return (
        <div className="Contact-container">
      
            <div className="Contact-form__wrapper">
                <ContactForm />
            </div>
            
            <div className="Contact-list__wrapper">
                <h2>Contacts</h2>
        
                <Filter />
        
                <ContactList />
            </div>
          
        </div>
    )
    };
};

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactOperations.fetchContacts())
});

export default connect(null, mapDispatchToProps)(Contacts);