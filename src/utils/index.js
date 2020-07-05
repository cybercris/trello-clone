export const getMaxCardId = (columns) => {
  const cards = columns.reduce(
    (acc, current) => [...acc, ...current.cards],
    []
  );

  return cards.reduce(
    (acc, current) => (acc > current.id ? acc : current.id),
    0
  );
};

export const getMaxColId = (columns) => {
  return columns.reduce(
    (acc, current) => (acc > current.id ? acc : current.id),
    0
  );
};
