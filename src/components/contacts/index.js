import React, { useState } from 'react';
import { connect } from 'react-redux';
import keyGen from 'react-id-generator';
import { addContactV2, deleteContactV2, updateContactV2 } from './actions';


const Contact = ({
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
        onClick={() => deleteContactV2(user)}
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

const Contacts = ({ items }) => {
  const [id, setId] = useState(0);
  const [nom, setNom] = useState('test');
  const [prenom, setPrenom] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  console.log(id);
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
            onClick={() => addContactV2({
              id: 0, firstName: document.querySelector('#firstName').value, lastName: document.querySelector('#lastName').value, phone: document.querySelector('#phone').value, city: document.querySelector('#city').value
            })}
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
        {items.filter((i) => i.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1
          || i.lastName.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((user) => (
            <Contact
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
            onClick={() => updateContactV2({
              id, firstName: prenom, lastName: nom, phone, city
            })}
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

const mapToProps = (state) => {
  const { items } = state.contacts;
  return ({ items });
};

export default connect(mapToProps)(Contacts);
