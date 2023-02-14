// znajdź formularz i dodaj nasłuchiwacz zdarzeń "submit"
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // uniemożliwia przesłanie formularza
  const textarea = form.querySelector('textarea'); // znajdź pole textarea
  const tweetText = textarea.value; // pobierz wartość wpisaną przez użytkownika
  const tweetsSection = document.querySelector('.tweets'); // znajdź sekcję, gdzie umieszczamy posty
  const newTweet = createTweetElement(tweetText); // utwórz nowy element artykułu
  tweetsSection.insertBefore(newTweet, tweetsSection.firstChild); // dodaj nowy element na początek sekcji
  form.reset(); // wyczyść pole textarea
});

// funkcja tworząca nowy element artykułu
function createTweetElement(tweetText) {
  const article = document.createElement('article');
  const header = document.createElement('header');
  const img = document.createElement('img');
  img.src = 'avatar3.jpg'; // dodaj domyślny obrazek avatara
  img.alt = 'Avatar';
  const h2 = document.createElement('h2');
  h2.textContent = 'Username';
  const p = document.createElement('p');
  p.textContent = '@handle';
  const content = document.createElement('p');
  content.textContent = tweetText;
  const footer = document.createElement('footer');
  const likeLink = document.createElement('a');
  likeLink.href = '#';
  likeLink.textContent = 'Like';
  const retweetLink = document.createElement('a');
  retweetLink.href = '#';
  retweetLink.textContent = 'Retweet';
  const replyLink = document.createElement('a');
  replyLink.href = '#';
  replyLink.textContent = 'Reply';
  header.appendChild(img);
  header.appendChild(h2);
  header.appendChild(p);
  article.appendChild(header);
  article.appendChild(content);
  footer.appendChild(likeLink);
  footer.appendChild(retweetLink);
  footer.appendChild(replyLink);
  article.appendChild(footer);
  return article;
}