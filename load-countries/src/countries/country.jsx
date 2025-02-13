import { useState } from 'react';
import './countries.css'
export default function Country({ country }) {
    const { name, flags } = country;

        const  [visited, setVisited]  = useState(false)

    const handleVisit = () => {
        setVisited(!visited)
        // alert('hi')
    }

    return (
        <div className='country'>
            <h3>Name : {name?.common}</h3>
            <img className='country-flag' src={flags.png} alt="" />

            <button onClick={handleVisit}>{visited ? 'Visited':'Going'}</button>
            {visited ? 'i m visited' : 'i want to go'}
        </div>
    )
}