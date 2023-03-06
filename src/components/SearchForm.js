import { useState } from 'react'
const SearchForm = () => {

    const search = document.getElementById('search')
    const [form, setForm] = useState()

    const showForm = () => {
        setForm('active')

        if (search.className === 'search-input active') {
            setForm('')
        }
    }
    return (
        <div>
            <input type="text" className={`search-input ${form}`} id="search" placeholder="Search" />
            <input type="submit" id="button" className="search-button" value="&#128269;" onClick={showForm} />
        </div>
    )
}

export default SearchForm
