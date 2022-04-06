/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready => {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 
  }
]

// RENDER TWEET
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $("#wrapper-tweet").prepend(createTweetElement(tweet));
  }
};

// CREATE TWEET ELEMENT
const createTweetElement = function(tweet) {
  const newTweet = $(
    `<article class="tweet">
    <img src="${tweet.user.avatars}">
    <h3>${tweet.user.name}</h3>
    <h3 class="handle">${tweet.user.handle}</h3>
    <p>${tweet.content.text}</p>
      <footer>
      Fake date: ${tweet.created_at}
      ${moment(tweet.created_at).fromNow()}
        <div class="footer-icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i> <i class="fa fa-heart"></i> </div>
      </footer>
  </article>`
  );
  return newTweet;
};


const $tweet = createTweetElement(tweetData);

// test
console.log($tweet); 
$('#wrapper-tweet').append($tweet);


renderTweets(data);

})


