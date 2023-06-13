# experiment-safari-auto-scroll-keyboard

It seems Safari "scroll form control into view" could be interrupted when a style is being applied to the pseudo element of the form control. It do not happen all the time and looks like a race condition.

The demos below are free of JavaScript with minimal use of CSS flex box. The only difference is how CSS is being applied to `input::placeholder`.

- Demo of repro, coloring placeholder red
  ```css
  .text-box::placeholder {
    color: Red;
  }
  ```
- Demo of no-repro, style is commented out
  ```css
  /* .text-box::placeholder {
    color: Red;
  } */
  ```
- Demo of repro, style is empty
  ```css
  .text-box::placeholder {
  }
  ```
