import Spinner from "./Spinner";

const TodoItem = ({ item, index, deleteTodoItem, updateTodoItem, isLoading }) => {
    // console.log("Wellcome"+item)
    console.log(isLoading)
    console.log(item.id)
    return (
        <div className="col-md-4 my-3">
            <div className="card shadow">
                <h5 className=" p-4 todo border-bottom">{item._document.data.value.mapValue.fields.todo.stringValue}</h5>
                <div className="d-flex">
                   
                    <button className="btn btn-success m-3" onClick={() => updateTodoItem(item.id, item._document.data.value.mapValue.fields.todo.stringValue)}><i className="fa fa-edit"></i></button>
                    <button  className = "btn btn-danger m-3" onClick={() => deleteTodoItem(index)}><i className="fa fa-trash"></i></button>


                </div>
            </div>
        </div>
    )

};
export default TodoItem;



