
function saveName() {
    var username = document.getElementById('username').value;
    localStorage.setItem('savedUsername', username); 
    displaySavedName();
  }
  
  function displaySavedName() {
    var savedUsername = localStorage.getItem('savedUsername');
    var displayNameElement = document.getElementById('display-name');
    displayNameElement.textContent = savedUsername; 
    displayNameElement.className = "name"
    
  }

  

  window.onload = function() {
    if (localStorage.getItem('savedUsername') !== null) {
      displaySavedName();
    }
  }
  