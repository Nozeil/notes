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

const asyncThunkWithAxiosError = <thunkResponse, thunkRequest>(
  type: string,
  apiCall: (params: thunkRequest) => Promise<thunkResponse>
) => {
  return createAsyncThunk<
    thunkResponse,
    thunkRequest,
    {
      rejectValue: number | undefined;
    }
  >(type, async (data, thunkApi) => {
    try {
      const resp = await apiCall(data);
      return resp;
    } catch (e) {
      return thunkApi.rejectWithValue((<AxiosError<ErrorResponse>>e).response?.status);
    }
  });
};

export const getNotes = asyncThunkWithAxiosError<NotesData, void>('getAllNotes', notesApi.getNotes);
export const createNote = asyncThunkWithAxiosError<NoteResponse, NoteRequest>(
  'createNote',
  notesApi.createNote
);

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
