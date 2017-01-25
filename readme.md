Hello Old Sport!

Here we have a basic scraper, to use it I would strongly suggest using your mac.

~ Instructions ~

1. You need Node, running on your machine: https://nodejs.org/en/download/

2. The install Node Package Manager by opening terminal (Tip: Use spotlight, hit cmd + space and type terminal) and run sudo `npm install npm -g`.

3. You can check the previous steps my running `node -v` and `npm -v` from the terminal window (you guessed it the `-v` flag shows what version you have installed)

4. Get into the folder in Terminal: hard to advice on this ls shows the files in your current directory and cd stand for change directory so putting the scraper folder on your desktop then going cd desktop to get to desktop and ls to see whats on there and then cd scraper.

5. Once in run npm install to install the dev dependencies (cheerio + request) You should see a new node_modules folder be created in scraper.

6. Simply run node hog.js to run the hog script (by default it will go to Arnold Schwarzenegger's IMDB page and tell you he is the biggest hog. Then create a log.txt file with his name in it.)

7. Get a decent text editor (I recomend https://atom.io/)

8. Open up hog.js in atom and start having some fun, first replace the url with the page of an actor you feel is more of a hog than Arnold, saving the file and then running node hog.js again.
