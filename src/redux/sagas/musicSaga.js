
import {takeEvery,put, call,select } from 'redux-saga/effects'
import { GET_MUSIC, SET_MUSIC, ADD_TO_MUSIC,UPDATE_MUSIC } from '../constant';
import { updateMusic, } from '../action';
import { setMusic } from '../action'; // Import action creators for SET_MUSIC and GET_MUSIC


function* getMusic(){


    
    let data = yield  fetch('https://jsonplaceholder.typicode.com/posts')
        data = yield data.json()
        yield put ({type:
            SET_MUSIC, 
            data})
}
function* addMusic(action) {


  try {
      const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
              title: action.data.title,
              body: action.data.body,
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const newMusic = yield response.json(); // Assuming the response contains the newly added music data
     
      console.log('New Music', newMusic)
      yield put(setMusic([...(yield select(state => state.music)), newMusic])); // Append the new music to the existing music list
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
      yield put(getMusic());
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
