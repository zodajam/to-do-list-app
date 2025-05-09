## To-Do list app
Everyone's made one of these, right? Well most of those people will just follow tutorials on YouTube. Now, you learn more if you actually code and use problem solving in your developement instead of following some old YouTube tutorial. As proof that I did not use a tutorial for this, I will list step by step what I did to make it.

1. I got the idea, and added the HTML, CSS and JavaScript files (and the README.md of course).
2. I made a simple header and an input for user input.
3. I added an eventListener to the input variable to check if a user presses the "Enter" key, then it will run the main function.
4. I learned how to use the document.createElement. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild">Source.</a>
5. I got it working (kiiiinda, I couldn't add `input.value`, I had to set a text) but I realized I need multiple divs grouped so I learnt about fragments.
6. Now I had a centered task list, but I had to fix the problem where the site doesn't actually take user input.
7. Rookie mistake, I called the function after I clear the input field so it creates empty fields. Anyways, it's fixed now.
8. I added a counter so it will list the tasks from 1 and up.
9. Now I'm trying to make a delete button. I'm using the `num` counter to check the id and then remove that id onclick.
10. I didn't manage to make a delete button, so I checked in a book I have.
11. Now that I read the book I learnt how to delete any item onclick. And I got a better understanding of the appendChild() method.
12. Now I've added a command so you can clear everything on the list, /clear
13. I've added a help menu
14. I actually forgot how to make a toggle so I had to check my old code 😭 and now that I've check it I was just missing ONE = sign