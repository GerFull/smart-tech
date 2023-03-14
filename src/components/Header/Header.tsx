import { Link } from 'react-router-dom'
import Search from '../search/search'
import styles from './header.module.scss'


interface Props { }

function Header(props: Props) {
   const { } = props



   return (
      <div className={styles.header}>
         <div className={styles.header__up}>
            <img src='./images/logo.png' alt='logo' />
            <div className={styles.header__up_info}>
               <p className={styles.header__up_infoNum}>+7 (812) 660-50-54</p>
               <p className={styles.header__up_infoNum}>+7 (958) 111-95-03</p>
               <p  className={styles.header__up_infoDay}>Пн-вс: с 10:00 до 21:00</p>
            </div>
            <div className={styles.header__up_user}>
               <Search />
               <div className={styles.header__up_userIcons}>
                  <img src='./images/eye.png' />
                  <img src='./images/like.png' />
                  <img src='./images/compare.png' />
                  <img src='./images/cart.png' />
               </div>
               <div className={styles.header__up_btn}>
                  Войти
               </div>
            </div>

         </div>
         <div className={styles.header__down}>
            <div className={styles.header__down_catalog}>
               <img src='./images/catalog.png' alt='catalog' />
               <p>Каталог товаров</p>
            </div>
            <div className={styles.header__down_tabs}>
               <p className={styles.header__down_tab}>О компании</p>
               <p className={styles.header__down_tab}>О компании</p>
               <p className={styles.header__down_tab}>О компании</p>
               <p className={styles.header__down_tab}>О компании</p>
               <p className={styles.header__down_tab}>О компании</p>
               <p className={styles.header__down_tab}>О компании</p>
            </div>

         </div>
      </div>
   )
}

export default Header
