import React, {useContext, useEffect} from 'react';
import noteContext from './context/notes/noteContext';
const About=()=>{
    const a=useContext(noteContext)
    useEffect(()=>{
        a.update()
    },[])
    return (
        <div>
           this is about {a.name} and she is in class {a.class}
        </div>
    )
}
export default About