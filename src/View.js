
  export const View = ({tasks}) => {
    console.log(tasks);

    return (
      <>
        <h2>View and Edit Tasks</h2>

          {tasks.map(x => <h3>{x}</h3>)}
      </>

      );
  };