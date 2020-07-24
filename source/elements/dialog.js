import html from '../templates/dialog.js';

export class Dialog extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-dialog', Dialog);