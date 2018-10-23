# Fields of Arle on boardgame.io

[![Depfu](https://badges.depfu.com/badges/ede82a33ca142bfe99428710696ad9b3/overview.svg)](https://depfu.com/github/philihp/fields-of-arle?project_id=5793)

This is an implementation of [Fields of Arle](https://boardgamegeek.com/boardgame/159675/fields-arle) to play online. It takes the following approaches:

* State shape should be similar to the physical board. The `G` schema should be intuitive
  * e.g. we could keep a count of each animal and have the view figure out where they live on the farm, however
    instead keep the location of each animal on the land/tableau.
  * Simple, fungible objects with infinite supply (such as a timber), which will not ever have anything resting on
    top of them should be stored as a string. Inventory is represented as `['clay','clay','clay']`, rather than
    `{clay: 3}`.
* Derived data are handled by React views.
  * Which land tiles are flooded is calculated on the client.
  
# Setting Up

* Get node 8.13
* Get npm 6.4.1
* Checkout the repo and install with `npm install`
* Run the site with `npm run start`

# Warranties

This is mostly an academic passion project. As such, it has turned into an exercise for me to learn how babel works, or how
eslint works, or how functional programming works. As such, I make no guarantees for code quality. Always be learning.

# Timelines

I have resolved to make a commit a day on this project. We'll build something cool someday.

# Bugs & Contributing

If you find a bug, please open a Github issue or better yet a PR. My email should be in the git logs, if you'd like to
contact me.
