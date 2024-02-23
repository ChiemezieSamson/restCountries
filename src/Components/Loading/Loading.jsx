import React from 'react'
import ReactLoading from 'react-loading';


const Loading = ({loading}) => {
  return (
    <div className="container mx-auto p-4">
    {loading && (
      <div className="grid justify-center items-center text-blue-300">
        <ReactLoading type={"bars"} color={"#16a34a"} height={400} width={300} />
      </div>
    )}
  </div>
  )
}

export default Loading
