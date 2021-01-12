/* eslint-disable @typescript-eslint/no-explicit-any */
export default [
  {
    value: (x: any): any => x,
    type: 'function',
    isFunction: true,
    isTruthy: true
  },
  {
    value: new Date(),
    type: 'date',
    isDate: true,
    isTruthy: true
  },
  {
    value: '',
    type: 'string',
    isString: true,
    isFalsy: true
  },
  {
    value: 'x',
    type: 'string',
    isString: true,
    isNonEmptyString: true,
    isTruthy: true
  },
  {
    value: { x: null },
    type: 'object',
    isObject: true,
    isTruthy: true
  },
  {
    value: 0,
    type: 'number',
    isNumber: true,
    isNumeric: true,
    isFalsy: true
  },
  {
    value: true,
    type: 'boolean',
    isBoolean: true,
    isTruthy: true
  },
  {
    value: /.*/gim,
    type: 'regexp',
    isRegExp: true,
    isTruthy: true
  },
  {
    value: '12.3',
    type: 'string',
    isString: true,
    isNumeric: true,
    isNonEmptyString: true,
    isTruthy: true
  },
  {
    value: undefined,
    type: 'undefined',
    isFalsy: true
  },
  {
    value: [],
    type: 'array',
    isArray: true,
    isEmptyArray: true,
    isTruthy: true
  },
  {
    value: {},
    type: 'object',
    isObject: true,
    isEmptyObject: true,
    isTruthy: true
  },
  {
    value: null,
    type: 'null',
    isFalsy: true
  }
];
