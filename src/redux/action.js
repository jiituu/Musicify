import { ADD_TO_MUSIC, GET_MUSIC, REMOVE_MUSIC,UPDATE_MUSIC,SET_MUSIC } from "./constant"

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


export const setMusic = (musicData) => ({
    type: SET_MUSIC,
    data:musicData
});




export const addToMusic = (title, body) => ({
    type: ADD_TO_MUSIC,
    data: {  title , body}
  });

  export const updateMusic = (id, newData) => ({
    type: UPDATE_MUSIC,
    id,
    newData,
  });
