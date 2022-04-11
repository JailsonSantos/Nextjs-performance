import { List, ListRowRenderer } from 'react-virtualized'
// import { useMemo } from "react";

import { ProductItem } from "../ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number,
    price: number,
    priceFormatted: string,
    title: string
  }>,
  onAddToWishList: (id: number) => void;

}

/* // Igualdade refecencial em React
// veficar se as 2 variaveis estão ocupando as mesmas posições na memoria,
// Ele não faz comparação do conteudo do objeto em sim.
// {} === {} */


export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {

  // Função que deixa pra carregado uma lista prévia do que existe na lista total de resultados
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }


  // Evita que os results não sejam recalculados, pois não está havendo alterações
  /*   const totalPrice = useMemo(() => {
      return results.reduce((total, product) => {
        return total + product.price;
      }, 0)
    }, [results]) */

  return (
    <div>
      <h2>Resultado do total de preços: {totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/*     {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })} */}
    </div>
  )
}