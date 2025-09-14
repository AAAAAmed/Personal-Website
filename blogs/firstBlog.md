## First Blog
### (25/09/??)
Hey! This is my first time writing a blog.
I started this blog to practice my writing a bit and maybe to have a place to share devlogs and stories that I can link to easily.

I think it would be fitting to write my first blog post/devlog about this blog system I created. *Don't you?*
(It's not just HTML)

### Why not just HTML?
It would make sense to most people to think that if you're making a web blog, you should write it in HTML (or whatever framework you use to make websites).

The problem with using HTML is that it's too werid and ugly in plain text.

The tags aren't very intuitive, and they add big bulky blocks around all of the text. It's also really slow to type it out and edit it if you don't use a code editor.
Also HTML wasn't designed to be easy to type. It's easy for computers to parse and understand and it's also human-readable, but it's not very human-friendly.

### So what else do I use?
Markdown. It supports many of the same features that HTML does (like headers, links, images, bold & italic text, etc.) but it's much more human-friendly.
It uses syntax that when shown in plain text, somewhat give the same effect as if the text were properly displayed.

For example, if you want to type *italicized text* in markdown, you surround the text with asterisks `*like this*`. If you don't show the italicization, and show the asterisks, the text still looks \*emphasized*.

This makes writing with markdown very easy and intuitive, which is great, but...

### How do you use Markdown on a website???
Current web browsers don't understand markdown on their own —they only understand HTML— so we need some way to convert mardown to HTML so that the web browser can understand it.

I have 1 condition with the conversion method I choose, I don't want to manually use a conversion tool every time I write a blog post or make a change to an existing one. With this condition, I came up with an idea, I can use a web-based converter to convert my markdown file to HTML on-the-fly when someone opens the website.

### Ok... but how?
This is actually surprisingly simple. The first thing I need is some code that can convert markdown to HTML that can run on a web browser.
I was going to code this myself but thankfully I found some code online ([markedjs](https://github.com/markedjs/marked)) that does exactly what I needed.

Now I can write some code that does the following when the website is loaded:
- fetch the markdown file
- run the file through the converter code
- inject the resulting HTML into the website

^This happened when you clicked on this blog :D
Isn't that simple!

Anyway, thanks for reading through this.
*Until next time...*