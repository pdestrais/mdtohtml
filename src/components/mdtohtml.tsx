import { Component, Prop } from '@stencil/core';
import * as marked_ from 'marked';

// workaround as standard import method give an error "Cannot call a namespace ('marked')""
const marked = marked_;

@Component({
  tag: 'md-to-html',
  styleUrl: 'mdtohtml.css',
  shadow: true
})
export class MarkdownToHTMLComponent {
  @Prop() content: string;

  convertToHTML(): string {
    console.log("convertingmdtohtml")
    return (
      marked.default(this.content)
    );
  }

  render() {
    return <div innerHTML={this.convertToHTML()}/>;
  }
}

