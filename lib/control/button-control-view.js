'use babel'

import { CompositeDisposable } from 'event-kit';

class ButtonControlView extends HTMLElement {
  initialize(button) {
    this.button = button;
    this.classList.add('entry');
    this.item = document.createElement('button');
    this.dataset.type = this.button.type;
    this.item.classList.add('inline-block', 'btn');
    this.item.textContent = `${this.button.title}`;
    return this.appendChild(this.item);
  }

  activate() {
    return this.item.classList.add('btn-success');
  }

  deactivate() {
    return this.item.classList.remove('btn-success');
  }

  toggle() {
    if (this.item.classList.contains('btn-success')) {
      return this.deactivate();
    } else {
      return this.activate();
    }
  }
}

export default document.registerElement('smartcsv-control-button', {prototype: ButtonControlView.prototype, extends: 'span'});