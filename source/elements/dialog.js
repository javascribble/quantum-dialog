import { Component, template } from '../../references/quantum.js';
import html from '../templates/dialog.js';

export class Dialog extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-dialog', Dialog);