import Produto from '../components/Produto'
import { useGetListaQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: lista, isLoading } = useGetListaQuery()
  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      <S.Produtos>
        {lista?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
