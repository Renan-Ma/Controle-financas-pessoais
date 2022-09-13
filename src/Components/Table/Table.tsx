import React from 'react'
import { Item } from '../../Types/Item'
import * as S from "./styled"
import TableItem from '../TableItem/TableItem'

type Props ={
  list: Item[]
}

const Table = ({list}: Props) => {
  return (
    <S.Container>
      <thead>
        <tr>
          <S.TableColumn width={100} >Data</S.TableColumn>
          <S.TableColumn width={130}>Categoria</S.TableColumn>
          <S.TableColumn>Título</S.TableColumn>
          <S.TableColumn width={100} >Valor</S.TableColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
         return <TableItem key={index} item={item} />
        })}
      </tbody>

    </S.Container>
  )
}

export default Table