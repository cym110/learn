function maopao(arr){ 
  const array = [...arr] 
  let isOk = true 
  for(let i = 0, len = array.length; i < len - 1; i++){ 
    for(let j = i + 1; j < len; j++) { 
      if (array[i] > array[j]) { 
        let temp = array[i] 
        array[i] = array[j] 
        array[j] = temp 
        isOk = false 
      } 
    }
    if(isOk){ 
      Break 
    } 
  }
  return array
}