import { EmpHeader } from "./EmpHeader";
import { UserCard } from "./userCard";
import { UserTeamPopUp } from "./userTeamPopUp";
// import { getLocalStorage } from "./UsersLocalStorage";

export const EmployeeDash = ({ themeSwitch, handleSwitch, users, handleTeamPopUp, isPopUpOpen, handlePopUpClose, popUpData, loggedInUser, onLogOut }) => {

    if (!loggedInUser) return null;

    const mapsUrl = `https://www.google.com/maps?q=${loggedInUser.address.geo.lat},${loggedInUser.address.geo.lng}`;

    // console.log(loggedInUser);


    return (
        <section className={!themeSwitch ? "bodyDarkTheme" : "bodyLightTheme"}>

            <div className="EMP container">

                <EmpHeader onLogOut={onLogOut} loggedInUser={loggedInUser} handleSwitch={handleSwitch} themeSwitch={themeSwitch} users={users}/>


                {/* Employee Cards */}
                <ul className="EMP card-memo EMPcard-memo">

                    <li key={loggedInUser.id} className="EMP pokemon-card" >

                        <div className="EMP card-avatar-zone">
                            <figure>
                                <img src={loggedInUser.image} alt={loggedInUser.name} />
                            </figure>
                        </div>


                        <div className="EMP card-body card-memo">
                            <h2 className="EMP userName">{loggedInUser.name}</h2>


                            <div className="EMP EMPinfo-list ">
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">✉</span>
                                    <a href={`mailto:${loggedInUser.employeeId}`}>{loggedInUser.employeeId}</a>
                                </div>
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">✉</span>
                                    <a href={`mailto:${loggedInUser.email}`}>{loggedInUser.email}</a>
                                </div>
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <a href={`tel:${loggedInUser.phone}`}>{loggedInUser.phone}</a>
                                </div>


                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <p className="EMP salary-block">
                                        Designation: {loggedInUser.designation}
                                    </p>
                                </div>
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <p className="EMP salary-block">
                                        Department: {loggedInUser.department}
                                    </p>
                                </div>

                                {loggedInUser.isManager && (
                                    <div className="EMP info-row">
                                        <span className="EMP info-icon">☏</span>
                                        <p className="EMP salary-block">
                                            {`Team Size: ${loggedInUser.teamSize}`}
                                        </p>
                                    </div>
                                )}


                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <p className="EMP salary-block">
                                        Salary: ${loggedInUser.salary} PM
                                    </p>
                                </div>

                                <div className="EMP info-row">
                                    <span className="EMP info-icon">⊕</span>
                                    <p>
                                        Employment Type: {loggedInUser.employmentType}
                                    </p>
                                </div>

                                <div className="EMP info-row">
                                    <span className="EMP info-icon">⊕</span>
                                    <p>
                                    Joining Date: {loggedInUser.joinDate}
                                    </p>
                                </div>

                                {loggedInUser.isManager && (
                            <div className="EMP info-row">
                                <span className="EMP info-icon info-icon-temMember">⊕ </span>
                                <p>Team:</p>
                                <button className='maps-link' onClick={() => handleTeamPopUp(loggedInUser.teamMembers)}>Click Here</button>
                            </div>
                        )}

                                <div className="EMP info-row">
                                    <span className="EMP info-icon">⊕</span>
                                    <a
                                        href={`https://${loggedInUser.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {loggedInUser.website}
                                    </a>
                                </div>

                            </div>




                            <div className="EMP card-divider" />

                            <div className="EMP footerAddress">
                            <p className="EMP address-block">
                                {loggedInUser.address.suite}, {loggedInUser.address.street},&nbsp;
                                {loggedInUser.address.city} — {loggedInUser.address.zipcode}
                            </p>

                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="EMP maps-link"
                            >
                                <span>View on Maps</span>
                                <span className="EMP maps-link-arrow">→</span>
                            </a>
                            </div>
                        </div>
                    </li>
                </ul>


                {/* POP Up */}
                <UserTeamPopUp isPopUpOpen={isPopUpOpen} handlePopUpClose={handlePopUpClose} popUpData={popUpData} />

            </div>

        </section >
    )
}