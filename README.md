# FoodPrint

## Inspiration

We take a lot of things for granted in our daily lives. For example, eating (almost) anything we can buy. When was the last time you thought about the carbon footprint of baking banana bread, and the impact that would have 10 years down the road? As a generation growing up on the dangers of climate change, we have to consider the environmental impacts of our actions, so that we can make Earth a better place to live for generations to come.

While Instagram campaigns might be temporary, we want to create a ecological-friendly initiative that would have a lasting impact. Something easy-to-use, and accessible for people of all backgrounds. We present FoodPrint, an app that incentivizes everyone to track and improve their carbon footprint. 

## What it Does

We have developed a mobile application to help consumers live a greener and more environmentally sustainable life, by real-time data on the carbon footprint of foods they eat. We deployed an image detection API which uses neural networks to recognize foods and queries foods to get how much carbon dioxide was emitted for each portion of that food. 

Users can quickly snap pictures and save the results in their carbon history, which they can view to see how their environmental impact over has changed over time. We hope that through FoodPrint, together we can start to make more sustainable choices, and do our part in saving the world.

## How we built it

**Figma** - Initial UI/UX design

**React-native** - Android/IOS app

**Google Vision API** - Object recognition 

**Firebase** - Database 

**Flask** - API endpoint to serve results


## Challenges we ran into

**Machine learning** - Detecting multiple items in an image with good accuracy

**Flask deploy** - Issues with deploying Flask app over Heroku

**API endpoints** - Recieving HTTP response from Flask endpoint


## What we learned

**What are APIs and how do you work with them** - An invaluable skill for any programmer! We ran into a bunch of issues connecting to our API so we learned a lot by the time we finally got a successful response to our app.

**Different frameworks** - For some of us it was our first hackathon, and so it was cool to get exposed to so many different tools.

**Image recognition issues** - With images, there's no easy way to check the portion size of an image without AI and computer vision. Ideally, we'd be able to estimate how big of a portion of food is on each person's plate. We had to use NLTK instead and did some research to guesstimate rough portion sizes. 

## What's next for Foodprint

**Reward System** - Partnering with sponsors to provide users with in-kind rewards or free products for keeping carbon footprint below a certain threshold.


## Setup

0. Ensure you have `git`, `node`, `npm`, and `expo-cli` installed
1. Start up your emulator (using Android studio)
2. `git clone https://github.com/kajoban/STREAMhacks2020.git`
3. `cd client`
4. `npm install` to install dependencies 
4. `expo start` (Metro Bundler should open on `localhost:19001`)
5. `a` to open app on Android emulator (App should open on Emulator)
6. App will hot reload on code changes

## Branching

1. `git branch` to view all (your) branches
2. `git checkout -b my-branch-name` to make your own branch
3. `git add *`, `git commit -m "some message"`, and `git push` to push your branch changes to repo
4. Can make a pull request to merge with `master` on GitHub
