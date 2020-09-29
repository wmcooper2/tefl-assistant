const games = {
  title: "Games",
  items: [
    {
      name: "Color Changing Tiles",
      image:
        process.env.PUBLIC_URL+"/color-changing-tiles.jpeg",
      alt: "color changing tiles",
      description:
        "A generic tool used to keep track of any game that you make up.",
      url: "https://wmcooper2.com/color-changing-tiles",
    },
    {
      name: "Matching Game",
      image:
        process.env.PUBLIC_URL+"/match-game.jpg",
      alt: "matching game",
      description: "Pair matching game for vocabulary practice.",
      url: "https://wmcooper2.com/match-game",
    },
    {
      name: "Hiding Spot Game",
      image:
        process.env.PUBLIC_URL+"/hiding-spot-game.jpeg",
      alt: "hiding spot game",
      description: "Find the hiding spot game for teaching 'Where...?'",
      url: "https://wmcooper2.com/hiding-spot-game",
    },
  ],
};

export default games;
