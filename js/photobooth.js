const video = document.getElementById('video');
const canvas = document.getElementById('stripCanvas');
const snapBtn = document.getElementById('snap');
const countdownEl = document.getElementById('countdown');
const shutter = document.getElementById('shutter');
const downloadLink = document.getElementById('download');
const previewImg = document.getElementById('preview');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Camera not accessible:', err);
  });

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function showCountdown(number) {
  countdownEl.textContent = number;
  await delay(1000);
}

function flashShutter() {
  shutter.classList.add('flash');
  setTimeout(() => {
    shutter.classList.remove('flash');
  }, 150);
}

async function takePhotoStrip() {
  const ctx = canvas.getContext('2d');
  const width = video.videoWidth;
  const height = video.videoHeight;

  if (!width || !height) return alert("Camera not ready yet!");

  canvas.width = width;
  canvas.height = height * 4;

  for (let i = 0; i < 4; i++) {
    await showCountdown(3);
    await showCountdown(2);
    await showCountdown(1);
    countdownEl.textContent = '';
    flashShutter();

    ctx.drawImage(video, 0, i * height, width, height);
    ctx.fillStyle = 'white';
    ctx.font = '28px "Mea Culpa", cursive';

    await delay(500); 
  }

  const dataURL = canvas.toDataURL('image/png');
  previewImg.src = dataURL;
  downloadLink.href = dataURL;
  
  document.querySelector('.preview-wrapper').style.display = 'block';

}

snapBtn.addEventListener('click', takePhotoStrip);
