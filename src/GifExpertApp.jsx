import React from 'react'
import AddCategory from './components/AddCategory.jsx'
import GifGrid from './components/GifGrid.jsx'
const GifExpertApp = () => {

    const [categories, setCategories] = React.useState( ['Simpson'])
  
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
           
        </>
    )
}

export default GifExpertApp
