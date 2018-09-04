let inputText = document.getElementById('colorCode');
let changeColor = document.getElementById('changeColor');
let submitButton = document.getElementById('submit');

inputText.onkeyup = function() {
  changeColor.style.backgroundColor = inputText.value;
  changeColor.setAttribute('value', inputText.value);
};

submitButton.onclick = function(element) {
  let color = changeColor.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
