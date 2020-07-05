export const getMaxColId = (columns) => {
  return columns.reduce(
    (acc, current) => (acc > current.id ? acc : current.id),
    0
  );
};
