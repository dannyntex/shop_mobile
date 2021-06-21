import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { serchStringSelector } from '../../store/modules/search/selectors'
import { getSearchString } from '../../store/modules/search/slice'
import './Search.css'
const Search = () => {
    const dispatch = useDispatch()
    const inputSerchString = useSelector((state) => serchStringSelector(state))

    const handleSearch = (e) => {
        dispatch(getSearchString(e.target.value))
    }
    return (
        <div className="containerSearch">
            <form>
                <input
                    className="Input-text"
                    type="text"
                    value={inputSerchString}
                    placeholder="Search"
                    onChange={handleSearch}
                />
            </form>
        </div>
    )
}
export default Search
