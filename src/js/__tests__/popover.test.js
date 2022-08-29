/**
 * @jest-environment jsdom
 */
import Popover from '../popover';

/*Реализация теста события была подсмотренна на 
https://stackoverflow.com/questions/67605697/jest-mock-addeventlistener-dom-content-loaded-for-tests-inside-this-check  */

// const jsdom = require('jsdom');
// const {JSDOM} = jsdom;
// const {assert} = require('chai');

// describe('popover.js', function() {
//   describe('#Popover.onClick()', function() {
//     let dom;
//     beforeEach(async function() {
//       dom = await JSDOM.fromFile('./js/test-data/jsdom-test-page.html', {
//         resources: 'usable',
//         runScripts: 'dangerously'
//       });
//       await new Promise((resolve) => dom.window.addEventListener('load', resolve));
//     });
//     it('Popup message should render', () => {
//       const popUp = new Popover('Message from host', 'conSystem will reboot in 5 sec...tent');
//       popUp.onClick();
//       const received = dom.window.document.createElement('div');
//       received.classList.add('popup');
//       received.style = "margin-top: -146px; margin-left: -6.5px;";
//       received.innerHTML = `
//       <h3 class="popoverTitle">Message from host</h3>
//       <div class="popoverContent">System will reboot in 5 sec...</div> 
//       `;
//       const button = document.querySelector('.btn');
//       expect(received.innerHTML).toEqual(Popover.markup);
//     });
//   });
// });

/* Ниже попытка протестировать рендеринг подсказки в лоб, который и сообщает о том, что const button = document.querySelector('.btn') неопределен*/

test('Popup message should render', () => {
  const popUp = new Popover('Message from host', 'System will reboot in 5 sec...');
  popUp.onClick();
  const received = document.createElement('div');
  received.classList.add('popup');
  received.style = 'margin-top: -146px; margin-left: -6.5px;';
  received.innerHTML = `
  <h3 class="popoverTitle">Message from host</h3>
  <div class="popoverContent">System will reboot in 5 sec...</div> 
  `;
  const button = document.querySelector('.btn');
  expect(received.innerHTML).toEqual(Popover.markup());
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
