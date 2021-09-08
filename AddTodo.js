import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or desc is missing");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="form-group">
                    <label htmlFor="desc">To Do Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>

        </div>
    )
}
