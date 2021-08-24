const Input = ({type, onChange, value, name}) =>{
  return(
    <input type={type} onChange={onChange} value={value} name={name} className='w-full h-8 pl-4 border-gray-500 border'/>
  )
}

export default Input