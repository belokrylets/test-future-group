import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import logo from '../media/image/searh.svg'
import { searchSlice } from '../store/redusers/searchSlice';

const Header = () => {
    const navigate = useNavigate();
    const { searchInput, categorySelection, sortingSelection } = searchSlice.actions;
    const dispatch = useAppDispatch()


    const { searchLine } = useAppSelector(state => state.searchReduser);



    return (
        <div className="header">
            <h1>
                Search for books
            </h1>
            <div className='textInput'>
                <input
                    type='text'
                    placeholder='Поиск...'
                    value={searchLine}
                    onChange={(e) => dispatch(searchInput(e.target.value))}
                />
                <div className="searchLogo" onClick={() => navigate('resultSearch')}>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="sort">
                <div className="categories">
                    <label>
                        Categories
                        <select onChange={(e) => dispatch(categorySelection(e.target.value))} >
                            <option value="All">All</option>
                            <option value="Programming">Programming</option>
                            <option value="Computers">Computers</option>
                            <option value="Business">Business</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </label>
                </div>
                <div className="sorting">
                    <label>
                        Sorting by
                        <select onChange={(e) => dispatch(sortingSelection(e.target.value))}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header;