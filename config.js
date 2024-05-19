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
	bentoLayout: "bento", // 'bento', 'lists', 'buttons'

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
			link: "https://flix.jswdev.nl",
		},
		{
			id: "3",
			name: "AniWave",
			icon: "brush",
			link: "https://aniwave.to/",
		},
		{
			id: "4",
			name: "Spotify",
			icon: "music",
			link: "https://open.spotify.com",
		},
		// {
		// 	id: "5",
		// 	name: "Your eyes only.",
		// 	icon: "file-lock-2",
		// 	link: "https://xvideos.com",
		// },
		// {
		// 	id: "6",
		// 	name: "Your mind only.",
		// 	icon: "book-lock",
		// 	link: "https://literotica.com/",
		// },

	],


	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
	  {
	    icon: 'tv',
	    id: '1',
	    links: [
	      {
	        name: 'Movie-web',
	        link: 'https://movie-web.app',
	      },
	      {
	        name: 'F-Movies',
	        link: 'https://fmoviesz.to',
	      },
	      {
	        name: 'Sflix',
	        link: 'https://sflix.to',
	      },
	      {
	        name: 'YewTube',
	        link: 'https://yewtu.be',
	      },
	    ],
	  },
	  {
	    icon: 'film',
	    id: '2',
	    links: [
	      {
	        name: 'Netflix',
	        link: 'https://netflix.com',
	      },
	      {
	        name: 'Disney+',
	        link: 'https://disneyplus.com',
	      },
	      {
	        name: 'HBO Max',
	        link: 'https://hbomax.com',
	      },
	      {
	        name: 'Youtube',
	        link: 'https://youtube.com',
	      },
	    ],
	  },
	],
};
