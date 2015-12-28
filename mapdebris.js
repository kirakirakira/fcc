function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var periods = [];

  for (var i = 0; i < arr.length; i++) {
  	var thing = arr[i].name;
  	var altitude = arr[i].avgAlt;
  	var period = Math.round(2*Math.PI*Math.sqrt(Math.pow((earthRadius + altitude),3)/GM));
  	var result = {name: thing, orbitalPeriod: period};
  	periods.push(result);

  }
  return periods;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
