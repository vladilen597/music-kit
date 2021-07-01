import signalFireSong from "../../resourses/DevilSoldHisSoul/SignalFire.mp3";
import signalFireThumbnail from "../../resourses/DevilSoldHisSoul/signalFireThumb.jpg";
import whatYouNeed from "../../resourses/HappyHour/WhatYouNeed.mp3";
import whatYouNeedThumbnail from "../../resourses/HappyHour/WhatYouNeedThumb.jpg";
import sleep from "../../resourses/RoyalBlood/sleep.mp3";
import sleepThumb from "../../resourses/RoyalBlood/sleepThumb.jpg";

const songs = [
  {
    id: 1,
    songName: "Signal Fire",
    songAuthor: "Devil Sold His Soul",
    songSrc: signalFireSong,
    albumCover: signalFireThumbnail,
  },
  {
    id: 2,
    songName: "What You Need",
    songAuthor: "Happy Hour",
    songSrc: whatYouNeed,
    albumCover: whatYouNeedThumbnail,
  },
  {
    id: 3,
    songName: "Sleep",
    songAuthor: "Royal Blood",
    songSrc: sleep,
    albumCover: sleepThumb,
  },
];

export default songs;
