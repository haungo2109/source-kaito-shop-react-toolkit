import { createSlice } from "@reduxjs/toolkit";
import {
    loginUser,
    getProfile,
    registerUser,
    updateNameSexUser,
    uploadImageUser,
    getDiaryComment
} from './patchAPI';
import { deleteComment } from 'features/Comment/pathAPI';
import { message } from 'antd';
const key = 'updatable';
const UserSlice = createSlice({
    name: 'name',
    initialState: {
        userSlice: [],
        tokenSlice: null,
        loadingSlice: false,
        // history comment
        diaryComment: [],
        diaryCommentLength: 0,
        loadingDiaryComment: false
    },
    extraReducers: {
        [loginUser.rejected]: state => {
            message.loading({ content: 'Đang xử lý...', key });
            setTimeout(() => {
                message.error({ content: 'Tài khoản hoặc mật khẩu không đúng!', key, duration: 2 });
            }, 1000);
        },
        [loginUser.fulfilled]: (state, action) => {
            localStorage.setItem("token", action.payload.accesToken);
            state.userSlice = action.payload.user;
            state.tokenSlice = action.payload.accesToken;
        },
        [getProfile.rejected]: state => {
            state.userSlice = [];
            localStorage.removeItem('token');
            state.tokenSlice = null;
        },
        [getProfile.fulfilled]: (state, action) => {
            state.userSlice = action.payload.data;
            state.tokenSlice = localStorage.getItem('token');
        },// post register user
        [registerUser.rejected]: () => {
            message.loading({ content: 'Đang xử lý...', key });
            setTimeout(() => {
                message.error({ content: 'Tài khoản này đã tồn tại !', key, duration: 2 });
            }, 1000);
        },
        [registerUser.fulfilled]: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            state.userSlice = action.payload.data;
            state.tokenSlice = action.payload.token;

        }, // up date information user
        [updateNameSexUser.fulfilled]: (state, action) => {
            state.userSlice = action.payload.data;
            state.loadingSlice = true;
        },//upload Image
        [uploadImageUser.fulfilled]: (state, action) => {
            state.userSlice = action.payload.data;
        },
        //  Diary Comment user
        [getDiaryComment.pending]: (state) => {
            state.loadingDiaryComment = true;
        },
        [getDiaryComment.rejected]: (state, action) => {
            state.loadingDiaryComment = false;
        },
        [getDiaryComment.fulfilled]: (state, action) => {
            state.loadingDiaryComment = false;
            state.diaryComment = action.payload.data;
            state.diaryCommentLength = action.payload.length;
        },
        // delete comment
        [deleteComment.fulfilled]: (state, action) => {
            const id = action.payload.data._id;
            const index = state.diaryComment.findIndex(comment => comment._id === id);
            state.diaryComment.splice(index, 1);
            state.diaryCommentLength = state.diaryCommentLength - 1;
        }
    }
});
const { reducer } = UserSlice;
export default reducer;