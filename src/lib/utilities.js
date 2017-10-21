export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) =>
  Object.keys(options).filter(() => Boolean(options)).join(' ');

export const map = (list, ...args) =>
  Array.prototype.map.apply(list, args);

export const filter = (list, ...args) =>
  Array.prototype.filter.apply(list, args);

export const reduce = (list, ...args) =>
  Array.prototype.reduce.apply(list, args);

export const photoToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if (file) {
      return reader.readAsDataURL(file);
    }

    return reject(new Error('USAGE ERROR: requires file'));
  });
};

// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export const readCookie = (name) => {
  var nameEquals = name + '=';
  var attributes = document.cookie.split(';');

  for (var i = 0; i < attributes.length; i++) {
    var attribute = attributes[i];

    while (attribute.charAt(0) == ' ') {
      attribute = attribute.substring(1, attribute.length);
    }

    if (attribute.indexOf(nameEquals) == 0) {
      return attribute.substring(nameEquals.length, attribute.length);
    }
  }

  return null;
};

export const createCookie = (name,value,days) => {
  let expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = name + '=' + value + expires + '; path=/';
};

export const deleteCookie  = (name) => {
  createCookie(name, '', -1);
};
