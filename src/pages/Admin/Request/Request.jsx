import React,{useState,useEffect} from 'react'

export default function Request(props) {
    const [Rows, setRows] = useState(null)

    useEffect(() => {
  if(props.location.state!==null)
   {
    setRows(props.location.state)
   }    
    }, [Rows])


  console.log(Rows)
   if(Rows===null){
    return (
        <div>
            <div className="h1">NO REQUEST ADDED</div>
        </div>
            
    )
   }else
   {
    return (
        <div>
            <div className="h1">{Rows.brand}</div>
        </div>
            
    )
   }

}
