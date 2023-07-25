export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type Produtos = {
  itens: Produto[]
}
