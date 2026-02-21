import "./Filter-bar.scss"

export default function FilterBar() {
    return(
        <div className="filter-bar">

            <div className="filter">
                <p className="name">Search</p>
                <div className="select">
                    <input type="search" placeholder="" className="search-box" />
                </div>
            </div>
            
            <div className="filter">
                <p className="name">Genre</p>
                <div className="select">
                    <input type="search" placeholder="Any" className="search-box" />
                </div>
            </div>

            <div className="filter"></div>
            <div className="filter"></div>
        </div>
    )
}