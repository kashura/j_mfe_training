import { useState } from "react";
import { getAllPayments } from "../../data/DataFunctions";
import { PaymentType } from "../../data/DataFunctions";

const Country = () : JSX.Element => {

    const [userSelectedCountry, setCountry] = useState<string> ("");
 
    const payments : PaymentType[] = getAllPayments();
    const options : PaymentType[] = Array.from(new Set(payments));


    const handleChange = (event: any) : void => {

        setCountry(event.target.value)

    }
    

    return (
        <>
        <p>Select country: </p>
        <select onChange={handleChange}>
            {options.map((option) => (
            <option key={option.country} value={option.country} >{option.country}</option>))}
        </select>
        
        </>
    )
}

export default Country;