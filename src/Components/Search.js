const NumbersList = (props) => {
  const { persons, searchName } = props;
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
const Search = (props) => {
  return <NumbersList persons={props.persons} searchName={props.searchName} />;
};
export default Search;
