import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: '123-243-2334' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  //update newNumber
  const handleNumberChange = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
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
      <ul>
        {/* Map and list over entries*/}
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
