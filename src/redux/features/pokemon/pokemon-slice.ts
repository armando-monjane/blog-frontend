import { Slice, createSlice } from "@reduxjs/toolkit";

export interface PostState {
    isLoading: boolean;
}

const initialState: PostState = {
    isLoading: false,
};

/**
 * Redux slice for create post state management.
 * @name post
 * @type {Slice}
 */
export const post: Slice = createSlice({
    name: "post",
    initialState,
    reducers: {
        resetState: () => {
            return initialState;
        },
    },
});

export const {
    resetState,
} = post.actions;
export default post.reducer;
