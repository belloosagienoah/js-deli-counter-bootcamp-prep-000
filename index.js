function takeANumber (katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  return 'Welcome, ' +newCustomer+ '. You are number ' +katzDeli.length + ' in line.';


}

takeANumber(['me'], "sonia")

// Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."

function currentLine(katzDeli){
  if (katzDeli.length===0){
    return "The line is currently empty.";
  }
  else {
  var results = [];
  for(var i=0; i<katzDeli.length; i++){
    results. push(parseInt([i])+1+'. '+katzDeli[i]);
  }

  return "The line is currently: "+ results.join(', ')
}}
currentLine(["Ada", "Grace"])
