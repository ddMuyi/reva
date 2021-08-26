const Button = ({onClick, width, nameTag, bg, text}) =>{
  const resClass= !width ? `filter shadow-md mt-6 h-10 w-full rounded-sm hover:bg-light-green hover:text-charcoal-dark hover:font-semibold uppercase bg-charcoal-primary text-white text-sm` : `filter shadow-md mt-6 h-10 rounded-sm uppercase ${bg} border border-charcoal-primary ${text} text-sm` + ' ' + `${width}`
  return(
    <button onClick={onClick} className={`${resClass}`}>{nameTag}</button>
  )
}

export default Button