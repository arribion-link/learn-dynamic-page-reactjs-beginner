import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to="/">
        <h4 className='logo'>BLOG</h4>
      </Link>
    </div>
  )
}

export default NavBar
