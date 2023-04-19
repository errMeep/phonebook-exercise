import { useState } from 'react';
import Search from './Components/Search';
import Form from './Components/Form';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleSubmit = (e) => {
    //prevent default form
    e.preventDefault();

    //check for name and return if match
    for (let x = 0; x < persons.length; x++) {
      if (persons[x].name === newName) {
        alert(`${newName} is already added to the phonebook`);
        return 0;
      }
    }
    //code for adding to array persons
    const lastplace = persons[persons.length - 1].id;
    const temp = {
      name: newName,
      id: lastplace + 1,
      number: newNumber,
    };
    setPersons(persons.concat(temp));
    setNewName('');
    setNewNumber('');
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

      <Search persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
