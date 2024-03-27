import { useState } from "react";
import { getAllPayments } from "../../data/DataFunctions";
import { PaymentType } from "../../data/DataFunctions";

const Country = () : JSX.Element => {

    // const initialList : PaymentType[] = [
    //     {
    //          //list of countries
            
    //     }
    // ]
    const [userSelectedCountry, setCountry] = useState<string> ("");
 
    const options = [
        
             //list of countries
             {value: 'USA', label: 'USA'},
             {value: 'SWE', label: 'SWE'},
             {value: 'FRA', label: 'FRA'}
            
        
    ]


    const handleChange = (event: any) : void => {

        setCountry(event.target.value)

    }
    

    return (
        <>
        <p>Select country: </p>
        <select onChange={handleChange}>
            {options.map((option) => (
            <option key={option.value} value={option.label} >{option.label}</option>))}
        </select>
        
        </>
    )
}

export default Country;