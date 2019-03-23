module.exports = function check(str, bracketsConfig) {

  var arr = str.split('');
  
  for( let i = 0; i < arr.length; i++ ) {
      for( let x = 0; x < bracketsConfig.length; x++ ) {
  
          if( ( arr[i] == bracketsConfig[x][0] ) && ( arr[i+1] == bracketsConfig[x][1] ) ) {
              
              arr.splice(i, 2);
              i = -1; x = -1; //? +1 with new cycle [ i = -1 + 1 = 0 ]
              
          }
  
      }
  }
  
  if ( arr.length == 0 ) {
      return true;
  } else return false;
  
  }  