import { useEffect } from "react";
import { useState } from "react"
import Country from "./country";
import './countries.css'

export default function Countries() {

    const [countries, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);

    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            <div className="country-container" >
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
                

        </div>

    )


}