import { useState } from "react";
import "./hamburger.css";
// import { UsersData } from "./UsersData";

// import {setLocalStorage,getLocalStorage} from './UsersLocalStorage.jsx'
// import { EmployeeLogIn } from "./EmployeeLogin.jsx";


export const HamburgerButton = ({loggedInUser, HRstorage, onLogOut}) => {
  const [open, setOpen] = useState(false);

  // const handleLogOut = () => {
  //   localStorage.clear()
  //   setStorage(null)
  //   setHRStorage(null)
  //   if(setHrLoginSuccess) setHrLoginSuccess(false)
  // }

  
  return (
  <>
    <button
      className={`hamburger ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>


{open && (
    <section className="sideMenuContainer"
    // style={{transform: !open ? "translateX(300px)" : "translateX(0px)"}}
    >
        <div>
          {HRstorage &&(
            <ul>
                <li>
                    <figure>
                    <img src={HRstorage.image} alt={HRstorage.name} />
                    </figure>
                </li>
                <li><p>Hey, <em>{HRstorage.name}</em>  </p></li>
                <li><button onClick={onLogOut} className="maps-link">Log Out</button></li>
            </ul>
          )}
            

          {loggedInUser &&(
            <ul>
                <li>
                    <figure>
                    <img src={loggedInUser.image} alt={loggedInUser.name} />
                    </figure>
                </li>
                <li><p>Hey, <em>{loggedInUser.name}</em>  </p></li>
                <li><button onClick={onLogOut} className="maps-link">Log Out</button></li>
            </ul>
          )
        }
        </div>
    </section>
)}
    


    </>
  );
};