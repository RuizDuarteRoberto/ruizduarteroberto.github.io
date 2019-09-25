// Variables
const tweetList = document.getElementById("tweet-list");

// Event listeners
eventListeners();

function eventListeners() {
  // Form submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  // remove tweet from the list
  tweetList.addEventListener("click", removeTweet);

  // Document
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}

// Functions
function newTweet(e) {
  e.preventDefault();

  // Read the textArea value
  const tweet = document.getElementById("tweet").value;

  // Create the remove button
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  // Create an <li> element
  const li = document.createElement("li");
  li.textContent = tweet;

  // Add to the list
  tweetList.appendChild(li);

  // Add remove button to each tweet
  li.appendChild(removeBtn);

  // add to the list
  tweetList.appendChild(li);

  // Add to local storage
  addTweetLocalStorage(tweet);

  // Print an alert

  this.reset();
}

// removes the tweets from the Dom
function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }

  // remove from storage
  removeTweetLocalStorage(e.target.parentElement.textContent);
}

// adds the tweets into the local storage
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsFromStorage();
  // add tweet into the array
  tweets.push(tweet);
  // convert array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromStorage() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");
  // Get the values, if null is returned then we create an empty array
  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

// Prints Local Storage Tweets on Load
function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();

  // Loop through storage and then print the values
  tweets.forEach(function(tweet) {
    // Create the remove button
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    // Create an <li> element
    const li = document.createElement("li");
    li.textContent = tweet;

    // Add to the list
    tweetList.appendChild(li);

    // Add remove button to each tweet
    li.appendChild(removeBtn);

    // add to the list
    tweetList.appendChild(li);
  });
}

// removes the tweet from local storage

function removeTweetLocalStorage(tweet) {
  // get tweets from storage
  let tweets = getTweetsFromStorage();
  console.log(tweets);
  // remove the x from the tweet
  const tweetDelete = tweet.substring(0, tweet.length - 1);

  //Loop through the tweets and remove the tweet that is equal
  tweets.forEach(function(tweetLS, index) {
    if (tweetDelete === tweetLS) {
      tweets.splice(index, 1);
    }
  });
  // Save the data
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
