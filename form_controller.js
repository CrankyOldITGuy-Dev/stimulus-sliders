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
