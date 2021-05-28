import React from 'react'

const Card = (props) => {
    const {question, id, answer, answered} = props
    return (
        <div style={{border:'1px solid', margin:'10px'}}>
           <p>q:{question} </p>
           <p>a:{answer} </p>
           <p>id:{id} </p>
        </div>
    )
}
export default Card