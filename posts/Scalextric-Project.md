---
title: 'Connecting Scalextric to the internet'
date: '2021-04-19'
---

This project came to life during the lockdown adventure of 2020. I wanted to race my friends at Scalextric, but they needed to be in the same room as me to do that. So I devised a plan to connect the cars to the internet.


The first part of the plan was to be able to control the car from the raspberry pi. My first idea to do this was to wire into the controller and pretend to be the controller. But upon opening the controller there was a linear potentiometer to contend with. I probably could have worked out how to use a digital potentiometer or analogue output, but I went for the more fun way of connecting a servo to the linear track of the resistor so I could move it with the Pi.

![](/images/scalextric-controller.jpg#200x400)
![](/images/controller-moving.gif#200x400) 

The next step was to be able to control it from a website. I began by making some sliders so the player can give the throttle a value from 0% to 100%. Then using some PHP I saved that value to a text file on my server. Now when I moved the slider I could see the text file changing.

![](/images/sliders.png) 

Now I needed to get this value into the Raspberry Pi the first method I tried was using sockets between my home server and the Pi. This means that the server is constantly sending the value to the Pi. Then with this value, the servo can be moved. This solution worked well, minimal input lag (approx 0.5s) but I was having issues when turning on the system as I would have to restart the server script for some reason, this was probably likely to the connection not being closed cleanly.

This lead onto the next solution which involved using the website to capture the throttle value. With the Pi I made a request to the server for the data.txt file. This would give me a text file with the throttle value in it. This was much simpler than the sockets as it only required a single script to operate and had no issues when restarting. The only downside being that this added about 1 second to the input lag, making the car quite difficult to control. 

I think the next improvement to the latency would to make a socket directly between the player and the Pi, this could mean that data only needs to be sent when the throttle changes, and as soon as it changes.