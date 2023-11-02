import { configureStore, createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { showToggle: false },
  reducers: {
    toggleState(state) {
      state.showToggle = !state.showToggle;
    },
  },
});
const store = configureStore({ reducer: { toggle: toggleSlice.reducer } });

export const toggleActions = toggleSlice.actions;
export default store;
