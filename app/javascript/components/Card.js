import axios from 'axios'
import React from 'react'
import CardForm from './CardForm'

const Card = (props) => {
    const {question, id, answer, answered,  categoryId,removeCard, updateCard} = props
    const deleteCard = async (id) => {
        try{
           let res = await axios.delete(`/categories/${categoryId}/cards/${id}`)
           console.log(res)
           removeCard(res.data.id)
        } catch(err){
            console.log(err)
            console.log(err.response)
            alert('err occured')
        }
    }

    return (
        <div style={{border:'1px solid', margin:'10px'}}>
           <div onClick={()=> deleteCard(id)}>delete</div>
           <p>q:{question} </p>
           <p>a:{answer} </p>
           <p>id:{id} </p>
           <CardForm categoryId={categoryId} updateCard={updateCard} id={id} question={question} answer={answer}/>
        </div>
    )
}
export default Card