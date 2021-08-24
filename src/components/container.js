const Container =({children, width})=>{
  const smwidth=width? width : 'ms:w-96'
  return (
    <div className={`filter shadow-md w-4/5 ${smwidth} h-auto py-6 mx-auto bg-white rounded-lg mt-4`}>
      {children}
    </div>
  )
}

export default Container