# app-starter
A journey through time...

## Getting started
1. Clone repo
2. `cd` to root of repo and run `npm install`
3. Naviagte to the `src` folder and open the `index.html` file in a browser

#### 1. How did I get here?
* I created a repo on Github called "app-starter". I initialised it with a `LICENSE` and `README.md`. Then on my machine I did a `git clone` of the repo. I then opened the `README.md` with a text editor and added these lines here. I committed and pushed my changes.
* Every single time I commit I will have reached a milestone. I will have to figure out a way to make this readme better as I go along.

#### 2. Creating `index.html`
* I will add an `index.html` with some basic markup. Done. It has a title and a H1. That's pretty much it. At this stage I can open the file in a browser by navigating to `file:///Users/cornelius/projects/app-starter/index.html`. This path will be different depending on what operating system you run, what your username is and where you store the files and folders. In this case I'm on a Mac and my username is 'cornelius'. I created a folder called "projects" and that is also where I cloned this repo.

#### 3. Adding style and basic JavaScript
* I want the heading in my `index.html` to be blue. I also want to make the console (in the web developer tools from the browser) print "Hello World!". I added a style tag in the head of my HTML. I also went and added a script tag at the bottom of my markup which says hello. When I hit refresh on my browser the colour of the H1 is blue and the console says "Hello World!". Awesome! :P #commitandpushtomaster

#### 4. Github readme shows incorrect numbering
* On Github this readme shows my numbering incorrectly. I will have to look at the markdown style for Github and change this readme accordingly to do the numbering correctly. It's as if it is doing a list and always starting at 1 instead of the numbers I type into the markdown.
* I have now added asterisks below my numbering. Hopefully this will sort the issue out.
* This did not sort the issue. I've now opted to make each "list item" a heading instead. That seems to work.

#### 5. Where is this going?
* Well I want this to be the starting point for every app that I write. Basically I would want the following:
  - Backbone and Marionette
  - Node.js with Express
  - MongoDB
  - Unit tests (probably Jasmine)
  - Browser test runner (Karma)
  - Webpack with or without gulp (depending on what I learn and need)
  - JavaScript linting (ESLint)
  - Sass linting (not sure what exists and what can be used)
  - I want to write ES6 syntax (most probobly will need Babel or something)
  - I want to have component structure rather than views/models/controller
  - I want everything to be highly compressed and optimised
  - Sass, maybe a CSS framework (really don't mind, at this stage vanilla styling will do)
  - I want to host everything online
  - I want automation for deployment (maybe Jenkins)
  - Ideally this repo should be used, I don't want to have to move this repo to Bitbucket for automation
  - I want a clean folder structure, something that is simple to understand and work with

#### 6. What app should I build?
* I want to make an app that is basically an online version of the Android app "Fuelio". Why? Because it seems like a good starting point. I already have data for it from the past years I've been using the app so that's cool. I would be working with something that is actually a real life application that I could use. It would not be much fun to build something as an example app which I don't end up using. At the end of the day I will build the app in this repo. I would most probably have to strip out all the app related stuff to make it a true starter kit. But we'll see where it goes...

#### 7. Splitting out styles and JavaScript
* Up until now my styles and JS have been sitting on the markup file directly. Because this will become unmaintainable I will separate it out. I now have a two more files in my project: `styles.css` and `app.js`. Makes things a bit nicer... On refresh it still works. I had to replace the `<style>` tag in the head with a `<link>` tag. For the script I simply removed my JavaScript code and added a `src` attribute with the file path. For now all file paths are declared relatively which works perfectly.
* PS: If I use absolute paths, e.g. `src="/app.js"` then it complains that the files cannot be found. Makes sense as we're not serving it up directly but rather only browsing the `index.html` file instead of accessing it through a server.

#### 8. I need Sass in my life
* Currently I only have one rule in my `styles.css`, but I don't want to write pure CSS. I want to use Sass from the start. Let's get that going. As far as I know I only need Ruby or something to use Sass.
* Yep, only need Ruby. On Mac's Ruby comes pre-installed. So if you're using another machine make sure to install Ruby. For me, I only need to run `gem install sass` to get Sass. Awesome.
* The Sass gem installation was successful.
* If I type `sass -v` into terminal it spits out "Sass 3.4.21 (Selective Steve)". Looks good to me.
* If I remember correctly I need to run `sass --watch styles.scss:styles.css` for basic functionality.
* Renaming my stylesheet `styles.css` to `styles.scss`.
* Running `sass --watch styles.scss:styles.css` created a folder called `.sass-cache`, a file called `styles.css` and another file `styles.css.map`. If I update my `styles.scss` then the watch triggers and updates these files and the cache directory.
* This is fine for now. However, I don't want to add the `.map` file and the cache directory to the repo.
* I'll create a `.gitignore` file and add the cache directory and the `.map` file so they get excluded.

#### 9. I already don't like the folder structure
* Previously I added Sass and it already made the folder a bit messy :D
* I'll create a folder for the app called `src`.
  * The plan is to do all of my work in that folder. Ultimately there will be more folders like `dist`, `test`, `build` or something like that. The plan is that I'll work in `src` and that the end result of any work I do lands in `dist`. Basically the idea is to only have the `dist` folder contents on the server and everything works perfectly as it should. We'll see about that though as we go along. It might not work out as I have planned right now.
* I'll move all my files there for now. To keep Sass working I would `cd` into the `src` directory and run the `sass --watch styles.scss:styles.css` command from there.
* So when I refresh the browser it fails. I obviously have to change the path, `file:///Users/cornelius/projects/app-starter/src/index.html` does the trick.
* I don't have to amend my `.gitignore` as it knows to exclude the stuff there no matter what the folder structure.

#### 10. Minifying Sass
* To get my stylesheet compressed I simply had to adjust my Sass command to `sass --watch styles.scss:styles.css --style compressed`

#### 11. Minifying (uglifying) JavaScript - Part 1
* First I'll add more JavaScript code.
* Added some console statements and a simple "for" loop.
* I know I can use the online Google Closure compiler to minify the JS. That's what I have used in the past. But I want to do this via the command line, like with the Sass watch command.
* Did some Googling... looks to complicated to get it working via command line. I would have to download one or the other compiler and then manually run a command to minify the JS.
* For now I'll just use https://www.npmjs.com/package/minifier. Not sure how good or bad this one is but it will be the easiest to get going.
* Ok scrap that idea... I will need to install nodejs and npm before I can do that.

#### 12. Installing nodejs and npm
* So I went to https://nodejs.org/en/ and downloaded the v5.x.x version of node. I double clicked and installed.
* Node comes with npm pre-installed. So now I can get that JS minification going. Yay :)

