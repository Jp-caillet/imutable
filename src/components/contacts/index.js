import React, { useState } from 'react';
import { connect } from 'react-redux';
import keyGen from 'react-id-generator';
import { addContact, deleteContact, updateContact } from './actions';


const Contact = ({
  dispatch,
  user,
  id,
  nom,
  prenom,
  phones,
  city
}) => {
  const { firstName, phone } = user;
  return (
    <li>
      <span>{`${firstName} ${phone}`}</span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(user.id))}
      >
        delete
      </button>
      <button
        type="button"
        onClick={() => {
          id(user.id);
          nom(user.lastName);
          prenom(user.firstName);
          phones(user.phone);
          city(user.city);
        }}
      >
        Update
      </button>
    </li>
  );
};

const Contacts = ({ contacts, dispatch }) => {
  const [id, setId] = useState(0);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  return (
    <div>
      <p> recherche: </p>
      <input placeholder="search nom/prenom" onChange={(e) => setSearch(e.target.value)} />
      <br />
      <br />
      <br />
      <div>
        <p> Ajouts: </p>
        <form className="form">
          <label htmlFor="firstName">
            Prénom
            <input type="text" id="firstName" name="firstName" />
          </label>
          <label htmlFor="lastName">
            Nom
            <input type="text" id="lastName" name="lastName" />
          </label>
          <label htmlFor="phone">
            Téléphone
            <input type="number" id="phone" name="phone" />
          </label>
          <label htmlFor="city">
            Ville
            <input type="text" id="city" name="city" />
          </label>
          <button
            type="button"
            onClick={() => dispatch(addContact({
              id: Date.now(), firstName: document.querySelector('#firstName').value, lastName: document.querySelector('#lastName').value, phone: document.querySelector('#phone').value, city: document.querySelector('#city').value
            }))}
          >
            Add
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <p> liste: </p>
      <ul>
        {contacts.filter((i) => i.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1
          || i.lastName.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((user) => (
            <Contact
              dispatch={dispatch}
              user={user}
              id={setId}
              nom={setNom}
              prenom={setPrenom}
              phones={setPhone}
              city={setCity}
              key={keyGen()}
            />
        )).sort()}
      </ul>
      <br />
      <br />
      <br />
      <div>
        Update (select an element of list for update):
        <form className="form">
          <label htmlFor="firstName">
            Prénom
            <input type="text" id="firstName" name="firstName" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          </label>
          <label htmlFor="lastName">
            Nom
            <input type="text" id="lastName" name="lastName" value={nom} onChange={(e) => setNom(e.target.value)} />
          </label>
          <label htmlFor="phone">
            Téléphone
            <input type="number" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label htmlFor="city">
            Ville
            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
          <button
            type="button"
            onClick={() => dispatch(updateContact({
              id, firstName: prenom, lastName: nom, phone, city
            }))}
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

const mapToProps = (state) => {
  const { contacts } = state;
  return ({ contacts });
};

export default connect(mapToProps)(Contacts);
