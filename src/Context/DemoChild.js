import React,{useContext} from 'react'
import MyContext  from './MyContext'

export default function DemoChild() {
    console.log("Demo Child Render");
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            
        </div>
    )
}
