const Button = ({onClick, width, nameTag}) =>{
  const resClass= !width ? `mt-6 h-8 w-full uppercase bg-green-800 text-white text-sm` : `mt-6 h-8 uppercase bg-green-800 text-white text-sm` + ' ' + `${width}`
  return(
    <button onClick={onClick} className={`${resClass}`}>{nameTag}</button>
  )
}

export default Button