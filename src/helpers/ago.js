const ago = days => {
  if (days === 0) {
    return 'Today';
  } if (days === 1) {
    return 'Yesterday';
  }
  return `${days}d`;
};

export default ago;
