import { Component } from '../../references/quantum.js';

export class Dialog extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-dialog');

    static attributes = [];
}

customElements.define('quantum-dialog', Dialog);