import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produtos, Produto } from '../../types'

const initialState: Produtos = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const p = action.payload

      if (state.itens.find((produto) => produto.id === p.id)) {
        alert('Produto já adicionado')
      } else {
        state.itens.push(p)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
