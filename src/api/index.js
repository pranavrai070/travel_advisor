import axios from "axios";


const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData=async()=>{
    try{
      const {data:{data}} =await axios.get(URL,{
        params: {
          bl_latitude: '11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359',
        },
        headers: {
          'x-rapidAPI-Key': 'f8f0a10507msh3492107ce24e91cp1c30d6jsn92d6da17161c',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        },
      });
        
    return data;
    }catch(error){
      console.log(error);
    }
};