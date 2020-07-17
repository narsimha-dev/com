import React,{useState, useEffect} from 'react';

export const User=(props)=>{

    // const [name,setName]=useState("abcd");
    const width=useWidthResize();
const name=useHandleInput("abcd");
console.log("object react hook", name) 
useDocumentTitleName(name.value);

    // function handleCahnge(e){
    //     setName(e.target.value);    
    // }
    // useEffect(()=>{
    //     document.title=name
    // })
    
    return(
        <section>

            <label>
                {/* <input
                value={name} onChange={handleCahnge}/> */}
            
            <input {...name}/></label><br/>
            <label >Width:  &nbsp;
                { width}
            </label>
        </section>
    )
}

function useHandleInput(initialValue){
    const[value, setValue]=useState(initialValue);
    function handleCahnge(e){
      setValue(e.target.value)
    }
    return{
        value, onChange:handleCahnge
    };
}
function useDocumentTitleName(name){
    useEffect(()=>{
        document.title=name
    })
}

function useWidthResize(){
    const [width, setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handleResizeWidth=()=>setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWidth);
        return()=>{
            window.removeEventListener('resize', handleResizeWidth);
        };
    });
    return width;
}