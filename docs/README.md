---
home: true
heroImage: /images/banner.png

actionText: Get Started →
actionLink: /guide/

features:
  - title: Simplicity
    details: Syntek is extremely easy to use. It keeps features simple and reads like English to make it easy for beginners to get started with programming!

  - title: Configurable
    details: Change language, disable features, add linting rules, test code, move to different environments, and more!

  - title: Assignments
    details: Make interactive assignments, enforce strict rules by disabling features, and expand to new environments like Arduino and Minecraft!

footer: ISC Licensed | Copyright 2019 SebastiaanYN
---

# Syntek

Syntek is an easy to use educational programming language. It is designed to provide a good ground for beginners to start their programming journey through interactive tasks and assignments. Syntek is highly configurable to make it the right fit for all assignments.

## Example

The following code shows an interactive snake assignment. An interactive demo can be found at [syntek.dev](https://syntek.dev/).

```syntek
var direction = 1

function arrowUp() {
  direction = 0
}

function arrowRight() {
  direction = 1
}

function arrowDown() {
  direction = 2
}

function arrowLeft() {
  direction = 3
}

function loop() {
  if direction is 0 {
    moveUp()
  } else if direction is 1 {
    moveRight()
  } else if direction is 2 {
    moveDown()
  } else if direction is 3 {
    moveLeft()
  }
}
```

## Support

[![Patreon](/images/patreon.jpg =400x)](https://www.patreon.com/synteklang)

Support Syntek on [Patreon](https://www.patreon.com/synteklang) for $1/mo or more!
