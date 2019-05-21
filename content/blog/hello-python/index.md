---
title: Getting Started with Python
date: "2019-05-19T22:12:03.284Z"
description: "A soft introduction to getting started with and using Python"
---

There are tons programming languages and choosing one to learn first can be intimidating. My first language was Java, but after learning and using Python regularly I think that it would have been a softer introduction to programming. My “coding experience” heading in to college was an HTML/CSS class in high school. Java is a pretty big step from there. Python syntax is a little easier to learn, and we don’t have to (officially) mess with types. IMO this makes the initial cognitive load much more bearable. One of the best things about Python is that it ships with macOS, so to get your hands dirty all you have to do is open a Terminal and type python.

### Hello World
It’s customary when learning a new programming language to first write a program that prints hello world. If you already opened a Terminal and fired up a Python REPL (Read-eval-print-loop - just think of it as an interactive Python runner), you’re ready for the next step. If you haven’t pulled up a terminal window, do that now.

All you have to do to hit this goal is type the following. I’ll unpack it in a sec.

```python
>>> print(‘Hello world!’)
```

Hitting enter will instruct Python to do exactly what you told it to… print hello world. Now say this code did something important, and we wanted to be able to re-use it elsewhere in our program. We can make these instructions portable by wrapping them in a function (also sometimes referred to as a method). Let’s see what that looks like in Python.

```python
>>> def hello_world():
...    print(‘Hello world!’)
```

Now you can invoke the function by simply typing `hello_world()`. Neat. Now it’s also customary in these intro tutorials to cover arguments, also referred to as parameters. Here’s how you would re-write the function to say hello to anyone.

```python
>>> def hello_friend(name):
...    print(‘Hello ‘ + name)
```

Now try calling this function with a name.

```python
>>> hello_friend(‘Charlie’)
Hello Charlie
```
There you have it. We can now pass any name (wrapped in single or double quotes) to our function and it will output Hello so and so to the screen. Now you may or may not have noticed that print is also a function!

![Mindblown.gif](https://media1.tenor.com/images/edee8fb151aa4d1b757da38ea91d62cc/tenor.gif?itemid=5139389)

Let’s write one more function to see how to use more than one argument.

```python
>>> def sum(a, b):
...     print(a + b)
```

Give that a try by calling sum(1, 2) and hopefully you see 3 printed to the screen.

```python
>>> sum(1, 2)
3
```

### Conclusion
That's a (very) basic intro to Python and how to get started using it. The REPL is an extremely useful playground for testing out code snippets. Hopefully you learned something.  In my next post I'll cover different data types and structures, as well as how and why you might use them.
