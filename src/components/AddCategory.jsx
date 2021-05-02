import React from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = React.useState('')
    
    const handlerInputCange = (val) => {
        setInputValue(val)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim())
            return console.log('El campo está vacio');

        setCategories(categorie => [inputValue, ...categorie]);
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ (e) => handlerInputCange(e.target.value)}
            />
            {/* <button onClick={() => addCategorie()}>Agregar</button> */}
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
