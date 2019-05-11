import React from 'react'

const TweetList = (props) => {
  if (props.loading) {
    return <div>We're loading... </div>
  }
  return props.tweets.map(tweet => (
    <div key={`tweet_${tweet.id}`} className="tweet-list_tweet--container" >
      <h5 className="tweet-list_tweet--author">{tweet.author}</h5>
      <span className="tweet-list_tweet--message">{tweet.message}</span>
    </div>
  ))
}

export default TweetList