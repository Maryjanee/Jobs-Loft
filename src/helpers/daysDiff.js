const daysDiff = date => {
  const date1 = new Date(date);
  const date2 = new Date();

  // To calculate the time difference of two dates
  const timeDifference = date2.getTime() - date1.getTime();

  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return Math.floor(daysDifference);
};

export default daysDiff;
