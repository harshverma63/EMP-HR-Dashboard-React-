import { Header } from "./header";
import { Search } from "./Search";
import { UserCard } from "./userCard";

export const HrDashboard = ({users, themeSwitch, handleSwitch, handleSearch, isPopUpOpen, handlePopUpClose, popUpData, search, handleTeamPopUp, filtered, UserTeamPopUp, onLogOut, HRstorage,setHRStorage}) =>{

    return(
        <section className={!themeSwitch ? "bodyDarkTheme" : "bodyLightTheme"}>

                <div className="container">

                    <Header handleSwitch={handleSwitch}
                    themeSwitch={themeSwitch}
                    users={users}
                    HRstorage={HRstorage}
                    onLogOut={onLogOut} />

                    <Search search={search} onHandleSearch={handleSearch} />

                    {/* Employee Cards */}
                    <ul className="card-memo">
                        {!search
                            ?
                            users.map((curUser) => {
                                return (
                                    <UserCard key={curUser.id} curUser={curUser} handleTeamPopUp={handleTeamPopUp} />
                                );
                            })
                            :
                            filtered.map((curUser) => {
                                return (
                                    <UserCard key={curUser.id} curUser={curUser} handleTeamPopUp={handleTeamPopUp} />
                                );
                            })
                        }

                    </ul>

                    {/* POP Up */}
                    <UserTeamPopUp isPopUpOpen={isPopUpOpen} handlePopUpClose={handlePopUpClose} popUpData={popUpData} />

                </div>

            </section>
    )
}