var Person = function(firstAndLast) {
  
  var first_name = firstAndLast.split(" ")[0];
  var last_name = firstAndLast.split(" ")[1];
  
  function setFirstName(first) {
    first_name = first;
  }
  
  function getFirstName() {
    return first_name;
  }
  
  function setLastName(last) {
    last_name = last;
  }
  
  function getLastName() {
    return last_name;
  }
  
  function setFullName(firstAndLast) {
    first_name = firstAndLast.split(" ")[0];
    last_name = firstAndLast.split(" ")[1];
  }

  function getFullName() {
    console.log(typeof first_name);
    return first_name + ' ' + last_name;
  }

  return {
    setFirstName: setFirstName,
    getFirstName: getFirstName,
    setLastName: setLastName,
    getLastName: getLastName,
    setFullName: setFullName,
    getFullName: getFullName
  }

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFullName('Kira Hartlage');
console.log(bob.getFullName());