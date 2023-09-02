import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
type FavoritoState = {
  itens: Produto[]
  isFavorito: boolean
}

const initialState: FavoritoState = {
  itens: [],
  isFavorito: false
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      if (state.itens.find((p) => p.id === action.payload.id)) {
        state.itens = state.itens.filter((p) => p.id !== action.payload.id)
      } else {
        state.itens.push(action.payload)
      }
      state.isFavorito = !state.isFavorito
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
