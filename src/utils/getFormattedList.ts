export const getFormattedList = (data: {
  [key: string]: { name: string; id: string }[];
}) => {
  const result = Object.entries(data)
    .map(([category, products]) => {
      const productList = products
        .map((product) => `- ${product.name}`)
        .join('\n');
      return `${category}\n${productList}`;
    })
    .join('\n\n');
  return result;
};
