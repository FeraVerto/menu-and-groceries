//формирует текстовое сообщение из объекта для отправки в телеграм

export const getFormattedListProducts = (
  data: { [key: string]: { name: string; id: string }[] },
  order: string[]
): string => {
  let formattedText = 'Заказанные блюда:\n';
  order.forEach((dish, index) => {
    formattedText += `    ${index + 1}. ${dish}\n`;
  });

  formattedText += '\nСписок продуктов:\n';
  Object.entries(data).forEach(([category, products]) => {
    formattedText += `    ${category}\n`;
    products.forEach((product) => {
      formattedText += `      - ${product.name}\n`;
    });
  });

  return formattedText;
};
