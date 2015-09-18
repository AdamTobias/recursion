// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
    function getElements(name, node){
      var elements = [];
      if (node.classList !== undefined && node.classList.contains(className)){
        elements.push(node);
      }
      if (node.childNodes === undefined){
        return elements;
      }
      for(var i = 0; i < node.childNodes.length; i++){
        elements = elements.concat(getElements(name, node.childNodes[i]));
      }
      return elements;
    }

  return getElements(className, document);
};
