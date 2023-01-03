import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "background", "selector" ]

  connect() {}

  change_color() {
    if (this.backgroundTarget.classList.contains("bg-yellow-100")) {
      // Switch from yellow to red
      this.changeBackground("yellow", "red");
      this.changeSelector("red", "blue");

      // Update the sticky color in the database
      this.update_sticky(this.backgroundTarget.dataset.id, "red");
    } else if (this.backgroundTarget.classList.contains("bg-red-100")) {
      // Switch from red to blue
      this.changeBackground("red", "blue");
      this.changeSelector("blue", "green");

      // Update the sticky color in the database
      this.update_sticky(this.backgroundTarget.dataset.id, "blue");
    } else if (this.backgroundTarget.classList.contains("bg-blue-100")) {
      // Switch from blue to green
      this.changeBackground("blue", "green");
      this.changeSelector("green", "yellow");

      // Update the sticky color in the database
      this.update_sticky(this.backgroundTarget.dataset.id, "green");
    } else {
      // Switch from green to yellow
      this.changeBackground("green", "yellow");
      this.changeSelector("yellow", "red");

      // Update the sticky color in the database
      this.update_sticky(this.backgroundTarget.dataset.id, "yellow");
    }
  }

  changeBackground(oldColor, newColor) {
    this.backgroundTarget.classList.remove(`bg-${oldColor}-100`);
    this.backgroundTarget.classList.add(`bg-${newColor}-100`);
  }

  changeSelector(oldColor, newColor) {
    this.selectorTarget.classList.remove(`bg-${oldColor}-300`);
    this.selectorTarget.classList.add(`bg-${newColor}-300`);
  }

  update_sticky(id, color) {
    const csrfToken = document.querySelector("[name='csrf-token']").content;
    fetch(`/stickies/${id}/change_color`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ color: color })
    })
  }
}
