const Search = (props) => {
  const { persons, searchName, removeEntry } = props;

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
              {person.name} {person.number}{' '}
              <button onClick={() => removeEntry(person.id, person.name)}>
                delete
              </button>
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
              {person.name} {person.number}{' '}
              <button onClick={() => removeEntry(person.id, person.name)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default Search;
