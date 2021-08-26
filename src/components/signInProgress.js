import logo from '../logo.jpg'

const Progress = ({bg1, bg2, bg3, bg4}) =>{
  const barCont = `flex flex-col justify-center items-center h-full w-1/5`
  const bar = 'h-2 w-full'
  return(
    <div className="w-full h-auto">
      <div className="w-16 mx-auto mt-5 h-auto">
        <img className="mx-auto w-full" src={logo} alt="logo"/>
      </div>
      <div className="w-full sm:w-4/5 text-sm sm:text-base flex justify-between mx-auto h-12 mt-4">
        <div className={`${barCont}`}>
          <div className={`${bar} ${bg1 ? bg1 : "bg-charcoal-dark"}`}></div>
          <p className={bg1? "text-orange-900" : "text-charcoal-dark"}>Personal Information</p>
        </div>
        <div className={`${barCont}`}>
          <div className={`${bar} ${bg2 ? bg2 : "bg-charcoal-dark"}`}></div>
          <p className={bg2? "text-orange-900" : "text-charcoal-dark"}>PIN Setup</p>
        </div>
        <div className={`${barCont}`}>
          <div className={`${bar} ${bg3 ? bg3 : "bg-charcoal-dark"}`}></div>
          <p className={bg3? "text-orange-900" : "text-charcoal-dark"}>Mobile Verification</p>
        </div>
        <div className={`${barCont}`}>
          <div className={`${bar} ${bg4 ? bg4 : "bg-charcoal-dark"}`}></div>
          <p className={bg4? "text-orange-900" : "text-charcoal-dark"}>Email Verification</p>
        </div>
      </div>
    </div>
  )
}

export default Progress