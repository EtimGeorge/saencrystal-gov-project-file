function toggleAnswer(icon) {
  const answer = icon.parentElement.nextElementSibling; /* Get next sibling (answer) */
  if (answer.style.display === 'none' || answer.style.display === '') { /* Check if answer is hidden or not */
    answer.style.display = 'block'; /* Show answer */
    icon.textContent = '-'; /* Change icon to minus */
  } else {
    answer.style.display = 'none'; /* Hide answer */
    icon.textContent = '+'; /* Change icon to plus */
  }
}
