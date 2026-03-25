
export const UserTeamPopUp = ({isPopUpOpen, handlePopUpClose, popUpData}) => {

    return(
        <>
        {isPopUpOpen && (
            <div className="popUpOverlay" tabIndex={0}
                onKeyUp={(e) => { e.key === 'Escape' && handlePopUpClose() }}>
                <div className="popUpContainer">

                    <div className="popUpCloseBTN">
                        <button className='maps-link' onClick={handlePopUpClose}>X</button>
                    </div>
                    <h3>Team Members</h3>


                    <ul className='popUpTeamMemberContainer'>
                        {popUpData.map((curMemb) => {
                            return (
                                <li className="teamMember" key={curMemb.id}>
                                    <div className="popUpMemberIMG">
                                        <figure>
                                            <img src={curMemb.image} alt={curMemb.name} />
                                            {/* <img src={curMemb.image} /> */}
                                        </figure>
                                    </div>
                                    <h4 className='popUpTeamMemberName'>{curMemb.name}</h4>
                                    <p>{curMemb.employeeId}</p>
                                    <p>{curMemb.department}</p>
                                    <p>{curMemb.designation}</p>
                                    <p>{curMemb.phone}</p>
                                    <p>{curMemb.email}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )}
        </>
    )
}