// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'function' || typeof obj === 'undefined'){
    return '';
  } else if (typeof obj === 'number'){
    return obj.toString();
  } else if (typeof obj === 'string'){
    return "\"" + obj + "\"";
  } else if (obj === null){
    return 'null';
  } else if (typeof obj === 'boolean'){
    if(obj){
      return 'true';
    } else {
      return 'false';
    }
  } else if (typeof obj === 'object'){
    var str;
    var i;
    if(Array.isArray(obj)){
      str = '[';
      for(i = 0; i < obj.length; i++){
        str += stringifyJSON(obj[i]);
        if(i !== (obj.length-1)){
          str += ',';
        } 
      }
      return str + ']';
    } else {
      str = '{';
      for(i in obj){
        if (str !== '{'){
          str += ',';
        }
        if(!(typeof obj[i] === 'function' || typeof obj[i] === 'undefined')){
          str += '\"' + i + '\"' + ':' + stringifyJSON(obj[i]);
        }
      }
      str += '}';
      return str;
    }
  }
};
