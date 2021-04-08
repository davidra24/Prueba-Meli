import React from 'react';

/**
 * 
 * @param {Array<Categories>} categories Array de categorías para dar formato a la miga de pan 
 * @returns parrafo con información de cada categoría para mostrar miga de pan
 */
export const Breadcum = ({categories}) =>{

  const newCategories = categories.filter(
    element => element !== null && element !== '' && element !== undefined
  )

  return newCategories.map((categorie, index) =>
    index + 1 === newCategories.length ? (
      <p key={categorie}>{`${categorie}`}</p>
    ) : (
      <p key={categorie}>{`${categorie} >`}&nbsp;</p>
    )
  );
}