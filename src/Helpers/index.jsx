const longSentence = (max,word)=>{
  return  word?.length > max ? word.substring(0,max) + "..." : word;
}

export {longSentence}