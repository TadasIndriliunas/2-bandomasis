class ToyGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      toys: []
    };
    this.init();
  }

  init = () => {
    API.getToys(this.saveToys, this.showError);
    this.render();
  }


  showError = error => {
    console.error(error);
  }
  
  saveToys = (toys) => {
    this.state.toys = toys;
    this.render();
  }


  render = () => {
    if (this.state.toys.length === 0) {
      this.htmlElement.innerHTML = 'NĖRA DUOMENŲ';
    } else {
      this.htmlElement.innerHTML = '<pre>' + JSON.stringify(this.state.toys) + '</pre>';
    }
  }
}