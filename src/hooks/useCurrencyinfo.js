import { useEffect,useState } from "react";
function useCunrencyinfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
      
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>setdata(response[currency]))
        console.log(data);
        
    },[currency])
    console.log(data);
    return data
}
export default useCunrencyinfo