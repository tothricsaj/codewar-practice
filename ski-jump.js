function skiJump(mountain){
  let speed = mountain.length * 1.5;
  let jmpLength = (mountain.length * speed * 9) / 10;

  jmpLength = (Math.round(jmpLength * 100) / 100).toFixed(2);

  console.log(`this is jmpLength ${jmpLength}`);
  
  if (jmpLength < 10) return `${jmpLength} metres: He's crap!`;
  else if (jmpLength >= 10 && jmpLength < 25) return `${jmpLength} metres: He's ok!`;
  else if (jmpLength >= 25 && jmpLength < 50) return `${jmpLength} metres: He's flying!`;
  else if (jmpLength >= 50) return `${jmpLength} metres: He's Gold!!`;
}

console.log(skiJump(['*']));
console.log(skiJump(['*', '**', '***']));
console.log(skiJump(['*', '**', '***', '*****', '******']));
console.log(skiJump(['*', '**', '***', '*****', '******', '*******']));
