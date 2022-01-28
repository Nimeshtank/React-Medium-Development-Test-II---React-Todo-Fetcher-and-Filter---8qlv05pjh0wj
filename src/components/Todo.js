 import React from 'react';

 export const Todo  = () =>{
     const [todo, setTodo] = useState([]);

  async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos ");
    const res = await data.json();

    setTodo(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    
      {todo.map((data) => {
        return (

         <div  className="todo" id="todo-${data.id}">

           <h1>{data.title}</h1>
           <h1>{data.completed ? 'Completed' : 'Incomplete'}</h1>
         </div>
         
        );
      })}
    </>
  );
 }
