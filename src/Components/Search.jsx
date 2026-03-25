
export const Search = ({search, onHandleSearch}) => {

    return (
        <>
            <section className="container">
                <div className="searchContainer">
                    <input placeholder="Live Search..." type="text" value={search} onChange={(e) => onHandleSearch(e.target.value)} />
                </div>
            </section>
        </>
    )
}