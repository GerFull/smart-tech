import styles from './search.module.scss'
import React, { useState } from 'react'

interface Props { }

function Search(props: Props) {
   const { } = props
   const [value, setValue] = useState<string>()


   return (
      <div className={styles.search}>
         <input placeholder='Поиск' type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
         <img className={styles.search__img} src='./images//search.png'/>
      </div>
   )
}

export default Search
