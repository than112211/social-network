import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        console.log('Saga start')
    ]);
}
export default rootSaga