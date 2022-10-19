import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Todo from './Todo'

const Home = () => {

    const [data, setDeta] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        axios.get('https://reqres.in/api/login').then((res) => {
            console.log(res.data.data);
            setDeta(res.data.data)
        });
    }, []);

    return (

        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex">
                                <input className="form-control me-2" value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit" onSubmit={(e) => e.preventDefault()}>Search</button>
                            </form>
                        </div>
                    </div>
                    <Link to='/login'>
                        <button type="button" className="btn btn-success">LogOut</button>
                    </Link>
                </nav>
            </div>


            <div className="container">
                <Todo />

            </div>
            <div className="container mt-5 mx-3 row">
                {data.map((post) => {
                    const { id, name, year, color} = post;

                    return <div className="card " style={{width:"18rem"}}>
                            <div className="card-body ">
                            <h1>{id}</h1>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{year}</p>
                                <p>{color}</p>

                            </div>
                    </div>
                })}
            </div>
        </div>
    )
};

export default Home
