# experiment-safari-auto-scroll-keyboard

It seems Safari "scroll form control into view" could be interrupted when a style is being applied to the pseudo element of the form control. It do not happen all the time and looks like a race condition.

## Repro steps

1. Click the demo link below
2. Tap on the top part (green)
3. Tap on the text box
4. EXPECT: The text box should scroll into view
5. ACTUAL: The text box did not scroll into view and is hidden from viewport until scrolled manually
6. If it does not repro, repeat step 2-3 for up to 20 times

## Description

The demos below are free of JavaScript with minimal use of CSS flex box. The only difference is how CSS is being applied to `input::placeholder`.

- [Demo of repro](https://compulim.github.io/experiment-safari-auto-scroll-keyboard/index3.html), coloring placeholder red [(source code)](https://github.com/compulim/experiment-safari-auto-scroll-keyboard/blob/main/public/index3.html)
  ```css
  .text-box::placeholder {
    color: Red;
  }
  ```
- [Demo of no-repro](https://compulim.github.io/experiment-safari-auto-scroll-keyboard/index4.html), style is commented out [(source code)](https://github.com/compulim/experiment-safari-auto-scroll-keyboard/blob/main/public/index4.html)
  ```css
  /* .text-box::placeholder {
    color: Red;
  } */
  ```
- [Demo of repro](https://compulim.github.io/experiment-safari-auto-scroll-keyboard/index5.html), style is empty [(source code)](https://github.com/compulim/experiment-safari-auto-scroll-keyboard/blob/main/public/index5.html)
  ```css
  .text-box::placeholder {
  }
  ```
