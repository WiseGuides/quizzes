// let yearOfBirth = prompt('What year were you born in?');

let main = document.querySelector('main');

let outputName = (value) => {
  main.innerHTML = `Hi, ${value}`;
}

let calculateAge = (value) => {
  let yearOfBirth = value;
  let age = 2019 - yearOfBirth;
  main.innerHTML = `${main.innerHTML}<br />You are ${age} years old.`
}

