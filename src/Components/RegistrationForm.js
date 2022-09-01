import React, { useState } from "react";


let RegistrationForm = () => {
    let [state, setState] = useState({
        user: {
            username: '',
            email: '',
            password: '',
            designation: '',
            bio: '',
            terms: false
        }
    })

    let { user } = state;

    let updateInput = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                [event.target.name]: event.target.value

            }
        }))
    }

    let updateCheck = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                [event.target.name]: event.target.checked

            }
        }))
    }
    let submitRegister = (event) => {
        event.preventDefault();
        console.log(user);
        
    };

    return (
        <>
            {/* <pre>{JSON.stringify(state.user)}</pre> */}
            <div className="container d-flex justify-content-center mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h4">Register Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitRegister} >
                                    <div className="mb-3">
                                        <input
                                            name="username"
                                            value={user.username}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder="name" />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="email"
                                            value={user.email}
                                            onChange={updateInput}
                                            type="email" className="form-control" placeholder="email" />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="password"
                                            value={user.password}
                                            onChange={updateInput}
                                            type="password" className="form-control" placeholder="password" />
                                    </div>

                                    <div className="mb-3">
                                        <select
                                            name="designation"
                                            value={user.designation}
                                            onChange={updateInput}
                                            className="form-control">
                                            <option value="Software Designer">Software Designer</option>
                                            <option value="Software Developer">Software Developer</option>
                                            <option value="Technical Lead">Technical Lead</option>
                                            <option value="Architect">Architect</option>
                                            <option value="Test Manager">Test Manager</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <textarea
                                            name="bio"
                                            value={user.bio}
                                            onChange={updateInput}
                                            rows={4} className="form-control" placeholder="text" />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="terms"
                                            value={user.terms}
                                            onChange={updateCheck}
                                            type="checkbox" className="form-check-input" /> Accept Terms
                                    </div>

                                    <div className="mb-3">
                                        <input type="submit"  className="btn btn-warning btn-sm" value="Register" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm; 