// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  })
};
function fuzzyMatch(drivers, name){
  return drivers.filter(function (driver) {
    return driver.substring(0,2) === name.substring(0,2);
  })
  };
function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  })
  };
