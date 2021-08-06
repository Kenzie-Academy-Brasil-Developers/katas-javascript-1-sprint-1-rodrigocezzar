function oneThroughTwenty() {
    let n = [];
    for(let i = 1; i <= 20; i++) {
      n.push(i);
    }  
    return n;
}

console.log(oneThroughTwenty())


function evensToTwenty() {
  let m = [];
  for(let i = 2; i <= 20; i+=2) {
    m.push(i)
    }
  return m  
}

console.log(evensToTwenty())


function oddsToTwenty() {
    let p = []; 
    for(let i = 1; i <= 20; i+=2) {
      p.push(i)
    }
    return p
}
  console.log(oddsToTwenty())

function multiplesOfFive() {
    let q = [];
    for(let i = 5; i <= 100; i+=5) {
      q.push(i)
    }
    return q
}
  console.log(multiplesOfFive())

function squareNumbers() {
    
    let w = [];
    for(let i = 1; i <= 10; i++) {
      w.push(i**2)
    }
    return w    
    }

  console.log(squareNumbers())

function countingBackwards() {
    let e = [];
    for(i = 20; i >= 1; i-=1) {
      e.push(i);
    }
    return e      
}
  console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    let r = [];
    for(i = 20; i>= 2; i-=2) {
      r.push(i)
    }
    return r
}
  console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    let t = [];
    for(i = 19; i>=1; i-=2){
    t.push(i);
    }
    return t
}   

  console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    let y = [];
    for(let i = 100; i >=5; i-=5) {
      y.push(i)
    }
    return y
}

  console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    let u = [];
    for(let i = 10; i >= 1; i-=1) {
      u.push(i**2)
    }
    return u  
}

  console.log(squareNumbersBackwards())
