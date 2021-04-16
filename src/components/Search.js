import 'bootstrap'

const Search = props => {
    return (
        <div className="p-2">
            <input className="form-control w-50 mx-auto" type="text" placeholder="Search..." onChange={(event) => props.onSearch(event.target.value)} />
        </div>
    )
}

export default Search