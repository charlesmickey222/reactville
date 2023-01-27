// Components & Assets
import Logo from '../../assets/react-logo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navigation-bar">
      <Link to='/'><img src={Logo} alt='logo'/></Link>
      <Link to='/burgers'>Burgers</Link>
    </nav>
  )
}

export default Nav