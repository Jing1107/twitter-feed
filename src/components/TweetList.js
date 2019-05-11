import React from 'react'

const TweetList = (props) => {
  if (props.loading) {
    return <div>We're loading... </div>
  }
  return props.tweets.map(tweet => (
    <div key={`tweet_${tweet.id}`} className="tweet-list__tweet--container fadein" >
      <h5 className="tweet-list__tweet--author">{tweet.author}</h5>
      <span className="tweet-list__tweet--messagee">{tweet.message}</span>
    </div>
  ))
}

export default TweetList