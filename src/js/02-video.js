import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (sec) {
      localStorage.setItem('current-time', JSON.stringify(sec));
    });
  }, 1000),
);

const toStart = JSON.parse(localStorage.getItem('current-time')) || 0;
player.setCurrentTime(toStart);
