/**
 * @jest-environment jsdom
 */
import Popover from '../popover';

test('Popup message should render', () => {
  const popUp = new Popover('Message from host', 'System will reboot in 5 sec...');
  const received = document.createElement('div');
  received.classList.add('popup');
  received.style = 'margin-top: -146px; margin-left: -6.5px;';
  received.innerHTML = `
    <h3 class="popoverTitle">Message from host</h3>
    <div class="popoverContent">System will reboot in 5 sec...</div>
    `;
  expect(received.innerHTML).toEqual(popUp.markup());
});

test('Widget is created', () => {
  const widget = new Popover('title', 'content');
  const expected = {
    title: 'title',
    content: 'content',
    _flag: false,
  };
  expect(widget).toEqual(expected);
});
