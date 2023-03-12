import { Link } from 'react-router-dom'
import styles from './header.module.scss'

interface Props { }

function Header(props: Props) {
   const { } = props

   return (
      <div className={styles.header}>
         <Link to="/">Home</Link>
         <Link to="/account">Account</Link>
         <Link to="/about">About</Link>
      </div>
   )
}

export default Header
