// 홈 화면 영어 문구. 한국어판은 ko.js — 구조(키)를 둘이 똑같이 맞춘다.
export default {
  eyebrow: 'iOS · Android · Web',
  h1: 'Board game score tracker for your group',
  tagline: 'The score keeper app for board game groups: a sheet for each game, every match saved, and a leaderboard that settles who’s actually best.',
  webLink: 'Or open it in your browser →',
  badgeApple: ['Download on the', 'App Store'],
  badgePlay: ['Get it on', 'Google Play'],

  heroAlts: ['Catan score sheet in YadaRank', 'Group ranking in YadaRank'],

  trust: [
    { num: '17', label: 'games with their own score sheet' },
    { num: 'Elo', label: 'rating built for 3+ players' },
    { num: '3', label: 'platforms: iOS, Android, Web' },
  ],

  problemsTitle: 'Paper score pads don’t remember who won',
  problemsLead: 'Most groups keep score on whatever is nearby, then lose it before the next game night.',
  problems: [
    {
      icon: '🧾',
      title: 'The score pad gets thrown away',
      desc: 'Added up on the back of the rulebook, then recycled with the pizza box.',
    },
    {
      icon: '🤷',
      title: 'Nobody remembers last month',
      desc: 'Who won Catan three weeks ago? Everyone remembers it differently.',
    },
    {
      icon: '⚔️',
      title: 'The argument never ends',
      desc: 'Someone always says they’re the best at Azul. Without a record, nobody can prove it.',
    },
  ],

  featureRows: [
    {
      tag: 'GAME-SPECIFIC SCORE SHEETS',
      title: 'A score sheet built for each game',
      body: 'Settlements, cities, longest road — enter what you see on the table and the totals add themselves up. Playing something not on the list? Build your own sheet with your own scoring categories.',
      src: '/screens/scoresheet.webp',
      alt: 'Catan score sheet in YadaRank with totals and the winner',
    },
    {
      tag: 'SKILL-BASED RANKINGS',
      title: 'A ranking that measures skill, not attendance',
      body: 'Beating a table of strong players moves you more than beating one beginner. Every group gets its own standings.',
      src: '/screens/ranking_list.webp',
      alt: 'Group ranking with podium and Elo scores',
      reversed: true,
    },
    {
      tag: 'COMMUNITIES AND GROUPS',
      title: 'Your club on top, a group for every game',
      body: 'One invite link for the whole club. Catan and Dixit keep separate records instead of blurring into one leaderboard.',
      src: '/screens/lobby.webp',
      alt: 'Community page with a group for each board game',
    },
  ],
  midCta: 'Try it at your next game night',

  // SCORE_SCHEMAS(Board_Game_Front/src/scoreSheets/schemas/index.js)에 등록된 게임과 맞춘다.
  games: [
    'Catan', 'Cascadia', 'Azul', '7 Wonders', 'Splendor', 'Splendor Duel',
    'Rummikub', 'Uno', 'Dixit', 'Stella', 'Takenoko', 'Little Towns',
    'Saboteur', 'Radlands', 'Dice Throne', 'Unmatched', 'Duel for Middle-earth',
  ],
  gamesTitle: (n) => `Score sheets ready for ${n} games`,
  gamesLead: 'Pick the game, fill in the sheet, save the match. Missing a game? Make a custom sheet — category scores, ranks only, or win/draw/loss.',

  stepsTitle: 'How it works',
  stepsLead: 'Three steps, and none of them happen during the game.',
  steps: [
    { title: 'Start a community', desc: 'Your club, meetup, or regular table. Share one invite link.' },
    { title: 'Add a group per game', desc: 'Catan gets a group, Dixit gets a group. Each keeps its own standings.' },
    { title: 'Play, then fill the sheet', desc: 'Enter the numbers from the table, save, and the ranking moves.' },
  ],

  faqTitle: 'Questions groups ask',
  faqs: [
    {
      q: 'How do I get YadaRank?',
      a: 'The app is on the App Store for iOS and on Google Play for Android. You can also open YadaRank in a browser on a phone, tablet, or laptop, and everything signs in to the same account either way. The app is the smoother way to use it at the table, since it sits on your home screen and opens straight into your groups.',
    },
    {
      q: 'Which board games have a score sheet?',
      a: 'Seventeen games have a dedicated score sheet, including Catan, Cascadia, Azul, 7 Wonders, Splendor, Rummikub, Uno, Dixit, Takenoko, Saboteur, Dice Throne, and Unmatched. Each sheet follows that game’s own scoring categories rather than a single generic scoreboard. If the game you play is not on the list, a community admin can build a score sheet for it, and new games get added as groups ask for them.',
    },
    {
      q: 'How is the player ranking calculated?',
      a: 'YadaRank uses an Elo rating, the system chess has used for decades, adapted for games with more than two players. Every finish is scored as a head-to-head result against each player at the table, weighted by how likely that result was, so an upset against stronger players moves you more than an expected win. Your first three games in a group move faster so you find your level quickly.',
    },
    {
      q: 'Why not just count wins?',
      a: 'A win count rewards whoever shows up the most, and it treats a four-player win the same as a two-player one. A rating system weighs who you played against and where you finished, so a player with fewer games can still rank above someone who has played all year.',
    },
    {
      q: 'What is the difference between a community and a group?',
      a: 'A community is the circle of people — your club, your meetup, your regular table — and it holds the invite link everyone joins through. A group sits inside a community and covers one board game. You can run as many groups as you play games, and each keeps its own score sheet and its own ranking. There is also an overall ranking across the whole app if you want to see where you land more broadly.',
    },
    {
      q: 'Can I keep score for card games too?',
      a: 'Yes. Uno, Rummikub, Dixit, and Saboteur have their own score sheets, and they work the same way as the board games: enter each round or final score, save the match, and the group leaderboard updates. Uno adds up round scores toward a target, and Rummikub totals the tiles left in each rack, jokers included.',
    },
    {
      q: 'Does this work for in-person games?',
      a: 'That is exactly what it is built for. YadaRank does not play the game for you and does not need the game to be digital. You play on a real table with real components, then record the result afterwards.',
    },
  ],

  ctaTitle: 'Settle it before the next game night',
  ctaLead: 'Get the app, start a community, and share the invite link. Your group’s results land in one place.',

  footer: { privacy: 'Privacy Policy', delete: 'Delete Account' },
}
