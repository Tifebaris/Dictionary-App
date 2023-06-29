const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');


btn.addEventListener('click', () => {
  let inp = document.getElementById('input').value;
  fetch(`${url}${inp}`)
    .then((response) => response.json())
    .then((data) => {
      let meanings = data[0].meanings;
      let html = '';
      
      meanings.forEach((meaning) => {
        html += `
        <div class="result">
          <div class="word">
            <h3>${inp}</h3>
          </div>
          <div class="details">
            <p>${meaning.partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
          </div>
          <p class="meaning">
            ${meaning.definitions[0].definition}
          </p>`;
        
        if (meaning.definitions[0].example) {
          html += `
            <p class="example">
              Example: ${meaning.definitions[0].example}
            </p>
            </div>
            `;
        }
      });
      
      result.innerHTML = html;
    });
});





  