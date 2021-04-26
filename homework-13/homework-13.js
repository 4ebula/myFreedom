document.body.addEventListener('click', (event) => {
  if (event.target.matches('li')) {
    const targerValue = event.target.textContent;
    const targetDropdown = event.target.closest('.dropdown');
    targetDropdown.classList.toggle('active');
    targetDropdown.querySelector('input').value = targerValue;
  }
  if (event.target.matches('p')) {
    event.target.closest('.dropdown').classList.toggle('active');
  }
});