const options = {
  day: '2-digit' as const,
  month: 'short' as const,
  year: 'numeric' as const,
};

// Criação do objeto Intl.DateTimeFormat()
export const dateFormatter = (date: Date) => {
  const formatterDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
  const noOfnoDotDate = formatterDate.replaceAll('de', '').replace('.', '');
  return noOfnoDotDate;
};
