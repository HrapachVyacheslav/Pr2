function isEmpty(obj) {
  for (let key in obj) {
    return false; 
  }
  return true; 
}
function checkEmpty() {
  let schedule = {}; 

  alert("Чи порожній об'єкт спочатку? " + isEmpty(schedule)); 
  // покаже: true

  schedule["8:30"] = "Вставай"; 

  alert("Чи порожній об'єкт після? " + isEmpty(schedule)); 
  // покаже: false
}


