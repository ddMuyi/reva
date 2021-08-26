const Container =({children, width})=>{
  const smwidth=width? width : 'sm:w-96'
  return (
    <div className={`filter shadow-md w-4/5 ${smwidth} py-6 mx-auto px-4 bg-white rounded-md mt-4`}>
      {children}
    </div>
  )
}

export default Container