// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpInput extends LitElement {

  static get properties() {
    return { 
      name: { type: String },
      label: { type: String },
      value: { type: String },
      type: { type: String },
      style: { type: String },
      id: { type: String },
      pattern: { type: String },
      textarea: { type: Boolean },
      autocomplete: { type: Boolean },
      iconleft: { type: String },
      iconRight: { type: String },
      iconclose: { type: String }
    };
  }

  constructor() {
    super();
  }

  // Remove Shadow Dom
  createRenderRoot() {
    return this;
  }

  returnBaseContainerClass() {
    let str = `vp-input-container`;
    if (this.type === 'textarea') str += ` textarea`;
    return str;
  }

  returnClass() {
    let str = '';
    if (this.iconleft) {
      str += 'padding-left: 30px; ';
    }
    if (this.iconClose) {
      str += 'padding-right: 30px; '
    }
    if (this.color) {
      str += `color: ${this.color}; `
    }
    str = `padding: 0; ${str}`
    return str;
  }

  checkLabelStyles() {
    let str = '';
    if (this.iconleft) {
      str += `left: 40px; `
    }
    if (this.background) {
      str += `background: ${this.background}; `;
    }
    if (this.color) {
      str += `color: ${this.color}; `;
    }
    if (this.value && this.value !== '') {
      setTimeout(function() {
        // this.oneTimeValueSet();
      });
    }
    return str;
  }

  showHideClearButton(e) {
    if (!this.iconclose) return false;
    let el = e.target;
    let container = el.parentNode;
    if (el.value === '') {
      container.querySelector('.v-icon-close-circle').style.display = 'none';
    } else {
      container.querySelector('.v-icon-close-circle').style.display = 'block';
    }
  }

  hidePlaceHolder(e) {
    const el = e.target;
    const label = el.previousElementSibling;
    const container = label.parentNode;
    console.log(container)
    label.classList.add('active');
    container.classList.add('dark');
  }

  showPlaceHolder(e) {
    if (e.target.value !== '') return false;
    const el = e.target;
    const label = el.previousElementSibling;
    const container = label.parentNode;
    label.classList.remove('active');
    container.classList.remove('dark');
  }

  focusOnInput(e) {
    const container = e.target.parentNode;
    const type = (this.type === 'textarea') ? 'textarea' : 'input';
    container.querySelector(type).focus({
      target: e.target
    });
  }

  clearField(e) {
    const el = e.target;
    const container = el.parentNode;
    const label = container.querySelector('label');
    container.querySelector('input').value = '';
    label.classList.remove('active');
    container.classList.remove('dark');
    container.querySelector('.v-icon-close-circle').style.display = 'none';
  }

  render() {

    this.pattern = (this.pattern) ? this.pattern : '';
    this.value = (this.value) ? this.value : '';
    this.id = (this.id) ? this.id : '';

    return html`
    ${(this.type === 'textarea') ?
      html`
        <div class="${ this.returnBaseContainerClass() }">
          <i data-icontype="left" class="${ this.iconleft }"></i>
          <i class="v-icon-close-circle" @click="${ this.clearField }"></i>
          <label style="${ this.checkLabelStyles() }" @click="${ this.focusOnInput }">${ this.label }</label>
          <textarea
            autocomplete="off"
            id="${ this.id }"
            style="${ this.returnClass() }"
            type="${ this.type }"
            name="${ this.name }"
            pattern="${ this.pattern }"
            @keyup="${ this.showHideClearButton }"
            @focus="${ this.hidePlaceHolder }"
            @blur="${ this.showPlaceHolder }"
          >${ this.value }</textarea>
        </div>
        
      ` 
    :
      html`
      <div class="${ this.returnBaseContainerClass() }">
        <i data-icontype="left" class="${ this.iconleft }"></i>
        <i class="v-icon-close-circle" @click="${ this.clearField }"></i>
        <label style="${ this.checkLabelStyles() }" @click="${ this.focusOnInput }">${ this.label }</label>
        <input
          autocomplete="off"
          id="${ this.id }"
          style="${ this.returnClass() }"
          type="${ this.type }"
          name="${ this.name }"
          value="${ this.value }"
          pattern="${ this.pattern }"
          @keyup="${ this.showHideClearButton }"
          @focus="${ this.hidePlaceHolder }"
          @blur="${ this.showPlaceHolder }"
        >
      </div>
      `
    }
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-input', VpInput);