function calulateKineticEnergy(){
  let mass = UI('mass'), velocity = UI('velocity');
  alert(`Kinetic energy equals to: ${mass * velocity**2 / 2} J`);
}

function UI(param){
  let value = +prompt(`Enter ${param} value: `);
  while(Number.isNaN(value) || value < 0){
    if(value < 0) alert(`Negative value for ${param}. Please try again`);
    else alert('This is not a number. Please try again');
    value = +prompt(`Enter ${param} value: `);
  }
  return value;
}

calulateKineticEnergy();