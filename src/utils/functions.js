// export const shortenText = text => {
//     let shortened = text.substr(0, 100).trim();  // !The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
//     shortened.length === 100 && (shortened += '...'); // ********	If shortened.length === 100 can be converted to true, returns (shortened += '...'); else, returns  shortened.length === 100.
//     return shortened;
//   };
  
export const shortenText = text => {
  if (text.trim().length >= 100 && text.length !== 100) {
    return `${text.substr(0, 100).trim()}...`;
  }
  return text;
};