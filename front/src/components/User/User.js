/* ajout ce qui a ete demande pour les 48H le first et le last name lors du changement username CEST FAIT*/
  
/* MODIFIER SEULEMENT L'IDENTIFANT AVEC LE FORMULAIRE CEST FAIT */
/* ERREUR CONSOLE A ENELEVER EN APPUYANT SUR EDIT CEST FAIT */
/* BOUTON SAVE : -> ERREUR (PB DE CHAINE VIDE) ré ecrire le code C'EST FAIT*/
/* changer les fonctions pour que ce soit plus simple  c'est fait */



import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './User.css';

function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.username);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);

  const [showForm, setShowForm] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUsername }),
      });

      if (response.ok) {
        dispatch({
          type: 'SET_USER',
          payload: {
            username: newUsername,
            firstname: firstname,
            lastname: lastname,
          },
        });
      } else {
        console.error('Erreur');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
    setNewUsername('');
    setShowForm(false);
  };

  useEffect(() => {
    setNewUsername(user);
  }, [user]);

  return (
    <div className="header">
      {showForm ? (
        <div className='edit-user'>
          <h2>Edit user info</h2>
          <form onSubmit={handleSubmit}>
            <div className='divSpaceform'>
              <div className='divEdit'>
                <label htmlFor='edit-username'>User name:</label>
                <input
                  placeholder="New username..."
                  type="text"
                  value={newUsername}
                  id='edit-username'
                  onChange={handleInputChange}
                />
              </div>
              <div className='divEdit'>
                <label htmlFor='edit-firstname'>First name:</label>
                <input type="text" value={firstname} id='edit-firstname' disabled />
              </div>
              <div className='divEdit'>
                <label htmlFor='edit-lastname'>Last name:</label>
                <input type="text" value={lastname} id='edit-lastname' disabled />
              </div>
              <div className='edit-username-buttons'>
                <button className="button-edit-green" type="submit">Save</button>
                <button className="button-edit-red" onClick={toggleForm}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1>Welcome back<br />{user}!</h1>
          <button className="edit-button" onClick={toggleForm}>Edit Name</button>
        </div>
      )}
    </div>
  );
}

export default User;
