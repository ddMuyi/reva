import React from 'react'
import transactionList from './transactionList'

const Transactions = () =>{
  const [transactions, setTransactions] = React.useState(transactionList)
  return(
    <div className="w-full h-auto">
      <section className="w-full sm:w-2/5 h-auto">
        <h2 className="text-center mt-4">Transactions</h2>
        <section className="w-full px-4 h-auto">
          {transactions.map(transaction=>{
            return <div className="flex w-full items-center justify-between h-16 border-green-400 border rounded-md mt-2 px-4">
              <div>
                <p>{transaction.type}</p>
                <p>{transaction.status}</p>
              </div>
              <div>
                <p>{transaction.date}</p>
                <p>{transaction.time}</p>
              </div>
            </div>
          })}
        </section>
      </section>
    </div>
  )
}
export default Transactions