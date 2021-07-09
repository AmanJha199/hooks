import React,{useContext} from 'react'
import MyContext from './MyContext'
import DemoChild from './DemoChild'

export default function Demo() {
    console.log("Demo Render");
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            <DemoChild></DemoChild>
        </div>
    )
}
