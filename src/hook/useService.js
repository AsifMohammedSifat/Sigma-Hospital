import { useEffect, useState } from "react"

const useService=()=>{
    const [services,setServices]=useState([]);
    //  fetcth data service  
  useEffect(()=>{
      fetch('./service.json')
      .then(res=>res.json())
      .then(data=>console.log(data))
  },[])
    return [services];
};

export default useService;