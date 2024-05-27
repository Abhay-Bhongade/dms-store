export const longSentence = (max, word) => {
  return word?.length > max ? word.substring(0, max) + "..." : word;
};

localStorage.setItem("token","11043|00geKyFYz48BcqtxLF3WmGM3jALGSVs95AwaYUZy");

export const getLocalStorageToken = ()=>{
  const token  = localStorage.getItem("token");
  return token;
}

