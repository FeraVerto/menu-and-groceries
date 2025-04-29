export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    //создаем объект для чтения файлов с компьютера пользователя
    const reader = new FileReader();
    //обработчик события load,
    //срабатывает при успешном завершении операции чтения
    reader.onload = () => resolve(reader.result);
    //обработчик события error
    //срабатывает, когда возникает ошибка при операции чтения
    reader.onerror = (error) => reject(error);
    //проверка на существование file и проверка существования образа
    if (file?.type && file.type?.match('image.*')) {
      //запускает процесс чтения Blob => data: URL
      reader.readAsDataURL(file);
    }
  });
};
