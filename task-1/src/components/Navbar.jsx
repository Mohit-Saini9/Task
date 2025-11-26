import React, { useState } from 'react'



const Navbar = ({ setPage }) => {
    const [mode, SetMode] = useState('light');

    const themechange = () => {

        if (mode === 'light') {
            SetMode('dark')
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "white";
        }
        else {
            SetMode('light');
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";

        }
    }


    return (
        <>

            <nav className={`navbar navbar-expand-sm navbar-light shadow text-black ${mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item fs-6">
                                <button className=" btn nav-link" onClick={() => setPage("task")}>Task</button>

                            </li>
                            <li className="nav-item fs-6">
                                <button className="nav-link " href="" onClick={() => setPage("home")}>
                                    Home
                                </button>
                            </li>
                        </ul>
                        <button className="btn btn-primary" type="button"
                            onClick={() => themechange()}
                        >{mode === "light" ? "Dark Mode" : "Light Mode"}</button>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;