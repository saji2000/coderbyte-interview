const DataItem = ({ name, age }) => {
  return (
    <li>
      <span>{name} </span>
      <span>{age}</span>
    </li>
  );
};

const List = () => {
  const data = [
    { name: "Daniel", age: 25 },
    { name: "John", age: 24 },
    { name: "Jen", age: 31 },
  ];
  return (
    <div>
      <h3>List</h3>
      <ul>
        {data.map((item, index) => (
          <DataItem name={item.name} age={item.age} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default List;
