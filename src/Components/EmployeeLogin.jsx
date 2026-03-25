import { useState } from "react"
import { setLocalStorage } from './UsersLocalStorage.jsx'

export const EmployeeLogIn = ({ users, loggedIn, setLoggedIn, setStorage, setHRLoggedIn }) => {


    const [loginValue, setLoginValue] = useState({
        employeeID: "",
        employeePassword: "",
    })

    const handleLogIn = (e) => {
        const { name, value } = e.target
        setLoginValue((prev) => ({ ...prev, [name]: value }))
    }


    const handleLoginForm = (e) => {
        e.preventDefault()

        const credentialCheck = users.find((curEmp) => {
            return (
                curEmp.employeeId === loginValue.employeeID &&
                curEmp.password === loginValue.employeePassword
            )
        })

        if (credentialCheck) {
            setLocalStorage(credentialCheck)
            setStorage(credentialCheck)
            setLoggedIn(true)

        } else {
            alert("Id or passwords are incorrect")
            setLoginValue({
                employeeID: "",
                employeePassword: "",
            })
        }
    }

    const handleHrLogin = () => {
        setHRLoggedIn(true)
    }


    return (
        <>
            {/* <section className={!themeSwitch ? "bodyDarkTheme" : "bodyLightTheme"}> */}
            <section className="bodyDarkTheme">

                <div className="container formContainer">
                    
                    <div className="loginForm">
                        <form onSubmit={handleLoginForm} >
                            <h1>Login</h1>

                            <div className="fieldContainer">
                                <input type="text" name="employeeID" placeholder="Employee ID" value={loginValue.employeeID} onChange={handleLogIn} />
                            </div>

                            <div className="fieldContainer">
                                <input type="password" name="employeePassword" placeholder="Employee Password" value={loginValue.employeePassword} onChange={handleLogIn} />
                            </div>

                            <div className="formBottomBTN">
                                <div className="fieldContainer">
                                    <button className="maps-link" type="submit">Log In</button>
                                </div>
                                <div className="fieldContainer">
                                    <button className="maps-link" onClick={handleHrLogin}>HR Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </section>
        </>
    )
}