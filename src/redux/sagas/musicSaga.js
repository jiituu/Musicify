
import {takeEvery,put, call} from 'redux-saga/effects'
import { GET_MUSIC, SET_MUSIC, ADD_TO_MUSIC,UPDATE_MUSIC } from '../constant';
import { updateMusic, } from '../action';

function* getMusic(){


    
    let data = yield  fetch('https://jsonplaceholder.typicode.com/posts')
        data = yield data.json()
        console.warn(data)
        yield put ({type:
            SET_MUSIC, 
            data})
        console.warn("saga called")

}
function* addMusic(action) {
    try {
      const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: action.data.title,
          body: action.data.body,
          userId: 1 // You can set the userId to any value, as it's not used by JSONPlaceholder
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Wait for the POST request to complete
      yield response.json();
      // After the POST request is successful, dispatch the action to fetch updated music
      yield put({ type: GET_MUSIC });
    } catch (error) {
      console.error('Error adding music:', error);
    }
  }

  function* updateMusicSaga(action) {
    try {
      const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${action.id}`, {
        method: 'PUT',
        body: JSON.stringify(action.newData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      yield response.json();
      yield put({ type: GET_MUSIC });
    } catch (error) {
      console.error('Error updating music:', error);
    }
  }
  
  
  

function* musicSaga()

{
yield takeEvery (GET_MUSIC, getMusic)
yield takeEvery(ADD_TO_MUSIC, addMusic);
yield takeEvery(UPDATE_MUSIC, updateMusicSaga);


}
export default musicSaga;
