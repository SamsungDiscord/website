---
index: 1
icon: shell
title: Local ADB
description: Guide on using ADB commands on device
author: Ushie
category:
  - Guide
---

## Introduction 

If you're here, you're probably looking of ways to use certain ADB commands without the requirement of having a computer, don't worry as i'll try my best to help you in this matter.

### Why do I need ADB?   
There are plenty of reasons to use ADB, I'll list a few of them here:

* You can disable or uninstall apps that you normally aren't allowed to delete, this allows you to uninstall unwanted bloatware and save precious battery on your device.
* You can use ADB to change system settings like the minimum/maximum refresh rate (be careful), the resolution, animation speeds and so on.
* Ability to grant certain apps even more permissions, like Hex themes and FKM or BBS for detailed battery tracking.
* You have the ability to get information about the device, whether it's the battery cycles, display info or more.

### Getting Started

You only need two things in order to use ADB Locally. In short, you will need:

* Android 11 and up
* [Shizuku](https://github.com/RikkaApps/Shizuku/releases)
* [Termux](https://f-droid.org/en/packages/com.termux/)

### Pairing Process

After installing Shizuku from Github, you will need to enable Developer Options in settings. I'll tell you how to below:

* Go to "Settings", then tap "About device" or "About phone".  
* Tap "Software Informaton", then tap "Build Number" 7 times.  
* Enter your pattern, PIN or password to enable the Developer options menu.  
* The "Developer options" menu will now appear in your Settings menu. 

### Setting up Shizuku:

Open Shizuku and go to "Start via Wireless Debugging > Pairing", you'll receive a notification from Shizuku, go to Settings > Developer Options > Wireless Debugging, turn it on and press "Pair device with pairing code", a 6 digit WiFi pairing code will appear, memorize it and then in the notification Shizuku sent tap "Enter pairing code" and type the 6 digit code (make sure not to close the pairing popup from wireless debugging), you should be paired now, go back to shizuku and tap "Start via Wireless Debugging > Start" and now, you should start setting up Termux, you'll have to repeat this process when you restart your phone

### Setting up Termux:

Now in Shizuku, tap "Use Shizuku in terminal apps" then tap "Export Files" and then from the side menu tap Termux and then press "Use this folder", there should be 2 files in Termux now, Open Termux and write "nano rish", at the end of the 11th line replace "PKG" with "com.termux", then tap CTRL + X, Save buffer and you're good to go!

Now that everything is set up, all you need to do to enter shell mode is go on termux and write "sh rish", now you're free to use the ADB commands you want!
