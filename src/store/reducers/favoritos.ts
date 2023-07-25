import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto, Produtos } from '../../types'

const initialState: Produtos = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.itens.find((produto) => produto.id === favorito.id)) {
        const removerFavorito = state.itens.findIndex(
          (produto) => produto.id === favorito.id
        )
        state.itens.splice(removerFavorito, 1)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})
export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
