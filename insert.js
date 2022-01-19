/* eslint-disable no-undef */
var videoData = window.__INITIAL_STATE__?.videoData;
console.log('get videoData', videoData);
var count = 0;

var checkAndSendData = function() {
  if (!videoData) {
    setTimeout(() => {
      if (count >= 10) {
        return;
      }
      count++;
      videoData = window.__INITIAL_STATE__?.videoData;
      checkAndSendData();
    }, 1000);
  } else {
    window.postMessage({
      type: 'sendVideoDataFromInsert',
      videoData,
      cookie: document.cookie
    }, '*');
  }
}

checkAndSendData();
