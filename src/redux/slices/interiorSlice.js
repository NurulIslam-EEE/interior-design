import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// First, create the thunk
export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async () => {
        const response = await fetch('https://murmuring-scrubland-76989.herokuapp.com/services').then(res => res.json())
        return response.data
    }
)

const interiorSlice = createSlice({
    name: 'interior',
    initialState: {
        services: [],
        orderList: [],
        status: 'idle'
    },
    reducers: {
        addToOrderList: (state, { payload }) => {
            state.orderList.push(payload)
        },
        removeFromOrderList: (state, { payload }) => {
            state.orderList = state.orderList.filter(book => book.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.services = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchServices.pending, (state, action) => {
            state.status = 'pending';
        })
    },

});

export const { addToOrderList, removeFromOrderList } = interiorSlice.actions;

export default interiorSlice.reducer;

