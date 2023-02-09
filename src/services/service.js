import axios from "axios" 

export const get=()=>{

}

export const put=async (url,data)=>{
    
   let response=await axios.post(url,data)
   return response
}