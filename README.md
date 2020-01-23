![header](/artwork/header.png)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsebawyrzysk%2Fsupport-dashboard-desktop.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsebawyrzysk%2Fsupport-dashboard-desktop?ref=badge_shield)

# Klinker Apps Support Dashboard

These are the sites and services that I watch throughout the day. If you are a solo developer, you know the struggle of trying to keep up with support. For me, this tool has been indispensable as my work as continued to gain traction. To have an app I can open, that will instantly give access to all of the info I need has been an incredible timesaver. It displays:

* **Email** - an obvious support tool for anyone
* **Slack** - I have created different bots to notify me of reviews, purchases, daily summaries, GitHub interactions, etc
* **Pulse** - 3 pages: reviews, Firebase analytics, and the admin dashboard for the web app
* **Talon** - 2 pages: reviews and Firebase analytics
* **Purchases** - 2 pages: Play Store orders and Google Pay
* **GitHub Notifications**
* **Twitter** - a search for "@KlinkerApps @lukeklinker @TalonAndroid"
* **Google+ Notifications**
* **Cloud Consoles** - 3 pages: Heroku, AWS, and Redis
* **Jenkins**

At it's core, this app just aggregates webpages and makes them easier to access and combine. For example, while the email tab show a fullscreen Gmail view, the Pulse tab opens 3 webpages at once, to display them in a grid.

## Running the App

To build and run the apps locally:

```
// download electron
npm i -g electron

// prepare the installation
$ yarn

// run the app
$ yarn start
```

To package the apps for each platform:

```
$ yarn
$ yarn run build-mac
$ yarn run build-linux
$ yarn run build-windows
```

## Customizing the App

The pages I have set up probably won't be the same as what you need, since they are specific to my needs. These pages are easy to customize. They just run off of a naming convention. For example, to add a "Play Store" page:

1. Add an icon called `play-store.png` to the `/resources/images/` folder.
2. Add the HTML layout to a `play-store.html` file in the `/pages/` folder. I recommend just copying a layout from one of the currently available options. Or, you could make your own. The layout would typically define the `webviews`.
3. Add `play-store` to the `navLinks` array, in the `loader.js` file. It will automatically be added to whatever position you have defined.

The naming will need to be consistent across these three locations.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsebawyrzysk%2Fsupport-dashboard-desktop.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsebawyrzysk%2Fsupport-dashboard-desktop?ref=badge_large)