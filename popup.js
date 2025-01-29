document.getElementById('removeButton').addEventListener('click', () => {
  // Get the current active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    // Execute the script on the active tab
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: removeElementsAndSetOverflow
    });
  });
});

function removeElementsAndSetOverflow() {
  // Remove elements with class 'tp-model' and 'tp-backdrop'
  document.querySelectorAll('.tp-modal, .tp-backdrop').forEach(element => {
    element.remove();
  });
  // Set body overflow to 'scroll' with !important
  document.body.style.setProperty('overflow', 'scroll', 'important');
}