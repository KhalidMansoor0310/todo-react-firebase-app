import React from 'react'
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const TodoInput = ({ createTodoItem ,isLoading}) => {
    const [value, setValue] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if(value===''){
            toast('Please Enter something !!!')
        }
        else{
            createTodoItem(value)
    
        }
        setValue("")
    }

    return (
        <div className="col-md-6 my-4 m-auto">
            <form onSubmit={handleSubmit}>
                <h3>Enter To-Do</h3>
                <div className="form-group">
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Create todo"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                {
                 <button onClick={handleSubmit} className='btn btn-success  my-3 w-100'>  <i className="fa fa-plus"></i> Create </button>
                }
                
            </form>
        </div>
    )
}
export default TodoInput