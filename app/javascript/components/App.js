import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = ()=>{
    const [categories, setCategories] = useState([])

    // get called after component mounts
    useEffect(()=>{
        getCategories()
    }, [])

    const getCategories = async () => {
        let res = await axios.get('/categories')
        // let {data} = await axios.get('/categories')
        setCategories(res.data)
    }

    const renderCategories = ()=>{
        if(categories.length == 0) {
            return <p>no categories</p>
        }
        return categories.map(c => {
            return (
                <div key={c.id}>
                    <h1>{c.name}</h1>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>App</h1>
            <p>front end guy you go from here</p>
            {renderCategories()}
        </div>
    )
}

export default App


// lifecycle of react

// Intial load
// component mounts to the dom, ie the browser
// componentDidMount callback, ie a function called after components
// where you can do things, like axios calls

// state change
// anytime state changes your react component is re-render

// after your state changes after rerenders
// componentDidUpdate callback
// adding the [] in our useEffect disables this callback

// componentDidUnMount callback
// remover event listeners a component

