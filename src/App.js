import { useState, useEffect } from 'react';
import Search from './Components/Search';
import Form from './Components/Form';
import backend from './Components/services';
import Notification from './Components/Notification';
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [notifMessage, setnotiMessage] = useState('');

  //update list from backend server
  useEffect(() => {
    backend.getAll().then((res) => {
      setPersons(res);
    });
  }, []);

  const handleSubmit = (e) => {
    //prevent default form
    e.preventDefault();

    //check for name and return if match
    for (let x = 0; x < persons.length; x++) {
      if (persons[x].name.toLowerCase() === newName.toLowerCase()) {
        if (
          window.confirm(
            `${persons[x].name} is already added to phonebook, replace old number with new one?`
          )
        ) {
          updateEntry(persons[x]);
          setNewName('');
          setNewNumber('');
          return 0;
        }
      }
    }
    //code for adding to array persons
    const temp = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(temp));
    backend.create(temp).then((res) => {
      setPersons(persons.concat(res));
      setnotiMessage(`${res.name} has been added`);
      setTimeout(() => {
        setnotiMessage(null);
      }, 5000);
    });
    setNewName('');
    setNewNumber('');
  };

  //remove from backend and frontend
  const removeEntry = (id, name) => {
    if (window.confirm(`Delete ${name}?`))
      backend.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
  };

  //update user
  const updateEntry = (user) => {
    const shellUser = { ...user, number: newNumber };
    backend.update(user.id, shellUser).then((res) => {
      setPersons(
        persons.map((person) => (person.id !== res.id ? person : res))
      );
    });
  };

  //update newName
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  //update newNumber
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  //update searchName
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifMessage} />
      <Form
        handleSubmit={handleSubmit}
        handleNumberChange={handleNumberChange}
        handleNameChange={handleNameChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <div>
        filter shown with:{' '}
        <input value={searchName} onChange={handleSearchChange} />
      </div>

      <Search
        persons={persons}
        searchName={searchName}
        removeEntry={removeEntry}
      />
    </div>
  );
};

export default App;
