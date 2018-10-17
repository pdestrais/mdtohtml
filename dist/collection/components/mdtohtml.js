import * as marked_ from 'marked';
// workaround as standard import method give an error "Cannot call a namespace ('marked')""
const marked = marked_;
export class MarkdownToHTMLComponent {
    convertToHTML() {
        console.log("convertingmdtohtml");
        return (marked.default(this.content));
    }
    render() {
        return h("div", { innerHTML: this.convertToHTML() });
    }
    static get is() { return "md-to-html"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "content": {
            "type": String,
            "attr": "content"
        }
    }; }
    static get style() { return "/**style-placeholder:md-to-html:**/"; }
}
