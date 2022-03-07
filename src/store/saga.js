import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import MusicService from "../service/music";

const musicService = new MusicService();

function fetchMusic() {
  return musicService.getResource().then((res) => res);
}

function* fetchTopMusic() {
  try {
    const data = yield call(fetchMusic);
    yield put({type: "FETCH_TOP_MUSIC", payload: data});
  } catch (e) {
    throw new Error(e)
  }
}

function* saga() {
  console.log("watchSaga running");
  yield takeEvery("FETCH_TOP_MUSIC_ASYNC", fetchTopMusic);
}


export default saga;