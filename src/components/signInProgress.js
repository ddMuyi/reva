const Progress = () =>{
  const barCont = `flex flex-col justify-center items-center h-full w-1/5`
  const bar = 'bg-green-900 h-2 w-full'
  return(
    <div className="w-full sm:w-4/5 flex justify-between h-12">
      <div className={barCont}>
        <div className={bar}></div>
        <p>details</p>
      </div>
      <div className={barCont}>
        <div className={bar}></div>
        <p>Security</p>
      </div>
      <div className={barCont}>
        <div className={bar}></div>
        <p>Mobile</p>
      </div>
      <div className={barCont}>
        <div className={bar}></div>
        <p>Mail</p>
      </div>
    </div>
  )
}

export default Progress