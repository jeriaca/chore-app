
  export const View = ({tasks}) => {
    console.log(tasks);

    return (
      <>
        <h2>View and Edit Lists</h2>

          {tasks.map(x => <h3>{x}</h3>)}
      </>

      );
  };

//   tasks={tasks} 

// {tasks.map(x => <h3>{x}</h3>)}