import React, { useEffect, useState } from 'react'
import logo from '../../assets/cinema-logo.svg'
import './Header.scss'
const HEADER_LIST = [
  { id: 1, iconClass: 'fas fa-film', name: 'Now Playing', type: 'now_playing'},
  { id: 2, iconClass: 'fas fa-fire', name: 'Popular', type: 'popular'},
  { id: 3, iconClass: 'fas fa-star', name: 'Top Rated', type: 'top_rated'},
  { id: 4, iconClass: 'fas fa-plus-square', name: 'Upcoming', type: 'upcoming'},
]

const Header = () => {
  const [navClass, setNavClass] = useState(false)
  const [menuClass, setMenuClass] = useState(false)
  const [search, setSearch] = useState('')

  const toggleMenu = () => {
    setMenuClass(!menuClass)
    setNavClass(!navClass)
  }
  useEffect(() => {
    if (navClass) {
      document.body.classList.add('header-nav-open')
    }
    else {
      document.body.classList.remove('header-nav-open')
    }
  }, [navClass])

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt=""/>
          </div>
          <div
            id="header-mobile-menu"
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map(item => (
              <li
                key={item.id}
                className="header-nav-item">
                <span className="header-list-name">
                  <i className={item.iconClass}></i>
                </span>
                <span style={{ paddingLeft: 5 }} className="header-list-name">{item.name}</span>
              </li>
            ))}
            {/*<li className="header-nav-item">Now Playing</li>*/}
            {/*<li className="header-nav-item">New Movies</li>*/}
            <input
              type="text"
              className="search-input"
              placeholder="Search for a movie"
              onInput={(e) => setSearch(e.target.value)}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header