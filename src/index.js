module.exports = function check(str, bracketsConfig){
  console.log(str);
  let count = 0;
  let found = 1;
  while(found == 1){
    found = 0;
    for( let j=0; j < bracketsConfig.length;j++){
      let arr = str.split(bracketsConfig[j][0]+bracketsConfig[j][1]);
      if(arr.length > 1){
        count++
        found = 1;
        str = arr.join('');
      }
    }
  }
  let result = false;
  if(str == ''){
    result = true;
  }
  console.log(result);
  return result;
}