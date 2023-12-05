// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: "jsw",
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: "Good morning!",
	greetingAfternoon: "Good afternoon,",
	greetingEvening: "Good evening,",
	greetingNight: "Go to Sleep!",

	// Layout
	bentoLayout: "buttons", // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: "57214529446044c57711b87cd7ae05af", // Thanks to https://github.com/JohnFonseca/Bento/blob/master/config.js
	weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: "C", // 'F', 'C'
	language: "en", // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: "52.011578",
	defaultLongitude: "4.357068",

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: "18:30",
	hourDarkThemeInactive: "07:00",

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: "1",
			name: "YouTube",
			icon: "youtube",
			link: "https://youtube.com",
		},

		{
			id: "2",
			name: "Movie-Web",
			icon: "popcorn",
			link: "https://movie-web.app",
		},
		{
			id: "3",
			name: "Spotify",
			icon: "music",
			link: "https://open.spotify.com",
		},
		{
			id: "4",
			name: "AniWave",
			icon: "brush",
			link: "https://aniwave.to/",
		},
		{
			id: "5",
			name: "YewTube",
			icon: "play-square",
			link: "https://yewtu.be/",
		},
		{
			id: "5",
			name: "Your eyes only.",
			icon: "theater",
			link: "https://xvideos.com",
		},
	],

	// secondButtonsContainer: [
	//   {
	//     id: '1',
	//     name: 'Music',
	//     icon: 'headphones',
	//     link: 'https://open.spotify.com',
	//   },
	//   {
	//     id: '2',
	//     name: 'twitter',
	//     icon: 'twitter',
	//     link: 'https://twitter.com/',
	//   },
	//   {
	//     id: '3',
	//     name: 'bot',
	//     icon: 'bot',
	//     link: 'https://discord.com/app',
	//   },
	//   {
	//     id: '4',
	//     name: 'Amazon',
	//     icon: 'shopping-bag',
	//     link: 'https://amazon.com/',
	//   },
	//   {
	//     id: '5',
	//     name: 'Hashnode',
	//     icon: 'pen-tool',
	//     link: 'https://hashnode.com/',
	//   },
	//   {
	//     id: '6',
	//     name: 'Figma',
	//     icon: 'figma',
	//     link: 'https://figma.com/',
	//   },
	// ],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	// firstlistsContainer: [
	//   {
	//     icon: 'music',
	//     id: '1',
	//     links: [
	//       {
	//         name: 'Inspirational',
	//         link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	//       },
	//       {
	//         name: 'Classic',
	//         link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	//       },
	//       {
	//         name: 'Oldies',
	//         link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	//       },
	//       {
	//         name: 'Rock',
	//         link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	//       },
	//     ],
	//   },
	//   {
	//     icon: 'coffee',
	//     id: '2',
	//     links: [
	//       {
	//         name: 'Linkedin',
	//         link: 'https://www.linkedin.com',
	//       },
	//       {
	//         name: 'Dribbble',
	//         link: 'https://www.dribbble.com',
	//       },
	//       {
	//         name: 'Trello',
	//         link: 'https://www.trello.com',
	//       },
	//       {
	//         name: 'Slack',
	//         link: 'https://www.slack.com',
	//       },
	//     ],
	//   },
	// ],

	// // Second Links Container
	// secondListsContainer: [
	//   {
	//     icon: 'binary',
	//     id: '1',
	//     links: [
	//       {
	//         name: 'Spotify',
	//         link: 'https://www.spotify.com',
	//       },
	//       {
	//         name: 'Reddit',
	//         link: 'https://www.reddit.com',
	//       },
	//       {
	//         name: 'Hashnode',
	//         link: 'https://www.hashnode.com',
	//       },
	//       {
	//         name: 'Pocket',
	//         link: 'https://www.pocket.com',
	//       },
	//     ],
	//   },
	//   {
	//     icon: 'github',
	//     id: '2',
	//     links: [
	//       {
	//         name: 'Front',
	//         link: 'https://www.reddit.com/r/Frontend/',
	//       },
	//       {
	//         name: 'Rust',
	//         link: 'https://www.reddit.com/r/rust/',
	//       },
	//       {
	//         name: 'Go',
	//         link: 'https://www.reddit.com/r/golang/',
	//       },
	//       {
	//         name: 'Repos',
	//         link: 'https://github.com/migueravila',
	//       },
	//     ],
	//   },
	// ],
};
