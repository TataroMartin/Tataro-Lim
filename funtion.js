document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value.trim();
    if (searchTerm) {
      var searchURL = 'service.html'; 
      if (searchTerm === 'Culinary') {
        searchURL = 'Culinary.html';
      } if (searchTerm === 'Library') {
        searchURL = 'Library.html';
      } if (searchTerm === 'events') {
        searchURL = 'events.html';
      } else if (searchTerm === 'BSIT') {
        searchURL = 'BSIT.html'
      }
      window.location.href = searchURL;
    }
  });