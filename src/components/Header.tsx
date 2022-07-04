import logo from '../media/image/searh.svg'

const Header = () => {
    return (
        <div className="header">
            <h1>
                Search for books
            </h1>
            <div className='textInput'>
                <input
                    type='text'
                    placeholder='Поиск...'
                />
                <div className="searchLogo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="sort">
                <div className="categories">
                    <label>
                        Categories
                        <select>
                            <option value="">Select a fruit</option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
                <div className="sorting">
                    <label>
                        Sorting by
                        <select>
                            <option value="">Select a fruit</option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header