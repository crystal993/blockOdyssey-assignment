export const ellepsis = (text) => {
  if (text.length >= 40) return [...text].slice(0, 40).concat('...').join('');
  else return text;
};
