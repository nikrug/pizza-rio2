declare module 'cleave.js' {
  export default class Cleave {
    constructor(element: HTMLInputElement | HTMLElement, options?: CleaveOptions);
  }

  interface CleaveOptions {
    prefix?: string;
    delimiters?: string[];
    blocks?: number[];
    numericOnly?: boolean;
  }
}