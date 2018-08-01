var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
<<<<<<< HEAD
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(line) {
  var first = line[0]
  if (line.length>0){line.shift();
    return `Currently serving ${first}.`;
}
  else {return "There is nobody waiting to be served!"}
}
function currentLine(line) {
  if (line.length>0){return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
}
=======
  return `Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`
}
function nowServing(line, name) {
  if (line.length>0){line.shift}
>>>>>>> c2da7bd8afa475a4c0a7fc46f0068eebec931120
  else {return "The line is currently empty."}
}
