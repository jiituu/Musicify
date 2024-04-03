
import { ADD_TO_MUSIC, REMOVE_MUSIC, SET_MUSIC,UPDATE_MUSIC } from "./constant"

export const musicData = (data = [], action) => {

  switch (action.type) {
    case SET_MUSIC:
      return [...action.data]

    case ADD_TO_MUSIC:
      return [...data, action.data]

    case REMOVE_MUSIC:
      return data.filter(item => item !== action.data);

      case UPDATE_MUSIC:

            const index = data.findIndex(song => song.id === action.id);
            if (index !== -1) {

              return [
                ...data.slice(0, index),
                { ...data[index], ...action.newData },
                ...data.slice(index + 1),
              ];
            }
            return data;



    default:
      return data
  }


}