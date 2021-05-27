import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import CategoryForm from './CategoryForm'

const App = ()=>{
    const [categories, setCategories] = useState([])

    // get called after component mounts
    useEffect(()=>{
        getCategories()
    }, [])

    // method update UI
    const addCategory = (category) => {
        let updatedCategories = [category, ...categories]
        setCategories(updatedCategories)
    }

      // method update UI
    const updateCategory = (category) => {
        let updatedCategories = categories.map( c=>{
            if(c.id === category.id){
                return category
            } 
            return c
        } )

        setCategories(updatedCategories)
    }

    const getCategories = async () => {
        let res = await axios.get('/categories')
        // let {data} = await axios.get('/categories')
        setCategories(res.data)
    }

    const deleteCategory = async (id) => {
        console.log(id)
        // delete from db
        let res = await axios.delete(`/categories/${id}`)
        // remove from UI
        let updatedCategories = categories.filter( c => c.id !== res.data.id )
        setCategories(updatedCategories)

    }

    const renderCategories = ()=>{
        if(categories.length == 0) {
            return <p>no categories</p>
        }
        return categories.map(c => {
            return <Category deleteCategory={deleteCategory} key={c.id} {...c} updateCategory={updateCategory}/>
        })
    }
    return (
        <div>
            <h1>App</h1>
            <p>front end guy you go from here</p>
            <CategoryForm addCategory={addCategory} />
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

