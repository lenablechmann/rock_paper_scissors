# Rock Paper Scissors
The classic game, but written in Javascript, CSS and HTML. 
At first it's going to be console.log only, then the interface will be added.

## Learning Goals:
- how to develop simple algos with JS + how to use dev tools for debugging
- DOM manipulation with Javascript
- CSS grid + beginner level responsiveness
- planning JS + HTML + CSS web apps
- basic Figma layouting skills

## Project Plan / Steps:
- [x] Basic JS algorithm with console logs
- [x] Sketch up a minimalistic layout
- [x] Make a mock-up layout + grid in Figma (learn Figma) ![finished layout](images/layout_in_figma.png)
  And here is the step by step layout process from handdrawn sketch to figma:
  ![Step by Step layout progress](images/layout_steps_wip.png)
- [x] structure the HTML
- [x] Learn and apply CSS grid to the existing html structure
- [x] Make it responsive (mobile first, media queries)
- [x] Refactor JS so that it responds to events
  1. Remove the logic that plays five rounds
  2. three event listener buttons, that will call playRound fu with the necessary PlayerSelection (1 - Rock; 2 - Paper; 3 - scissors)
  1. display the results in the appropriate div
  2. change all console logs into DOM manipulations
- [ ] Add subtle animations (like subtle button changes upon click)

### Difficulties encountered / something to work on in the future
- adding borders to images while still keeping it responsive