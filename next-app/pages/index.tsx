import type { NextPage } from 'next'
import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";

type Tweet = {
  id: string;
  text: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  isDeleted: boolean;
  authorId: string;
  retweetTargetId: string;
  replyTargetId: string;
}


const Home: NextPage = () => {
  const [tweets, setTweets] = useState<Array<Tweet>>([])
  const fetchData = async () => {
    const { data } = await client.query({
      query: gql`
        query FetchTweetsAll {
  fetchTweetsAll {
    id
    text
    favoriteCount
    replyCount
    retweetCount
    isDeleted
    authorId
    retweetTargetId
    replyTargetId
  }
}
      `,
    });
    console.log(data);
    setTweets(data.fetchTweetsAll);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className={styles.container}>
      {tweets.map((tweet) => {
        return(
          <div id={tweet.id}>
            {tweet.text}
            </div>
        )
      })}
    </div>
  )
}

export default Home
