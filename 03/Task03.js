import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';


const initialState = { message: 'Działa!', time: new Date() };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return { ...state, time: new Date() };
    }
    return state;
};
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const App = () => {
    return (
        <Provider store={store}>
            <Task01 />
            <Task02 />
            <Task03 />
            {/* <Task04 /> */}
            {/* <Task05 /> */}
        </Provider>
    )
}