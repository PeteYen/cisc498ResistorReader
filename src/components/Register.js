import './Register.scss'

const Register = () => {

    return (
        <div className="registerContainer">
            <div className="registerContent">
                <div className="nameInputContainer">
                    <label>User Name</label>
                    <br/>
                    <input
                        type="string"
                        className="nameInput"
                        placeholder="Enter user name"
                    />
                    <br/>
                    {/*<label>Last Name</label>*/}
                    {/*<br/>*/}
                    {/*<input*/}
                    {/*    type="string"*/}
                    {/*    className="nameInput"*/}
                    {/*    placeholder="Enter last name"*/}
                    {/*/>*/}
                </div>
                <div className="emailInputContainer">
                    <label>Email address</label>
                    <br/>
                    <input
                        type="email"
                        className="emailInput"
                        placeholder="Enter email"
                    />
                </div>
                <div className="passwordInputContainer">
                    <label>Password</label>
                    <br/>
                    <input
                        type="password"
                        className="passwordInput"
                        placeholder="Enter password"
                    />
                    <br/>
                    <label>Confirm Password</label>
                    <br/>
                    <input
                        type="password"
                        className="passwordInput"
                        placeholder="Enter password"
                    />
                </div>
                <div className="submitButtonContainer">
                    <button type="submit" className="registerButton">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Register