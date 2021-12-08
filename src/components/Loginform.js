import React from 'react'
import {Link} from 'react-router-dom'

function loginform() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5 ">
                <div className="d-flex logincard">
                    <div className=" colored-page card d-none d-lg-block"></div>
                    <div className=" card p-4 mx-2 mx-md-0">

                        <div className="row">
                            <span className="text-center display-5 mb-4">SIGN IN</span>
                        </div>

                        <form className="signin-form">
                            <div className="form-group mb-3 px-4">
                                <label className="label" htmlFor="email">EMAIL</label>
                                <input type="text" className="form-control input-field" required />
                            </div>
                            <div className="form-group mb-4 px-4">
                                <label className="label" htmlFor="email">PASSWORD</label>
                                <input type="password" className="form-control input-field" required />
                            </div>
                            <div className="form-group px-4 ">
                                <button type="submit" className="form-control btn btn-primary submit px-3" id="loginButton">Sign
                                    In</button>
                            </div>
                        </form>
                        <h6 className="text-center mt-4">New Here ? <Link to="/signup">SignUp</Link></h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default loginform
