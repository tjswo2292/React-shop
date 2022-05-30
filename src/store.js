import { configureStore, createSlice} from '@reduxjs/toolkit';


let user = createSlice({
    // state 하나를 slice라고 부른다
    name: 'user',
    initialState: 'kim',
});

export default configureStore({
    reducer: {
        user : user.reducer
    }
})

