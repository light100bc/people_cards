import React from 'react';
import './search-box.styles.css';

export const SearchBox=({placeholder,handleChange})=>{
    return(
        <input type='search' placeholder={placeholder} onChange={handleChange} /> )
    // <input type='search' placeholder='search people' onChange={
    //     e=>{
    //         this.setState({searchField:e.target.value},console.log(e.target.value)); {/*the input will change the state*/}
    //     }
    // }/>)
};