# app-starter
A journey through time...

##### 1. How did I get here?
* Start by creating a repo on Github called 'app-starter'. Initialize it with a LICENSE and README.md. Then on my machine I did a git clone of the repo. I then proceeded to adding these lines of what I did to get the repo locally. I will now commit. Every single time I commit I will have reached a milestone. I will have to figure out a way to make this readme better as I go along.

##### 2. Creating index.html
* I will add an index.html with some basic markup. Done. It has a title and a H1. That's pretty much it. At this stage I can open the file in browser by navigating to 'file:///Users/cornelius/projects/app-starter/index.html'. This path will be different depending on what operating system you run, what your username is and where you store the files and folders. In this case I am on a Mac and my username is 'cornelius', I created a folder called 'projects' and that is also where I cloned this repo.

##### 3. Adding style and basic JavaScript
* I want the heading in my 'index.html' to be blue. I also want to make the console print 'Hello World!'. I added a style tag in the head of my HTML. I also went and added a script tag at the bottom of my markup which says hello. When I hit refresh on my browser the colour is blue and the console says hello. Awesome! :P #commitandpushtomaster

##### 4. Github readme shows incorrect numbering
* On github this readme shows my numbering incorrectly. I will have to look at the markdown style for Github and change this readme accordingly to do the numbering correctly. It's as if it is doing a list and always starting at 1 instead of the numbers I type into the markdown.
* I have now added asterisks below my numbering. Hopefully this will sort the issue out.
* This did not sort the issue. I've now opted to make each "list item" a heading instead. That seems to work.

##### 5. Where is this going?
* Well I want this to be the starting point for every app that I write. Basically I would want the following:
  - Backbone and Marionette
  - Node.js with Express
  - MongoDB
  - Unit tests (most prob Jasmine)
  - Browser test runner (Karma)
  - Webpack with or without gulp (depending on what I learn and need)
  - JavaScript linting (Eslint)
  - Sass linting (not sure what exists and what can be used)
  - I want to write ES6 syntax (most prob will need Babel or something)
  - I want to have component structure rather than views/models/controller
  - I want everything to be highly compressed and optimised
  - Sass, maybe a CSS framework (really don't mind, at this stage vanilla styling will do)
  - I want to host everything online
  - I want automation for deployment (maybe Jenkins)
  - Ideally this repo should be used, I don't want to have to move this repo to Bitbucket for automation
  - I want a clean folder structure, something that's simple to understand and work with

##### 6. What app should I build?
* I want to make an app that is basically an online version of the Android app "Fuelio". Why? Because it seems like a good starting point. I already have data for it from the past years I've been using the app so that's cool. I would be working with something that is actually a real life application that I could use. It would not be much fun to build something as an example app. At the end of the day I will build the app in this repo. I would most probably have to strip out all the app related stuff to make it a true starter kit. But we'll see where it goes...

##### 7. Splitting out styles and JavaScript
* Up until now my styles and JS have been sitting on the markup file directly. Because this will become unmaintainable I will separate it out. I now have a two more files in my project: 'styles.css' and 'app.js'. Makes things a bit nicer... On refresh it still works. I had to replace the style tag in the head with a link tag. For the script I simply removed my JavaScript code and added a 'src' attribute with the file path. For now all file paths are relatively declared which works perfectly.
* PS: If I use absolute paths, e.g. `src="/app.js"` then it complains that the files cannot be found. Makes sense as we're not serving it up directly but rather only browsing the index.html file instead of accessing it through a server.

##### 8. I need Sass in my life
* Currently I only have on rule in my styles.css, but trust me I don't want to write pure CSS. I want to use Sass from the start. Let's get that going. As far as I know I only need Ruby or something to use Sass.
* Yep, only need Ruby. On Mac's Ruby comes pre installed. So if you're using another machine make sure to install Ruby. For me,  only need to run `gem install sass` to get Sass. Awesome.
* The Sass gem installation was successful.
* If I type `sass -v` into terminal it spits out "Sass 3.4.21 (Selective Steve)". Looks good to me.
* If I remember correctly I need to run `sass --watch styles.scss:styles.css` for basic functionality.
* Renaming my stylesheet 'styles.css' to 'styles.scss'.
* Running `sass --watch styles.scss:styles.css` created a folder called `.sass-cache`, a file called `styles.css` and another file `styles.css.map`. If I update my `styles.scss` then the watch triggers and updates these files and the cache directory.
* This is fine for now. However, I don't want to add the `.map` file and the cache dir to the repo.
* I'll create a `.gitignore` file and add the cache dir and the `.map` file so they get excluded.

##### 9. I already don't like the folder structure
* Previously I added Sass and it already made the folder a bit messy :D
* I'll create a folder for the app called 'src'.
  * The plan is to do all of my work in that folder. Ultimately there will be more folders like 'dist', 'test', 'build' or something like that. The plan is that I'll work in 'src' and that the end result of any work I do lands in 'dist'. Basically the idea is to only have the 'dist' folder contents on the server and everything works perfectly as it should. We'll see about that though as we go along. Might not all work out as what I have planned right now.
* I'll move all my files there for now. To keep Sass working I would `cd` into the 'src' directory and run the `sass --watch styles.scss:styles.css` command from there.
* So when I refresh the browser it fails. I obviously have to change the path, 'file:///Users/cornelius/projects/app-starter/src/index.html' does the trick.
* I don't have to amend my '.gitignore' as it knows to exclude the stuff there no matter what the folder structure.

##### 10. Minifying Sass
* To get my stylesheet compressed I simply had to adjust my Sass command to `sass --watch styles.scss:styles.css --style compressed`

##### 11. Minifying (uglifying) JavaScript - Part 1
* First I'll add more JavaScript code.
* Added some console statements and a simple for loop.
* I know I can use the online Google Closure compiler to minify the JS. That's what I have used in the past. But I want to do this via the command line, like with the Sass watch command.
* Did some Googling... looks to complicated to get it working via command line. I would have to download one or the other compiler and then manually run a command to minify the JS.
* For now I'll just use https://www.npmjs.com/package/minifier. Not sure how good or bad this one is but it will be the easiest to get going.
* Ok scrap that idea... I will need to install nodejs and npm before I can do that.

##### 12. Installing nodejs and npm
* So I went to https://nodejs.org/en/ and downloaded the v5.x.x version of node. I double clicked and installed.
* Node comes with npm pre-installed. So now I can get that JS minification going. Yay :)

##### 13. Minifying JavaScript - Part 2
* Now that I have node and npm installed I can install 'minifier', `node i -g minifier`.
* In 'src' I simply ran `minify app.js`. This created a new file 'app.min.js'. It looks minified, but I'm not sure if I trust this minification for bigger code bases. For now it's fine.
* I had to amend my `index.html` to point to the new minified JS file.
* Everything still works. Cool.

##### 14. Let's make our app a bit more complex
* At this stage a blue heading and some messages being logged to the console are really not ground-breaking.
* I'll add a favicon and the Fuelio logo.
