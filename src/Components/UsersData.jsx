import { useEffect, useState } from 'react';
import './Users.css';
// import { UserCard } from './userCard'
// import { Search } from './Search';
import { UserTeamPopUp } from './userTeamPopUp';
import { EmployeeLogIn } from './EmployeeLogin';
import { EmployeeDash } from './EmployeeDash.jsx';
// import { Header } from './header';
import { getLocalStorage, getHRLocalStorage } from './UsersLocalStorage.jsx';
import { HrDashboard } from './HrDashboard.jsx';
import { HrLogin } from './HrLogin.jsx';
import { StartingPopUp } from './StartingPopUp.jsx';
// import { HamburgerButton } from './Hamburger.jsx';

export const UsersData = () => {

    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [themeSwitch, setThemeSwitch] = useState(false)

    const [startingPopUp, setStartingPopUp] = useState(true)

    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const [popUpData, setPopUpData] = useState(null)

    // SEARCH
    const [search, setSearch] = useState('')

    // LOGIN
    const [loggedIn, setLoggedIn] = useState(false)
    const [HRloggedIn, setHRLoggedIn] = useState(false)
    const [HrLoginSuccess, setHrLoginSuccess] = useState(false)

    const [storage, setStorage] = useState(() => getLocalStorage())
    const [HRstorage, setHRStorage] = useState(() => getHRLocalStorage())

    // const API = "https://raw.githubusercontent.com/harshverma63/APIs/refs/heads/main/employees";
    const API = "https://raw.githubusercontent.com/harshverma63/APIs/refs/heads/main/Employees/employees4.json";

    const fetchUsers = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setUsers(data);
            setLoading(false);

        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    // LOG OUT
    const handleLogOut = () => {
        localStorage.clear();
        setStorage(null);
        setHRStorage(null);
        setLoggedIn(false);
        setHRLoggedIn(false);
        setHrLoginSuccess(false);
    }

    if(startingPopUp && HRstorage == null && storage == null){
        return (
            <StartingPopUp setStartingPopUp={setStartingPopUp}/>
        )
    }
    

    // Loading
    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loader-ring" />
                <p>Loading Users</p>
            </div>
        );
    }


    // Error
    if (error) {
        return (
            <div className="error-screen">
                <h2>Something went wrong</h2>
                <p>{error.message}</p>
            </div>
        );
    }


    // Theme Switcher
    const handleSwitch = () => setThemeSwitch(!themeSwitch)

    const handleTeamPopUp = (getTeamMembers) => {
        setPopUpData(getTeamMembers)
        setIsPopUpOpen(true)
    }

    // POP UP
        const handlePopUpClose = () => setIsPopUpOpen(false)

        
    // Search
    const handleSearch = (value) => {
        setSearch(value)

    }

    const filtered = users.filter((curFilterEMP) => {
        return curFilterEMP.name.toLowerCase().includes(search.toLowerCase())
    })


    // useEffect(()=>{
if (HrLoginSuccess || HRstorage != undefined || HRstorage != null) {
        return (
            <>
                <HrDashboard users={users}
                themeSwitch={themeSwitch}
                handleSwitch={handleSwitch}
                handleSearch={handleSearch}
                isPopUpOpen={isPopUpOpen}
                handlePopUpClose={handlePopUpClose}
                popUpData={popUpData}
                search={search}
                handleTeamPopUp={handleTeamPopUp}
                UserTeamPopUp={UserTeamPopUp}
                filtered={filtered}
                setHRStorage={setHRStorage}
                onLogOut={handleLogOut} 
                HRstorage={HRstorage}
                />
            </>
        )
    }
    // },[])
    

    if (HRloggedIn && !HrLoginSuccess) {
        return (
            <HrLogin setHRLoggedIn={setHRLoggedIn} setHRStorage={setHRStorage} users={users} setHrLoginSuccess={setHrLoginSuccess} />
        )
    }

    if (storage) {
        return (
            <EmployeeDash 
                users={users}
                loggedInUser={storage}
                themeSwitch={themeSwitch}
                handleSwitch={handleSwitch}
                handleTeamPopUp={handleTeamPopUp}
                isPopUpOpen={isPopUpOpen}
                handlePopUpClose={handlePopUpClose}
                popUpData={popUpData}
                onLogOut={handleLogOut}
            />
        )
    }

    if (!loggedIn) {
        return (
            <EmployeeLogIn users={users} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setStorage={setStorage} setHRLoggedIn={setHRLoggedIn} />
        )
    }


    return (
        <>
            <EmployeeDash 
            users={users}
            loggedInUser={storage}
            themeSwitch={themeSwitch}
            handleSwitch={handleSwitch}
            handleTeamPopUp={handleTeamPopUp}
            isPopUpOpen={isPopUpOpen}
            handlePopUpClose={handlePopUpClose}
            popUpData={popUpData}
            onLogOut={handleLogOut}/>

        </>
    );
};


