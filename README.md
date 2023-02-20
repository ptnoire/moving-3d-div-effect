# moving-3d-div-effect
A simple CSS / JavaScript combination to create a block of text (or any div you want) to move around based on the user's mouse movement. Change the sensitivity with the ROATION_LIMIT variable. Combined with another effect I created in the background.


To learn more about the glitch effect that I have going on in the background of this demo, please see my other repository for that: https://github.com/ptnoire/glitch-code-css

## The CSS
We create a 'section' in this instance just to simulate a content field (or literally a section in HTML) where the mouse movement is being tracked, if you wanted you could change this to be just the entire site, I allowed movement outside of this just to show the on / off funcionatlity. In my head, I thought of this existing in a scroll past section just to spice up the display.

The square is going to create 2 pseudo elements which will create the 3d effect (just another similar shape / style of the parent element it is copying) and I moved them behind the Z-index to create the multiple window effect that you might see from some 90's gundam UI display. (Side note: on initial commit I forgot to change one of the elements transform to -100, whoops, changed on second commit)

## The JavaScript
I'm using a isHovering variable just to make sure that the process isn't firing constantly, as we all know JavaScript loves to use as much memory as it can get it's hands on. (Just let it cook!)

We need to gather the location of the div (element) first so that we can modify it and return it.
We do this with `const sectionRect = section.getBoundingClientRect();`

If you open this object in the console you'll see all the things we have access to but to speed up this explaination I am finding the center of the div by taking .left + .width and halving it. Similar process for the top, so we have basically a Y and X axis.

    const centerX = sectionRect.left + sectionRect.width / 2;
    const centerY = sectionRect.top + sectionRect.height / 2;
    
Then we are going to find the client's mouse positon and subtract it from our variables above, to create a difference.

    const xDiff = e.clientX - centerX;
    const yDiff = centerY - e.clientY;
    
For anyone who wants to copy this code, we have ROTATION_LIMIT as a way to make sure that the thing doesn't flip around, you could remove this and just go nuts if you wanted. Then we are just making the rotate variables in a template to pass as CSS dynamically.

    rotateX = (yDiff / centerY) * ROTATION_LIMIT;
    rotateY = (xDiff / centerX) * ROTATION_LIMIT;

    square.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    
Sleep deprived and writing this up so forgive me if I did a poor explaination this time around but always like to do one last rubber duck to make sure I know what I was doing, I often just play around in the IDE until I get the effect I was going for and sometimes that involves a few different tries of things.

I would have to rethink how to implement this effect in a larger website because firing off an event on mouse move is pretty powerful, maybe put in a 'isMoving' variable, idk but for small projects this would work pretty well as a drop in. 

Cheers!
