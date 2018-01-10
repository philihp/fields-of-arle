# Fields of Arle on boardgame.io

![](https://circleci.com/gh/philihp/fields-of-arle.svg?style=shield&circle-token=:circle-token)

This is an implementation of Fields of Arle to play online. It takes the following approaches:

* State schema should be similar to the physical board.

## Player Color Enumerations

    Red = 0
    Yellow = 1

## Phase Progression

    Months are Phases in this game.
      - Don't allow month to go forward if the player still has a worker on the spot
