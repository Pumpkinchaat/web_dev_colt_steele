const body = document.querySelector('body');
// setTimeout(() => {
//     body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             body.style.backgroundColor = 'violet';
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const delayColor = function(color, delay, next) {
//     setTimeout(() => {
//         body.style.backgroundColor = color;
//         next();
//     }, delay);
// }

// delayColor('red', 1000, () => {
//     delayColor('orange', 1000, () => {
//         delayColor('yellow', 1000, () => {
//             delayColor('green', 1000, () => {
//                 delayColor('blue', 1000, () => {
//                     delayColor('indigo', 1000, () => {
//                         delayColor('violet', 1000, () => {})
//                     })
//                 })
//             })
//         })
//     })
// })

// const checkURL = (url, success, fail) => {
//     if (Math.floor(Math.random() * 100) > 10) {
//         success('This is a success');
//     } else fail('This is a failure');
// }

// checkURL('google.com',
//     function(success) {
//         console.log('This was a success', 'google.com');
//         console.log(success);
//         checkURL('/page1',
//             (success) => {
//                 console.log(success, 'page/1');
//             },
//             (fail) => {
//                 console.error(':(', fail);
//             }
//         )
//     },
//     function(fail) {
//         console.error(':(');
//     }
// )

// function delayColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayColor('white', 0)
//     .then(() => delayColor('violet', 1000))
//     .then(() => delayColor('indigo', 1000))
//     .then(() => delayColor('blue', 1000))
//     .then(() => delayColor('green', 1000))
//     .then(() => delayColor('yellow', 1000))
//     .then(() => delayColor('orange', 1000))
//     .then(() => delayColor('red', 1000))

// async function delayColor(color, delay) {
//     setTimeout(() => {
//         body.style.backgroundColor = color;
//     }, delay)
// }

// const rainbow = async function() {
//     await delayColor('red', 1000);
//     await delayColor('blue', 1000);
//     await delayColor('orange', 1000);
//     await delayColor('yellow', 1000);
//     await delayColor('green', 1000);
//     await delayColor('pink', 1000);
// }

// const login = async(username, password) => {
//     if (!username || !password) throw 'Not enough details';
//     else if (username && password && password == 'corgifeetarecute') return 'This is a success'
//     else throw 'Not a match';
// }

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }
// login('wedwe', 'corgifeetarecute')
//     .then((success) => console.log(success))
//     .catch((fail) => console.log(fail))

// async function rainbow() {
//     await colorChange('violet', 1000);
//     await colorChange('blue', 1000);
//     await colorChange('indigo', 1000);
//     await colorChange('green', 1000);
//     await colorChange('yellow', 1000);
//     await colorChange('orange', 1000);
//     await colorChange('red', 1000);
// }