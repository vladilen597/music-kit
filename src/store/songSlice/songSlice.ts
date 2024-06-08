import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISong } from '../../constants/resourses/songTypes'

export interface SongState {
  songId: number
  isPlaying: boolean
  hoveredId: number
  volume: number
  view: string
  favoriteSongs: ISong[]
}

const initialState = {
  songId: 0,
  isPlaying: false,
  hoveredId: 0,
  volume: 100,
  view: localStorage.getItem('viewType') || 'GRID',
  favoriteSongs: JSON.parse(localStorage.getItem('favouriteSongs')) || [],
} as SongState

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setIsPlaying(state: SongState, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload
    },
    setSongId(state: SongState, action: PayloadAction<number>) {
      state.songId = action.payload
    },
    setVolume(state: SongState, action: PayloadAction<number>) {
      state.volume = action.payload
    },
    toggleView(state: SongState, action: PayloadAction<string>) {
      state.view = action.payload
    },
    toggleFavouriteSong(state: SongState, action: PayloadAction<ISong>) {
      if (state.favoriteSongs.some((song) => song.id === action.payload.id)) {
        state.favoriteSongs = state.favoriteSongs.filter(
          (song) => song.id !== action.payload.id
        )
        localStorage.setItem(
          'favouriteSongs',
          JSON.stringify(state.favoriteSongs)
        )
      } else {
        state.favoriteSongs = [...state.favoriteSongs, action.payload]
        localStorage.setItem(
          'favouriteSongs',
          JSON.stringify(state.favoriteSongs)
        )
      }
    },
  },
})

export const {
  setIsPlaying,
  setVolume,
  setSongId,
  toggleView,
  toggleFavouriteSong,
} = songSlice.actions
export default songSlice.reducer
