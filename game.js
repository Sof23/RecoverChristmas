const dino = document.getElementById('dino');

document.addEventListener('keydown', jump);

function jump(event) {
  if (event.code === 'Space') {
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 500);
  }
}
