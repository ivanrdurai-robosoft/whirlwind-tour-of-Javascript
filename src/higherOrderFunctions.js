function flattening(){
    let arrays = [[1, 2, 3], [4, 5], [6]];
    console.log(arrays.reduce((a, b) => a.concat(b)));
  }
  
  flattening();

function loop(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
      body(i);
    }
  }
  
loop(3, n => n > 0, n => n - 1, console.log);

function every(array, predicate){
  for(let element of array){
    if(!predicate(element)){
      return false;
    }
  }
  return true
}

function every1(array, predicate){
  return !array.some(element => !predicate(element));
}
