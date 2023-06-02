
import './searchbox.css'

import React from 'react'

const Searchbox = ({className,placeholder,onChangeHandler}) => (
    <input className='search-box' 
        type={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}/>
  )


export default Searchbox;







