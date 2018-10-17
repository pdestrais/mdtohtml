// mdtohtml: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './mdtohtml.core.js';
import {
  MarkdownToHTMLComponent
} from './mdtohtml.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MarkdownToHTMLComponent
  ], opts);
}