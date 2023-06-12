class Circle {
    constructor() {
      this.color = "";
      this.text = "";
      this.textColor = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Triangle {
    constructor() {
      this.color = "";
      this.text = "";
      this.textColor = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Square {
    constructor() {
      this.color = "";
      this.text = "";
      this.textColor = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      return `<rect width="160" height="160" x="70" y="20" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };