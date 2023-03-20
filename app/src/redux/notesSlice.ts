import type { ErrorResponse } from '@/models/ErrorResponse';
import type { NotesData } from '@/models/NotesData';
import { notesApi } from '@/services/notes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

interface NotesState {
  isLoading: boolean;
  notes: NotesData;
}

const initialState: NotesState = {
  isLoading: true,
  notes: [],
};

export const getNotes = createAsyncThunk<
  NotesData,
  void,
  {
    rejectValue: number | undefined;
  }
>('getAllNotes', async (_, thunkApi) => {
  try {
    const resp = await notesApi.getNotes();
    return resp;
  } catch (e) {
    return thunkApi.rejectWithValue((<AxiosError<ErrorResponse>>e).response?.status);
  }
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.isLoading = false;
    });
  },
});

export default notesSlice.reducer;
