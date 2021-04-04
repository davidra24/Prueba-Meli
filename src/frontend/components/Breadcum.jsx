import React from 'react';

export const Breadcum = (categories) =>
  categories.map((categorie, index) =>
    index + 1 === categories.length ? (
      <p key={categorie}>{`${categorie}`}</p>
    ) : (
      <p key={categorie}>{`${categorie} >`}&nbsp;</p>
    )
  );
