// database.ref('notes/-LSUtIeJsWqi2F1DQgKO').remove();

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run',
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Angular, Ionic',
// });


// const onValueChange = (snapshot) => {
//   console.log(snapshot.val());
// };

// database
//   .ref()
//   .on('value', onValueChange, (e) => {
//     console.log(e);
//   });

// setTimeout(() => {
//   database
//     .ref('age')
//     .set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database
//     .ref('age')
//     .set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   }).catch((error) => {
//     console.log(error);
//   });

// database.ref().set({
//   name: 'Igor Yalovoy',
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google',
//   },
//   location: {
//     city: 'Moscow',
//     country: 'Russia'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log(e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });