import { useState } from "react"
import { HamburgerButton } from "./Hamburger"

export const Header = ({ handleSwitch, themeSwitch, users, HRstorage, onLogOut }) => {

    const [menuToggle, setMenuToggle] = useState(false)

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <header>

            <div className="topHeader">

                <div className="mainLgo">
                    <p>HR-Dash</p>
                </div>

                <div className="EMP headerRight">

                    <div className="themeSwitcher">
                        <button onClick={handleSwitch}>
                            <span
                                style={{
                                    backgroundColor: !themeSwitch ? "#111827" : "#e3ddd1",
                                    transform: !themeSwitch ? "translateX(0px)" : "translateX(26px)"
                                }}
                                className="switcher">
                            </span>
                        </button>
                    </div>

                    <div>
                        <HamburgerButton handleMenuToggle={handleMenuToggle}
                            HRstorage={HRstorage}
                            onLogOut={onLogOut}/>
                    </div>

                </div>
            </div>

            <p className="header-eyebrow">HR Portal</p>
            <h1>Hey, <em>{HRstorage.name}</em></h1>
            <p className="header-subtitle">
                We have {users.length}+ members across the organization
            </p>
        </header>

        // <header>
        //                 <div className="topHeader">
        //                     <div className="mainLgo">
        //                         <p>EMP-Dash</p>
        //                     </div>
        //                     <div className="themeSwitcher">
        //                         <button onClick={handleSwitch}>
        //                             <span
        //                                 style={{
        //                                     backgroundColor: !themeSwitch ? "#111827" : "#e3ddd1",
        //                                     transform: !themeSwitch ? "translateX(0px)" : "translateX(26px)"
        //                                 }}
        //                                 className="switcher">
        //                             </span>
        //                         </button>
        //                     </div>
        //                 </div>

        //                 <p className="header-eyebrow">User Portal</p>
        //                 <h1>Meet the <em>Team</em>  </h1>
        //                 <p className="header-subtitle">
        //                     {users.length}+ members across the organization
        //                 </p>
        // </header>
    )
}