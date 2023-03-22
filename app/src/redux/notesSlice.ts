import type { ErrorResponse } from '@/models/ErrorResponse';
import type { NoteRequest, NoteResponse, NotesData } from '@/models/Notes';
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

export const createNote = createAsyncThunk<
  NoteResponse,
  NoteRequest,
  {
    rejectValue: number | undefined;
  }
>('createNote', async (data, thunkApi) => {
  try {
    const resp = await notesApi.createNote(data);
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
    builder
      .addCase(getNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
        state.isLoading = false;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default notesSlice.reducer;
