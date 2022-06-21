# stimulus-sliders

This is a quick code example of using Stimulus.js to display the current value of a Range Slider.

This was written because I had a hard time finding an example using Stimulus, most were older and bulky, requiring jQuery. The code was adapted from a Rails project where I was using Rails Form Helpers and Tailwind CSS. It has been cleaned up to use pure HTML/CSS/Stimulus.

In this example the slider is used to set a percentage, with a range of 0-100% and a step of 5.

## HTML

```html
<html>
  <body>
    <form>
      <div data-controller="form" id="field-wrapper">
        <input type="range" id="slider" name="slider" min="0" max="100" step="5" data-action="input->form#handleSlider">
          <label for="slider">Slider Value: </label>
          <span id="display-value"></span>
      </div>
    </form>
  </body>
</html>
```

This snippit is using the 'input' data action to trigger as the slider is moved. If you need to only trigger the value update when the slider is released, you can change this to an 'change' action (data-action="change->form#handleSlider").

## Stimulus Controller

```javascript
const application = Stimulus.Application.start();

class FormController extends Stimulus.Controller {
  
  initialize(){
    const sliderValue = document.getElementById("slider").value;
    const sliderDisplay = document.getElementById("display-value");
    sliderDisplay.innerHTML = `${sliderValue}%`;
  }
  
  connect(){
  }

  handleSlider() {
    const sliderValue = document.getElementById("slider").value;
    const sliderDisplay = document.getElementById("display-value");
        sliderDisplay.innerHTML = `${sliderValue}%`;
    }
};

application.register("form", FormController);
```

The above will produce a default slider that updates the displayed value as the slider is moved:

![image](https://user-images.githubusercontent.com/61164345/174849358-4c0524a5-493f-4f0c-bdad-141c689729cc.png)

Some CSS is also included to dress up the slider a bit.

## CSS

```css
#field-wrapper {
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

input[type="range"] {
 -webkit-appearance: none;
}

input[type="range"]:focus {
 outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 2.5rem;
  height: 1.5rem;
  background-color: lightgray;
  border-radius: 9999px;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}

input[type="range"]::-moz-range-track {
  width: 2.5rem;
  height: 2rem;
  background-color: lightgray;
  border-radius: 9999px;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}

input[type="range"]::-webkit-slider-thumb {
 -webkit-appearance: none;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background-color: cadetblue;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  top: -0.5rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

input[type="range"]::-moz-range-thumb {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background-color: cadetblue;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  top: -0.5rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
```

![image](https://user-images.githubusercontent.com/61164345/174849703-d5515c22-dbfa-4c4a-ae25-e1bb491ce5aa.png)

Cheers!

