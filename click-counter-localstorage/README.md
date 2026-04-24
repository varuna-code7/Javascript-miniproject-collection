# Click Counter  with Local Storage

A simple and interactive **Click Counter Application** built using **HTML, CSS, and JavaScript**.
This project stores the counter value in **Local Storage**, so the count remains saved even after refreshing or reopening the browser.

## Features

* Increase counter value with a button click
* Stores count using Local Storage
* Count remains saved after page reload
* Reset counter option
* Responsive and clean UI

## Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)
* Local Storage API

## Project Structure

```text
click-counter-localstorage/
│── index.html
│── style.css
│── script.js
│── README.md
```

## How It Works

* When the page loads:

  * If a saved count exists in Local Storage, it displays that value.
  * Otherwise, it starts from `0`.

* When **Click Me!** button is pressed:

  * Counter increases by `1`
  * Updated value is saved in Local Storage

* When **Reset** button is pressed:

  * Counter returns to `0`
  * Local Storage is cleared or updated

## Learning Concepts Practiced

* DOM Selection
* Event Listeners
* Local Storage
* UI Interaction

## Preview

```text
The Button has been clicked 5 times
[ Click Me! ] [ Reset ]
```

## Future Improvements

* Add decrement button
* Add dark mode
* Add animations
* Add click history tracker

## Author

Built as part of my JavaScript practice journey.
