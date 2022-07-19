// 注意getUserMedia()在各浏览器中的区别
// Opera --> getUserMedia
// Chrome --> webkitGetUserMedia
// Firefox --> mozGetUserMedia
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia

// 只获取video:
var constraints = { audio: false, video: true }
var video = document.querySelector('video')

function successCallback (stream) {
  // Note: make the returned stream available to console for inspection
  window.stream = stream

  if (window.URL) {
    // Chrome浏览器
    video.srcObject = stream
  } else {
    // Firefox和Opera: 可以直接把视频源设置为stream
    video.src = stream
  }
  // 播放
  video.play()
}

function errorCallback (error) {
  console.log('navigator.getUserMedia error: ', error)
}

navigator.getUserMedia(constraints, successCallback, errorCallback)
