const Input = ({type, onChange, value, name, id, innerButton, placeholder, maxSetter}) =>{
  return(
    <div className="w-full h-auto relative">
      <input placeholder={placeholder} type={type} onChange={onChange} id={id} value={value} name={name} className='w-full relative z-10 h-10 pl-4 border-gray-500 rounded-sm border text-sm font-normal'/>
      <p className="absolute right-4 top-2 text-sm font-semibold text-orange-700 z-20 cursor-pointer" onClick={maxSetter}>{innerButton}</p>
    </div>
  )
}

export default Input