const ConditionalRender = () => {
  const todos = [
    { title: "check to do list", done: false },
    { title: "go home", done: true },
    { title: "become happy", done: true },
  ];

  return (
    <>
      <h2>Conditional Rendering</h2>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.title} {todo.done ? '✅' : ''}</li>;
        })}
      </ul>
    </>
  );
};

export default ConditionalRender;
