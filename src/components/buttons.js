const Button = ({onClick, width, nameTag}) =>{
  const resClass= !width ? `mt-6 h-10 w-full rounded-sm uppercase bg-green-800 text-white text-sm` : `mt-6 h-10 rounded-sm uppercase bg-green-800 text-white text-sm` + ' ' + `${width}`
  return(
    <button onClick={onClick} className={`${resClass}`}>{nameTag}</button>
  )
}

export default Button