#### 13. Minifying JavaScript - Part 2
* Now that I have node and npm installed I can install "minifier", `node i -g minifier`.
* In `src` I simply ran `minify app.js`. This created a new file `app.min.js`. It looks minified, but I'm not sure if I trust this minification for bigger code bases. For now it's fine.
* I had to amend my `index.html` to point to the new minified JS file.
* Everything still works. Cool.

#### 14. Let's make our app a bit more complex
* At this stage a blue heading and some messages being logged to the console are really not ground-breaking.
* I'll add a favicon and the Fuelio logo.

#### 15. Using a custom font
* I want to use a custom font for my app. Why? Because most apps use some sort of custom font or at the very least they use an icon font file so icons can easily be maintained and styled.
* So I went to Google Fonts to get Montserrat https://www.google.com/fonts#UsePlace:use/Collection:Montserrat. At that URL there is a small download button to the right which allows downloading this free font as a zip. (I only downloaded the regular font.)
* I then went to FontSquirrel http://www.fontsquirrel.com/tools/webfont-generator to generate and download the webfont.
  * I did this by extracting the Google Fonts download and uploading the `Montserrat-Regular.ttf` to FontSquirrel.
* The generated zip contains a lot of files. I will create a folder called `fonts` and put all the font files there. I will also add the CSS for the font-family to my stylesheet.
* I had to adjust the path in the stylesheet to point to the `fonts` folder in order for the font to work.
* Ok awesome. My heading is now in Montserrat.

#### 16. Creating more structure
* Having the `fonts` directory made me want to put my stylesheets, images and JS into their own folders as well. Let's do that.
* Created a folder `images` for all my images, moved images there.
* Created `scripts` for my JS files.
* Created `styles` for my CSS.
* After this move nothing works besides the markup. Have to make adjustments to the paths in `index.html`.
* I also have to change the paths in the stylesheet for the font files...
* Ok everything back to normal after those path changes.
* Running the Sass watch command via the command line is getting a bit annoying. #justsaying

#### 17. Webpack or gulp?
* I really want to use webpack but I don't know it. I know gulp as I have worked with it before.
* I'm planning to build a massive app, maybe not in this repo, but ultimately that is the plan.
  * I'm thinking of keeping things as component driven as possible. So basically I would want each page/view of the app to load only the styles and JS that it needs.
  * Alternatively, I might just load everything upfront. We'll have to see what works out in the end and what makes more sense from a maintainability aspect as well as from a performance aspect.
* Putting this decision on hold.

#### 18. jQuery and package.json
* I don't necessarily need jQuery, but seeing as it's a dependency for Backbone I thought it's a good starting point to add it.
* To get the ball rolling I will need a `package.json` file.
  * Command line, `cd` to root of project and hit `npm init`. I simply followed the prompts and kept most things as the default.
* Now that we have a `package.json` file we can install npm packages and save them to this file. This will make it easy for other people to clone this repo and be able to also install these packages that are needed for the project.
* Let's install jQuery, `npm i jquery --save`. Install was successful.
* Before I continue I will tell git to ignore the `node_modules` folder. This is the folder that npm created when it installed jQuery. I know the `node_modules` folder will get massive. Hence I don't want it in the repo.
* Now I can go into `index.html` and include jQuery, the path is a bit awkward - but it will have to do for now `<script src="../node_modules/jquery/dist/jquery.min.js"></script>`.
* I've added an animation to the H1 to test jQuery and it works perfectly. Only annoying thing? I have to run `minify app.js` every single time I make a change to my JavaScript. This needs to be automated...
* Another thing that's starting to happen is that I now have two JS files included in my markup. Ideally I only want a single script tag in the markup.

#### 19. How to get jQuery if I clone the repo on another machine?
* Basically clone the repo and then run `npm install` in the root to get all the dependencies. Simple!

#### 20. Adding basic repo instructions
* It's been months since I worked on this and when I cloned the repo again and opened the `index.html` in my browser it was throwing a JS error in the console. Basically complaining about `$` being undefined. Doh! jQuery isn't included. I have to run `npm install` to get it...
* I will now add instructions right at the top of this readme to make sure people know what to do with this repo.
* Done. Commit. Push.

#### 21. Upgrading jQuery because it is a security vulnerability to run pre v3
* I updated the version in `package.json` and pushed those changes
