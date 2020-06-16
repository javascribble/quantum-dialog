import { Quantum, define } from '../../references/quantum.js';
import { dialog } from '../templates/dialog.js';

export class Dialog extends Quantum {
    constructor() {
        super(dialog);
    }
}

define(Dialog);