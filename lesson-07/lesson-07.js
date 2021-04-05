let str = 'Ваш планета акружена? выхадите С поднятыми бровями! Всесложить свои тушки.';
str = str.toLocaleLowerCase()
         .replaceAll(/(\?\W|!\W|^)(.)/g, (x => x.toUpperCase()))
         /*.replace(/(!\W)(.)/g, (x => x.toUpperCase()))*/
         /*.replace(/^(.)/, (x => x.toUpperCase()))*/
         .replace(/хад/, 'ход')
         .replaceAll(/\?|\./g, '!')
         .replace(/(все)/i, '$1м ')
         .replace(/а(кр)/, 'о$1')
         .replace(/(ваш)/i, '$1а');

console.log(str);