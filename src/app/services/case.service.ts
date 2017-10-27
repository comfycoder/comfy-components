import { Injectable } from '@angular/core';

const isObject = x =>
  typeof x === 'object' &&
  x !== null &&
  !(x instanceof RegExp) &&
  !(x instanceof Error) &&
  !(x instanceof Date);

const LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
};

@Injectable()
export class CaseService {

  constructor() { }

  mapObject(obj, fn, opts, seen) {
    opts = Object.assign({
      deep: false,
      target: {}
    }, opts);

    seen = seen || new WeakMap();

    if (seen.has(obj)) {
      return seen.get(obj);
    }

    seen.set(obj, opts.target);

    const target = opts.target;

    delete opts.target;

    for (const key of Object.keys(obj)) {

      const val = obj[key];
      const res = fn(key, val, obj);
      let newVal = res[1];

      if (opts.deep && isObject(newVal)) {
        if (Array.isArray(newVal)) {
          newVal = newVal.map(x => isObject(x) ? this.mapObject(x, fn, opts, seen) : x);
        }
        else {
          newVal = this.mapObject(newVal, fn, opts, seen);
        }
      }

      target[res[0]] = newVal;
    }

    return target;
  }

  preserveCamelCase(str: string) {

    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;

    for (let i = 0; i < str.length; i++) {

      const c = str[i];

      if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
        str = str.substr(0, i) + '-' + str.substr(i);
        isLastCharLower = false;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = true;
        i++;
      }
      else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
        str = str.substr(0, i - 1) + '-' + str.substr(i - 1);
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = false;
        isLastCharLower = true;
      }
      else {
        isLastCharLower = c.toLowerCase() === c;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = c.toUpperCase() === c;
      }
    }

    return str;
  }

  camelCase(str: string) {

    if (arguments.length > 1) {
      str = Array.from(arguments)
        .map(x => x.trim())
        .filter(x => x.length)
        .join('-');
    }
    else {
      str = str.trim();
    }

    if (str.length === 0) {
      return '';
    }

    if (str.length === 1) {
      return str.toLowerCase();
    }

    if (/^[a-z0-9]+$/.test(str)) {
      return str;
    }

    const hasUpperCase = str !== str.toLowerCase();

    if (hasUpperCase) {
      str = this.preserveCamelCase(str);
    }

    return str
      .replace(/^[_.\- ]+/, '')
      .toLowerCase()
      .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
  }

  camelcaseKeysDeep(obj: object) {

    // Any falsy, which includes `null` whose typeof is `object`.
    if (!obj) {
      return obj;
    }

    // Date, whose typeof is `object` too.
    if (obj instanceof Date) {
      return obj;
    }

    // Array, whose typeof is `object` too.
    if (Array.isArray(obj)) {
      return obj.map((element) => {
        return this.camelcaseKeysDeep(element);
      });
    }

    // So, if this is still an `object`, we might be interested in it.
    if (typeof obj === 'object') {
      return this.mapObject(obj, (key, value) => {
        const newKey = this.camelCase(key);
        if (key !== newKey && newKey in obj) {
          throw new Error('Camelcased key `' + newKey + '` would overwrite existing key of the given JSON object');
        }
        return [newKey, this.camelcaseKeysDeep(value)];
      }, {}, undefined);
    }

    // Something else like a String or Number.
    return obj;
  }

  upperCase(str, locale) {

    const lang = LANGUAGES[locale];

    str = str == null ? '' : String(str);

    if (lang) {
      str = str.replace(lang.regexp, (m) => {
        return lang.map[m];
      });
    }

    return str.toUpperCase();
  }

  upperCaseFirst(str, locale) {

    if (str == null) {
      return '';
    }

    str = String(str);

    return this.upperCase(str.charAt(0), locale) + str.substr(1);
  }

  pascalcaseKeysDeep(obj: object) {

    // Any falsy, which includes `null` whose typeof is `object`.
    if (!obj) {
      return obj;
    }

    // Date, whose typeof is `object` too.
    if (obj instanceof Date) {
      return obj;
    }

    // Array, whose typeof is `object` too.
    if (Array.isArray(obj)) {
      return obj.map((element) => {
        return this.camelcaseKeysDeep(element);
      });
    }

    // So, if this is still an `object`, we might be interested in it.
    if (typeof obj === 'object') {
      return this.mapObject(obj, (key, value) => {
        let newKey = this.camelCase(key);
        if (key !== newKey && newKey in obj) {
          throw new Error('Camelcased key `' + newKey + '` would overwrite existing key of the given JSON object');
        }
        newKey = this.upperCaseFirst(newKey, undefined);
        return [newKey, this.pascalcaseKeysDeep(value)];
      }, {}, undefined);
    }

    // Something else like a String or Number.
    return obj;
  }
}
