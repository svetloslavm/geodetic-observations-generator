/**
 * Initialize the application when DOM is ready
 */
function initApp() {
  const inputElement = document.querySelector('.input-content');
  const outputElement = document.querySelector('.output-content');
  const submitButton = document.querySelector('.submit-button');

  /**
   * Handle the generate button click
   */
  function handleGenerateClick() {
    const rawInput = inputElement.value;
    const points = parseInput(rawInput);
    const result = generateObservations(points);
    outputElement.value = result;
  }

  submitButton.addEventListener('click', handleGenerateClick, false);
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
