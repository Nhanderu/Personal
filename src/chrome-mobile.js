/* global chrome */

if (typeof chrome !== 'undefined' && chrome) {
  document.querySelector('body').classList.add('webkit-mobile-full-height')
  document.querySelector('.wrapper').classList.add('webkit-mobile-full-height')
  document.querySelector('#modal').classList.add('webkit-mobile-full-height')
  document.querySelector('#modal-background').classList.add('webkit-mobile-full-height')
}
