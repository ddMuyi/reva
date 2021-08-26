import React from 'react'
import transactionList from './transactionList'
import transaction from './assets/transactions.svg'

const Transactions = () =>{
  const [transactions, setTransactions] = React.useState(transactionList)
  return(
    <div className="w-full h-auto relative">
      <section className="w-full sm:w-3/5 h-auto z-20 relative">
        <h2 className="text-center mt-4">Transactions</h2>
        <section className="w-full px-4 h-auto">
          {transactions.map(transaction=>{
            return <div className="flex w-full items-center justify-between h-12 border-green-400 border rounded-md mt-2 px-4">
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
      <div className="absolute hidden sm:flex right-4 top-4 w-2/5 h-auto z-10">
        <img src={transaction} alt="transaction icon" className="w-full h-auto z-10"/>
      </div>
    </div>
  )
}
export default Transactions