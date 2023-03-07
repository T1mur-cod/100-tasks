import asyncAuth from '.';

/*
 * Функция asyncAuth(callback) получает callback где
 * ошибка может быть передана 1 аргументом или
 * необходимые данные, вторым аргументом.
 * 
 * Вам нужно реализовать функцию auth(),
 * которая вызывает asyncAuth(), но возвращает Promise.
 * 
 * @returns {Promise}
 */

function auth() {
  return new Promise ((resolve, reject) => {
      asyncAuth((error, data) => {
         if (error) {
             reject(error)
         } else {
             resolve(data)
         }
    })
  }) 
}

/
 * Функция tryAuth() использует auth() и, в случае ошибки,
 * совершает N дополнительных попыток.
 */
async function tryAuth(n) {
    const maxNum = n
    let att = 0;
    let error;

    while(att < maxNum) {
        try {
            const result = await auth()
            return result
        } catch(err) {
            att = att + 1;
            error = err;
        }
    }

    throw error;
}


tryAuth(1).then((data) => console.log(data))
    .catch(err => console.error(err))
