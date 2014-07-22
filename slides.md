title: ESLint 101
author:
  name: Lewis Ellis
  twitter: LewisJEllis
  url: http://LewisJEllis.com
output: slides.html
theme: jdan/cleaver-retro
controls: true

--

# ESLint 101
## Linting your code, and getting the most out of ESLint

--

### What is linting?

**Code Linting** refers to using the magic powers of static analysis to find potentially erroneous, inconsistent, or otherwise undesirable (whatever that means to you) bits of code in a program. Linting is useful because it can:
* Catch bugs
* Help you avoid potential mistakes
* Keep your code clean, especially post-refactor
* Enforce style guidelines

--

### Why do we want it?

From idiomatic.js, a popular style guide:

> All code in any code-base should look like a single person typed it, no matter how many people contributed.

Imagine how close to this goal a project can get if every developer just uses a linter configured in the same way.

--

### How do we do it?

The magic powers of static analysis are harnessed by magic tools which do linting for you. This magic has become more powerful over time. A brief history:

First, there was **JSLint**, which:
* Was made by Douglas Crockford, author of the (short) book, **JavaScript: The Good Parts**
* Enforces Crockford's personal style preferences
* Has relatively limited configuration options

Recall: "undesirable (whatever that means to you)".

--

### But I don't like some of Crockford's rules!

Neither did some other people. One guy called JSLint:
> a tool that makes sure you write your code like Douglas Crockford

right after he forked JSLint, made the magic even more powerful, and called it **JSHint**.

* Like JSLint but lets you configure the rules more
* Has 80% more GitHub stars than JSLint
* That guy, Anton Kovalyov, wrote a book, **Third-Party JavaScript**, with Shape's own Ben Vinegar

--

### But what if I want my own new rules?

JSHint covers most use cases, but it can't possibly cover them all out of the box. So another guy came along and added **even more** magic. Enter, **ESLint**.

* Like JSHint, but with a different source of magic
* This different magic lets us write out own rules easily
* Is completely style agnostic; have it your way
* Made primarily by Nicholas Zakas, who therefore also wrote a book: **Professional JS for Web Devs**

Recall: "undesirable (whatever that means to you)".

--

### How do I install ESLint?

If we just want to configure and use ESLint, we can just:

    npm install -g eslint

But to write our own rules, we'll need to:

    git clone git://github.com/eslint/eslint.git
    cd eslint
    npm install
    npm test
    npm install -g yo
    npm install -g generator-eslint

--

### Okay, now how do I run it?

First, you need to write a `.eslintrc`. We could read the docs and write our own, but I've already done that, so let's take a look at it.

Then we can run ESLint on an example file:

    eslint examples/horrible.js

--

&nbsp;

Look at all of those bad practices that it caught!

Let's try to fix them.

--

### Cool, now how do we make a rule?

First, let's look at some rules that ESLint provides. Namely, `no-space-before-semi` and `func-style`.

Nothing crazy yet; let's make a rule. Normally we'd go:

    yo eslint:rule

but for this talk's environment, we'll just copy `rules/template.js` and start from there.

--

### Okay, what info is available to the rule?
The `context` has `report` and some source-level stuff:

    var source = context.getSource(); // full source
    var nodeSource = context.getSource(node); // just this piece
    // three characters after this piece
    var justFollowingThree = context.getSource(node, 0, 3);
    // three characters before this piece
    var justPreviousThree = context.getSource(node, 3);

and each function receives a `node` argument when invoked, whose properties vary from type to type. Example: `Identifier` nodes will give us `node.name`.

--

### Okay, let's run our rule!

Yep. I already made some config files to help out, so we'll just need to point ESLint at all the right places:

    eslint --reset --eslintrc=false --rulesdir rules
    -c configs/curly-eslint.json examples/one.js

That will run just our one new rule against `one.js`. Then we can run it against `two.js` and `three.js` and even `horrible.js`, if we're so inclined.

--

### Okay, let's make another rule.

Sure. Let's take a more generous interpretation of

> "undesirable (whatever that means to you)"

this time. We'll call our rule `four.js`.

--

### Cool, now let's try that out!

Of course. Let's make sure none of these pesky variable names are too long for our taste. Run:

    eslint --reset --eslintrc=false --rulesdir rules
    -c configs/four-eslint.json examples/one.js

and then on `two.js` and `three.js` and `horrible.js` if we want.

--

### Let's test them together!

You bet:

    eslint --reset --eslintrc=false --rulesdir rules
    -c configs/both-eslint.json examples/one.js

and then on `two.js` and `three.js`, of course.

--

### So what's so hard about these rules?

Well, as you saw, sometimes simple things aren't quite so simple. Enforcing some rules is harder than enforcing others. Let's look at:
* `camelcase`
* `yoda`
* `block-scoped-var`

The ones we looked at before were all easy cases. These, not so much. Some of these ESLint rules are doing quite a bit of magic of their own.

--

### But what IS all that magic?

In this talk, I've used the word **Magic**, roughly, as a replacement for **static code analysis**.

ESLint has some of its own magic contained in its rules, generally more complex than the ones we just wrote.

It's built on the magic powers of **Esprima**, a parser which turns JS into **Abstract Syntax Trees** according to the subject of Michael's talk, the **SpiderMonkey Parser API**.

Esprima was made by Shape's own Ariya Hidayat.

--

&nbsp;

Surprisingly, Ariya has not written any JavaScript books.

--

&nbsp;

&nbsp;

&nbsp;

He did make **PhantomJS**, though.

--

### Takeaways

- Most, but not all, makers of magic tools write books
- You should use their magic to make your code better
- You, too, can harness this magic, thanks to ESLint
- ESLint can be run as a task by Grunt, Gulp, etc, or as a pre-commit hook to enforce codebase consistency

--

### Wait! How did you make this presentation?

**Cleaver**, a nice JS tool which turns a simple Markdown file of your talk into a single HTML file of your slides.

https://github.com/jdan/cleaver

--

### When will the slides/code/etc be online?

They're already available on my GitHub:
http://github.com/LewisJEllis/eslint101

Other relevant links:
- [ESLint](http://eslint.org/)
- [JSHint](http://www.jshint.com/)
- [JSLint](http://www.jslint.com/)
- [Esprima](http://esprima.org/)
- [SpiderMonkey Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
- [idiomatic.js](https://github.com/rwaldron/idiomatic.js/)
