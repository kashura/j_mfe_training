import { getAllPayments } from "../data/DataFunctions";

const TransacTable = () : JSX.Element => {
    const dummyData = [
        {id: "123", date: "11-1-2024", country: "USA", currency: "usd", amount: 777},
        {id: "567", date: "11-1-2024", country: "Mexico", currency: "usd", amount: 777},
        {id: "123", date: "11-1-2024", country: "USA", currency: "usd", amount: 727},

    ]

    return(
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>orderId</th>
                    <th>Date</th>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Amount</th>
                </tr>
                
                {dummyData.map((val, key) => { // for each key map this value make this stateful
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.date}</td>
                            <td>{val.country}</td>
                            <td>{val.currency}</td>
                            <td>{val.amount}</td>
                        </tr>
                    )
                }

            )
                }   
                
            </table>
        </>
    )

}

export default TransacTable;