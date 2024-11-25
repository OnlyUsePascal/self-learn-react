import { useState } from "react";

const Numbers = ({ persons, filter }) => {
  return (
    <>
      <h3>Numbers</h3>
      <table>
        {persons
          .filter((person) => person.name.includes(filter))
          .map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

const Form = ({ vars, callbacks }) => {
  const { name, phone } = vars;
  const { addPerson, setName, setPhone} = callbacks;

  // TODO: HOW TO DEAL WITH MULTIPLE ONCHANGE MORE EFFICIENTLY ?
  const onNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const onPhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
  };

  return (
    <form>
      Name: <input value={name} onChange={onNameChange} />
      <br />
      Phone: <input value={phone} onChange={onPhoneChange} />
      <br />
      <button type="submit" onClick={addPerson}>
        Submit
      </button>
    </form>
  );
};

const Filters = ({vars, cbs}) => {
  const {filter} = vars
  const {setFilter} = cbs
  
  const onFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };
  
  return (
    <>
      <h3>Filters</h3>
      Name: <input type="text" value={filter} onChange={onFilterChange} />
    </>
  )
}

const Homework = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [filter, setFilter] = useState("");

  /**
   * @param {Event} e
   */
  const addPerson = (e) => {
    e.preventDefault();

    if (name.length == 0) return;
    const newPerson = {
      name: name,
      number: phone,
      id: persons.length + 1,
    };

    // check if exists already
    if (persons.findIndex((person) => person.name == name) != -1) {
      alert(`Person ${name} already exists!`);
      setName("");
      setPhone("");
      return;
    }

    // add to phone book
    setPersons(persons.concat(newPerson));
    setName("");
    setPhone("");
  };

  return (
    <>
      <h2>Homework - The Phonebook</h2>
      <Form
        vars={{ name, phone }}
        callbacks={{ setPhone, setName, addPerson }}
      />

      <Numbers persons={persons} filter={filter} />
    
      <Filters vars={{filter}} cbs={{setFilter}} />
    </>
  );
};

export default Homework;
