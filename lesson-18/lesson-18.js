function asyncFunc1(num, cb) {
  if (typeof num !== 'number') throw new Error('Wrong type');
  else setTimeout(() => {
    cb(num / 2)
  }, 2000);
}

function asyncFunc(number, cb) {
 setTimeout(() => {
   if (typeof number === 'string') {
     cb(new Error('Varialbe can\'t be string'))
   } else cb(number / 2)
  }, 2000);
}

asyncFunc(2, (result) => {
  if (result instanceof Error) {
    throw result;
  }
  else asyncFunc(result, result => {
    asyncFunc(result, result => {
      console.log(result);
    });
  });
});

function asyncTest(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'string') reject(new TypeError());
      else resolve(number / 2);
    }, 2000);
  });
}


