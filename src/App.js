import TodoInput from "./components/TodoInput";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { db } from './firebase-config.js';
import { collection, getDocs, doc, addDoc, deleteDoc, updateDoc } from '@firebase/firestore'
import Spinner from "./components/Spinner";


function App() {
  
const usercollectionRef = collection(db, "todos")
  const [isLoading,setLoading] = useState(false);
  const [todoItems, setTodoItems] = useState([])
  const [filter,setFilter] = useState('');

  useEffect(() => {
    const gettodos = async () => {
      const data = await getDocs(usercollectionRef);
      setTodoItems(data.docs.map((doc) => ({ ...doc, id: doc.id })))
      // console.log(todoItems)
      setLoading(true);
    };
    gettodos();
  }, []);


 
  

  const createTodoItem = async (todo) => {
    // const newTodoItems = [...todoItems, { todo }];
    
    await addDoc(usercollectionRef, { todo: todo })
    // // setTodoItems(newTodoItems);
    // setTimeout(() => {
      //   toast('Created successfully');
    // }, 1000);
    window.location.reload(true);
  };
  
  
  const deleteTodoItem = async (index) => {

    const deletetodo = doc(db, 'todos', index);
    await deleteDoc(deletetodo)
    
    setLoading(true)
   
    // const newTodoItems = [...todoItems]
    
    // const dlt = newTodoItems.splice(index, 1);
    // setTimeout(() => {
    //   toast("Todo is deleted Successfully")
    // }, 1000);

   
    window.location.reload(true);
    // setTodoItems(newTodoItems);

  }
  
  
  const updateTodoItem = async (id, todo) => {
    // // this will be the already present Todo 
    // const newTodoItems = [...todoItems];
    
    
    // // this is the new which we are updating 
    // const item = newTodoItems[index];
    
    // // updated one 
    
    let newItem = prompt(`Update your todo`, todo);
    
    const update = await updateDoc(doc(db, "todos", id), { todo: newItem });

    

    
    window.location.reload(true);
    // // todoObj is the new obj  and new value of newItem is assigned to todo 
    // let todoObj = { todo: newItem };
    
    
    // newTodoItems.splice(index, 1, todoObj);  // splice(index,1) means to remove one value that is on the index 

    // console.log(newTodoItems)

    // if (newItem === null || newItem === "") {
      //   return;
      // } else {
        //   item.todo = newItem;
        //   toast('Successfully updated your todo')
        // }
        
        // setTodoItems(newTodoItems);
      };
      
      
      
      
      
      return (
        <div className="container my-5">
      <ToastContainer />
      <h1 className="text-center p-2 my-4 bg-light" >Todo List Application Using react Js<i class="fa-brands fa-react m-2 text-info"></i> & Firebase <i class="fa-solid fa-code-branch m-2 text-secondary"></i></h1>

      {/* search input and filter  */}
      <h3>Search here</h3>
      <input type="text"
      className="form-control"
      placeholder='Search here what you want to search'
      onChange={(e) => setFilter(e.target.value)}
      value={filter}
      />

      {/* 
      filter((val) => {
        console.log("+++++++++"+val)
        if (filter === "") {
          return val;
        }
        else if (val.todo.toLowerCase().includes(filter.toLowerCase())) {
          return val
        }
      }) */}

      
      

      <TodoInput createTodoItem={createTodoItem} />
        
      {
        isLoading ?  <div className="row">


        {
        todoItems.filter((val) => {
        
        if (filter === "") {
          return val;
        }
        else if (val._document.data.value.mapValue.fields.todo.stringValue.toLowerCase().includes(filter.toLowerCase())) {
          return val
        }}).map((item) => (
          <TodoItem key={item.id} index={item.id}
            item={item}
            deleteTodoItem={deleteTodoItem}
            updateTodoItem={updateTodoItem}
            isLoading={isLoading}

          />
        ))
        }
      </div>
      : <Spinner/>
      }
     


    </div>
  )
}


export default App




