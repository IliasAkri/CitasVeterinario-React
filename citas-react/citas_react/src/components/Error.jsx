const Error = ({mensaje}) => {
  return (
        <div className='font-bold text-center text-white bg-red-800 p-3 uppercase
        mb-3 rounded-md'>
          <p>{mensaje}</p>
        </div>
  )
}

export default Error
