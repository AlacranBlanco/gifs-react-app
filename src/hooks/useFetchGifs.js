import React from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = React.useState({
        data: [],
        loading: true
    });

    React.useEffect(() => {
        getGifs(category).then(images => setState({
            data: images,
            loading: false
        }));
    }, [category])

   
    

    return state;
}