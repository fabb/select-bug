# Bug in Resetting the Form State on Browser Back/Forth in next.js

This repo demonstrates a bug in next.js that causes checkbox and select form fields not showing the correct state after using the browser previous/next buttons.

It does not happen in a pure react app.

## Reproduction Scenario

### In next.js

- `cd select-next-test`
- `npm i`
- `npm run dev`
- In the browser, select the second radio button, and in the select set "Two"
- In the same browser tab, go to another url, e.g. https://www.npmjs.com/package/next
- Press the browser back button

#### Actual Buggy Behavior

- The second radio button is still selected, and in the select "Two" is still selected BUT in the react component's state the state does not match that
- Now when the first radio button is clicked, the component rerenders, and also the select suddenly jumps to "One" (which is the initial state set in the constructor)

#### Expected Behavior

- The radio buttons should both be deselected, and for the select "One" should be selected
- Therefore, the component state should match what is displayed

#### Caveat

- Ignore the browser's DOM inspector, it does not correctly update `checked` and `value` attributes, even though they are correctly set when doing `console.log`.

### Correct Behavior in pure react app

- `cd select-react-test`
- `npm i`
- `npm run start`
- In the browser, select the second radio button, and in the select set "Two"
- In the same browser tab, go to another url, e.g. https://www.npmjs.com/package/next
- Press the browser back button
- The radio buttons are both deselected, and for the select "One" should be selected

## Environment

It seems to happen in Chrome only (reproduced Chrome 71 on macOS Mojave).

The bug happens both next.js 7.0.2 and 8.0.0-canary-13.
