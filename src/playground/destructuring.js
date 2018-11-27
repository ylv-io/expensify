const person = {
  name: 'Igor',
  age: 32,
  location: {
    city: 'Moscow',
    temp: 28
  }
}

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp } = person.location;

if (city && temp)
  console.log(`It's ${temp} in ${city}.`);


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  }
}

const { name: publisherName = 'Self Published'} = book.publisher;

console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const menu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [,,mPrice,] = menu;

console.log(`A medium Coffee (hot) costs ${mPrice}`);