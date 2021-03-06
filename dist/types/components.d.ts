/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import './stencil.core';




export namespace Components {

  interface MdToHtml {
    'content': string;
  }
  interface MdToHtmlAttributes extends StencilHTMLAttributes {
    'content'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MdToHtml': Components.MdToHtml;
  }

  interface StencilIntrinsicElements {
    'md-to-html': Components.MdToHtmlAttributes;
  }


  interface HTMLMdToHtmlElement extends Components.MdToHtml, HTMLStencilElement {}
  var HTMLMdToHtmlElement: {
    prototype: HTMLMdToHtmlElement;
    new (): HTMLMdToHtmlElement;
  };

  interface HTMLElementTagNameMap {
    'md-to-html': HTMLMdToHtmlElement
  }

  interface ElementTagNameMap {
    'md-to-html': HTMLMdToHtmlElement;
  }


}
export declare function defineCustomElements(window: any): void;