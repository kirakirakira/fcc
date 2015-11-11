var Person = function(firstAndLast) {
  
  var first_name = firstAndLast.split(" ")[0];
  var last_name = firstAndLast.split(" ")[1];
  
  this.setFirstName = function(first) {
    first_name = first;
  }

  this.getFirstName = function() {
    return first_name;
  }
  
  this.setLastName = function(last) {
    last_name = last;
  } 

  this.getLastName = function() {
    return last_name;
  }

  this.setFullName = function(firstAndLast) {
    first_name = firstAndLast.split(" ")[0];
    last_name = firstAndLast.split(" ")[1];
  }

  this.getFullName = function() {
    return first_name + ' ' + last_name;
  }

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFullName('Kira Hartlage');
console.log(bob.getFullName());