// impor

export const StartingPopUp = ({setStartingPopUp}) => {

    const handlePopClose = () => {
        setStartingPopUp(false)
    }
    return (
        <>
            <div className="popUpOverlay">
                <div className="startingPopUpMainContainer popUpContainer">

                    <div className="popUpCloseBTN">
                        <button className='maps-link' onClick={handlePopClose}>X</button>
                    </div>

                    <div className="startingPopUpContainer">
                        <h3>Welcome, Please Check the below readme file for credentials, thankyou!</h3>
                        <p>This is a desktop application, it works perfectly from 1080px viewport and above. <span style="color:var(--gold);font-weight: 500;">Smaller viewport is under production<span></p>
                        <a className='maps-link' href="https://raw.githubusercontent.com/harshverma63/EMP-HR-Dashboard-React-/refs/heads/main/README.md" target="_blank">Read Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}
