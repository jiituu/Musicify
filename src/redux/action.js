import { ADD_TO_MUSIC, GET_MUSIC, REMOVE_MUSIC,UPDATE_MUSIC } from "./constant"

export const getMusic=(data)=>{
    console.warn("GET MUSIC action")
    return {
        type:GET_MUSIC,
        data
    }
}
export const removeMusic=(data)=>{
    return {
        type:REMOVE_MUSIC,
        data
    }
}


export const addToMusic = (name, title) => ({
    type: ADD_TO_MUSIC,
    data: { name, title }
  });

  export const updateMusic = (id, newData) => ({
    type: UPDATE_MUSIC,
    id,
    newData,
  });
