import React, { useContext } from 'react'
import { Context } from './context'

const Test = () => {
    const { podcasts } = useContext(Context);
    
    return (
        <>
            { 
                podcasts.map((podcast) => (
                    <h1>{podcast.name}</h1>
                ))
            }
        </>

    )
}

export default Test