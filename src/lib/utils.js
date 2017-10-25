export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ');
export const map = (child, ...args) => Array.prototype.map.apply(child, args);
export const filter = (child, ...args) => Array.prototype.filter.apply(child, args);
export const reduce = (child, ...args) => Array.prototype.reduce.apply(child, args);
export const cookieDelete = key => document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
export const cookieFetchAll = () => {
  return Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return { [key.trim()]: value };
    }));
};

export const cookieFetch = key => {
  let cookies = Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return { [key.trim()]: value };
    }));
  return cookies[key];
};

export const photoToDataUrl = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', () => reject(reader.error));
    return file ? reader.readAsDataURL(file) : reject(new Error('USAGE ERROR: requires file'));
  });
};
