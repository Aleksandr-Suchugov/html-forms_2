export default class Popover {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this._flag = false;
  }

  markup() {
    return `
    <h3 class="popoverTitle">${this.title}</h3>
    <div class="popoverContent">${this.content}</div> 
    `;
  }

  onClick(seconds) {
    const container = document.querySelector('.container-btn');
    const button = document.querySelector('.btn');
    
    button.addEventListener('click', () => {
      if (this._flag) return;
      this._flag = true;
      const popUp = document.createElement('div');
      popUp.classList.add('popup');
      popUp.setAttribute('data-id', 'popup');
      popUp.innerHTML = this.markup();
      container.appendChild(popUp);
      popUp.style.marginTop = `${-button.offsetHeight - popUp.offsetHeight - 15}px`;
      popUp.style.marginLeft = `${0.5 * (button.offsetWidth - popUp.offsetWidth)}px`;

      setTimeout(() => {
        button.parentElement.removeChild(popUp);
        this._flag = false;
      }, seconds);
    });
  }
}
