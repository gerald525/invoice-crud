const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0]; // Converts to YYYY-MM-DD
};

export default formatDate;