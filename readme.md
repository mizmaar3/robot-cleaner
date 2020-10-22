# Robot cleaner

## A prototype of robot cleaner cleaning a surface by providing instructions to the program.

## Technologies used

- Node Js (for js coding)
- Jest (for unit testing)

### How to run

- Copy repo
- open folder in terminal
- run `npm install`
- run `npm run build`
  .. and it will show you result.

### How to instruct

- input.txt contains commands for program.

**Line1**: Contains number of commands robot takes (0 < n < 10,000)

**Line2** : X and Y axis of start point for robot (-100,000 < X&Y < 100,000)

**Line:3 and so on** Direction and steps robot should take (i.e. N 2 & W 3) Go two step up then three step left
Use N, S, E, W for direction up, down, right, left respectively.

## TRIVIA

Think of a square room as a grid devided into vertices. The robot will take number of instruction, starting vertices and then each instruction in form of direction and steps.

The robot will never go outside room (so it wont go over threshold +-100,000) And if robot will reach to a vertex twice it will be counted once only. Starting point will also be counted as a cleaned surface.
