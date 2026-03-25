export const UserCard = ({ curUser, handleTeamPopUp }) => {

    const mapsUrl = `https://www.google.com/maps?q=${curUser.address.geo.lat},${curUser.address.geo.lng}`;

    return (
        <li className="pokemon-card" >
            {/* Avatar */}
            <div className="card-avatar-zone">
                <figure>
                    <img src={curUser.image} alt={curUser.name} />
                </figure>
            </div>

            {/* Body */}
            <div className="card-body">
                <h2 className="userName">{curUser.name}</h2>

                <div className="info-list">
                    <div className="info-row">
                        <span className="info-icon">✉</span>
                        <a href={`mailto:${curUser.employeeId}`}>{curUser.employeeId}</a>
                    </div>
                    <div className="info-row">
                        <span className="info-icon">✉</span>
                        <a href={`mailto:${curUser.email}`}>{curUser.email}</a>
                    </div>
                    <div className="info-row">
                        <span className="info-icon">☏</span>
                        <a href={`tel:${curUser.phone}`}>{curUser.phone}</a>
                    </div>

                    <div className="info-row">
                        <span className="info-icon">☏</span>
                        <p className="salary-block">
                            Salary: {curUser.salary}
                        </p>
                    </div>
                    <div className="info-row">
                        <span className="info-icon">☏</span>
                        <p className="salary-block">
                            Designation: {curUser.designation}
                        </p>
                    </div>
                    <div className="info-row">
                        <span className="info-icon">☏</span>
                        <p className="salary-block">
                            Department: {curUser.department}
                        </p>
                    </div>

                    {curUser.isManager && (
                        <div className="info-row">
                            <span className="info-icon">☏</span>
                            <p className="salary-block">
                                {`Team Size: ${curUser.teamSize}`}
                            </p>
                        </div>
                    )}

                    {curUser.isManager && (
                        <div className="info-row">
                            <span className="info-icon info-icon-temMember">Check Team Memebers</span>
                            <button className='maps-link' onClick={() => handleTeamPopUp(curUser.teamMembers)}>Click Here</button>
                        </div>
                    )}


                    <div className="info-row">
                        <span className="info-icon">⊕</span>
                        <a
                            href={`https://${curUser.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {curUser.website}
                        </a>
                    </div>
                </div>

                <div className="card-divider" />

                <p className="address-block">
                    {curUser.address.suite}, {curUser.address.street},&nbsp;
                    {curUser.address.city} — {curUser.address.zipcode}
                </p>

                <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-link"
                >
                    <span>View on Maps</span>
                    <span className="maps-link-arrow">→</span>
                </a>
            </div>
        </li>
    )
}