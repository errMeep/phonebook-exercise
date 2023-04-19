import { useState } from 'react';

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
    console.log(lastplace);
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

  const NumbersList = () => {
    //search for letter to match word in array
    const filteredResult = persons.filter((person) =>
      person.name.toLowerCase().includes(searchName.toLowerCase())
    );
    //if empty return all
    if (searchName === '') {
      return (
        <div>
          <ul>
            {persons.map((person) => (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {filteredResult.map((person) => (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>debug: {newName}</div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        filter shown with:{' '}
        <input value={searchName} onChange={handleSearchChange} />
      </div>

      <NumbersList />
    </div>
  );
};

export default App;
