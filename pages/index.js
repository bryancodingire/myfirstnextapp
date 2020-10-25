import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import BirthdayComponet from './components/birthdaycomponent.js'

export default function Home() {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState(true);

    useEffect(() => {
          console.log("rendering");
      }, [search]);

    const searchValue = () => {
        console.log("search button clicked");
        setSearch(false);
    }
    
    const backtosearch = () => {
        console.log("back to search button clicked");
        setSearch(true);
    }

    const diplayedcomponent = (search) => {
        console.log('in display')
        if (search) {
          return  <>
                <div class="background">
                    <h1>
                        McDoogle
                    </h1>
                </div>
                <span className={styles.searchbox}>
                    <input className={styles.searchinput} placeholder="Enter First Name ..." onChange={e => setInput(e.target.value)}></input>
                    <button className={styles.searchbutton} onClick={searchValue}>Search</button>
                </span>
            </>
        } else {
          return  <>
                <div className={styles.returntosearch} onClick={backtosearch}><button>&lt; return to search</button></div>
                <BirthdayComponet name={input} />
            </>
        }
    }
    return (
        <>
            {diplayedcomponent(search)}
        </>
    )
}