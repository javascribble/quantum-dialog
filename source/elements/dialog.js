import html from '../templates/dialog.js';

const { Component, template, define } = quantum;

export class Dialog extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-dialog', Dialog);