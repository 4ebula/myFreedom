let var1 = false;
document.querySelector('.button-container').addEventListener('click', (event) => {
  const target = event.target;
  if (target.className !== 'button-container') {
    target.classList.toggle('active');
  }
});
