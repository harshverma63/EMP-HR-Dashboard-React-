
import { useState } from "react"
import { setHRLocalStorage } from './UsersLocalStorage.jsx'

export const HrLogin = ({ users, setHRStorage, setHrLoginSuccess, setHRLoggedIn }) => {


    const [HRloginValue, setHRLoginValue] = useState({
        employeeId: "",
        password: "",
    })

    const handleLogIn = (e) => {
        const { name, value } = e.target
        setHRLoginValue((prev) => ({ ...prev, [name]: value }))
    }


    const handleLoginForm = (e) => {
        e.preventDefault()

        const credentialCheck = users.find((curEmp) => {
            return (
                curEmp.employeeId === HRloginValue.employeeId &&
                curEmp.password === HRloginValue.password
            )
        })

        if (credentialCheck) {
            setHrLoginSuccess(true)
            setHRStorage(credentialCheck)
            setHRLocalStorage(credentialCheck)

        } else {
            alert("Id or passwords are incorrect")
            setHRLoginValue({
                employeeId: "",
                password: "",
            })
        }
    }
    const handleHrLogin = () => {
        setHRLoggedIn(false)
    }


    return (
        <>
            {/* <section className={!themeSwitch ? "bodyDarkTheme" : "bodyLightTheme"}> */}
            <section className="bodyDarkTheme">

                <div className="container formContainer">
                    <div className="loginForm">
                        <form onSubmit={handleLoginForm}>
                            <h1>HR Portal Login</h1>

                            <div className="fieldContainer">
                                <input type="text" name="employeeId" placeholder="HR ID" value={HRloginValue.employeeId} onChange={handleLogIn} />
                            </div>

                            <div className="fieldContainer">
                                <input type="password" name="password" placeholder="HR Password" value={HRloginValue.password} onChange={handleLogIn} />
                            </div>

                            <div className="formBottomBTN">
                                <div className="fieldContainer">
                                    <button className="maps-link" type="submit">Log In</button>
                                </div>
                                <div className="fieldContainer">
                                    <button className="maps-link" onClick={handleHrLogin}>Employee Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}