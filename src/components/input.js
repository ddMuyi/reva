const Input = ({type, onChange, value, name, id}) =>{
  return(
    <input type={type} onChange={onChange} id={id} value={value} name={name} className='w-full h-10 pl-4 border-gray-500 rounded-sm border'/>
  )
}

export default Input