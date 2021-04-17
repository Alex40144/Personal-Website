---
title: 'A quick start guide to making games with pygame'
date: '2021-04-18'
---

# Overview
Pygame and Python make the perfect pair when making games. Python has the simple syntax, and Pygame brings the libraries to make the process of game building simple. From graphics to collisions, Pygame has everything.

Installing

```
python -m pip install pygame
```

You can install Pygame with pip, it's just like any other module in python.

# The Basics
## Initialising

```py
import pygame, sys, random
```

Here we Import all the modules we will need into python. Python will then load these modules, allowing us to call functions from those modules.
I have added sys as that will be used to handle the closing of the window cleanly, and random is just useful.

```py
pygame.init()
```

This calls the init function in pygame, pygame will do all the things it needs to do.

```py
screen = pygame.display.set_mode((1000,500))
pygame.display.set_caption("Game")
```



These two lines of code will create our window for the game to run in.
1000px horizontally by 500px vertically will be our resolution, and Game will be the name of the window.

## Game Loop

```py
while True:
    #quit
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
```
This is the block of code which the game events will happen,

Conclusion