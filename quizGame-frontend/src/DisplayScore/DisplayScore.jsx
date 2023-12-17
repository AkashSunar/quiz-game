import React from 'react'

const DisplayScore = ({sum}) => {
  return (
    <div className='display-board'>
          <span>
              `Oh no !!!! you got only ${sum}.`
      </span>
    </div>
  )
}

export default DisplayScore
