---
title: 'An introduction to Tmux'
date: '2021-04-18'
---

# Overview
Ever wanted to start a program and leave it running when you have closed the ssh connection? Well this is your solution.
Tmux is a terminal multiplexer, it lets you switch between terminals and keep them running in the background.

# Installing

```
sudo apt-get install tmux
```

Quite simple so far!

Basic usage
Creating a Terminal session

```
tmux new -s [terminal name]
```

This will create a terminal session called [terminal name]

Show a list of Terminal sessions

```
tmux ls
```

### Could it be any simpler?

Attaching to a Terminal session

```
tmux attach -t [terminal name]
```

This will join the terminal session called [terminal name]

Dettaching from a Terminal session

```
Ctrl-B followed by D
```

This is a funny one. To exit from a session you need to press Ctrl-B and then press D. This will return you back to the local terminal on the device.


# Conclusion
Tmux is a very useful tool, and very simple to get started with.