import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import './Todo.css'
function Todo() {

    const [task, setTask] = useState("")
    const [price,setPrice] = useState('')
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const onChangePrice =(e)=>{
        setPrice(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        const newPrice = price;
        setData([...data, newData,newPrice])

        setTask('')
        setPrice('')    
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
        
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Enter Product name & Price</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" placeholder='Enter Product name' type="text" className="form-control" value={task} onChange={onChangeHandler} />
                                <input id="todo-input" placeholder='Enter Price' type="text" className="form-control" value={price} onChange={onChangePrice} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Enter Product&Price</button>
                        </div>
                    </form>

                    {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            price={value}
                            onSelcet={deleteItem}
                        />
                    })}


                </div>
            </div>
        </div>
    )
}

export default Todo
