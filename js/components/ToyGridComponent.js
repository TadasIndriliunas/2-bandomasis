class ToyGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      toys: []
    };
    this.init();
  }

  fetchToys = () => API.getToy(this.saveToys, this.showError);

  init = () => {
    this.fetchToys();
    this.htmlElement.className = 'row g-3 justify-content-center';
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
      this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 256px" />';
    } else {
      this.htmlElement.innerHTML = '';
      const cardComponents = this.state.toys.map(cardProps => new ToyCardComponent(cardProps));
      const cardElements = cardComponents.map(component => component.htmlElement);
      this.htmlElement.append(...cardElements);
    }
  }
}