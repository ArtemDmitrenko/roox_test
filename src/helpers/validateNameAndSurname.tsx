const validateNameAndSurname = (value: string) => {
  const nameReg = /^([A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?)$/i;
  if (value) {
    if (!value.match(nameReg)) return 'Поле не должно содержать символы';
    return undefined;
  }
  return 'Заполните поле';
};

export default validateNameAndSurname;
