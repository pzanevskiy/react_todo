import 'bootstrap'

const Search = props => {
    return (
        <div className="p-2">
            <input className="form-control w-50 mx-auto" type="text" placeholder="Search..." onChange={(e) => props.onSearch(e.target.value)} />
        </div>
    )
}

export default Search