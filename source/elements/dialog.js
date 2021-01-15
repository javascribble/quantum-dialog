import html from '../templates/dialog.js';

export class Dialog extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-dialog', Dialog);