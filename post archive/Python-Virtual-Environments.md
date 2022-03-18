---
title: 'Creating and Managing Virtual Enviroments in Python'
date: '2021-04-17'
---

# Overview
Python environments are collections of packages to put it simply. You will have one python environment that contains all the packages you have installed. Virtual environments allow you to have multiple differnt environemnts for your project. This allows you to run python 3 and python 2 projects, easily switching between the two. Also, this gives you the ability to have two different versions of the same package, keeping them separate for each project.

# Installing
This couldn't be any simpler, just install VirtualEnv with pip!

```
pip install virtualenvwrapper
```

I am using the wrapper version to ease the process of creating and editing environemnts.

# Managing
There are a few main instructions that you need to learn to use this.

The first is creating a new virtual environment.

```
mkvirtualenv [name]
```

We can also remove virtual environments

```
rmvirtualenv [name]
```

We can show a list of virtual environments

```
lsvirtualenv
```

# Using
To start working in a virtual environment use the following command

```
workon [name]
```

Lastly, to exit out of an environment, use:

```
deactivate
```

# Conclusion
Virtual environemnts are easy to get up and running, and make development across versions much easier.