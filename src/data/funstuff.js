const funstuff = {
  title: "Fun Stuff",
  items: [
    {
      name: "Spongebob Dialogue",
      image:
        process.env.PUBLIC_URL+"/spongebobdialogue.jpeg",
      alt: "spongebob dialogue",
      description: "spongebob episode transcripts",
      url: "https://spongebob.fandom.com/wiki/List_of_transcripts"
    },

    {
      name: "Lyrics.com",
      image:
        process.env.PUBLIC_URL+"/lyricsdotcom.jpeg",
      alt: "song lyrics",
      description: "song lyrics website",
      url: "https://www.lyrics.com/"
    },

    {
      name: "Anime Lyrics",
      image:
       process.env.PUBLIC_URL+ "/anime-lyrics.jpeg",
      alt: "anime lyrics",
      description: "English and Japanese anime song lyrics",
      url: "https://www.animelyrics.com/"
    },

    {
      name: "Pokestop",
      image:
        process.env.PUBLIC_URL+"/pokestop-io.jpeg",
      alt: "pokestop",
      description: "English information about Pokemon",
      url: "https://pokestop.io/"
    }
  ]
};

export default funstuff;
