import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "background", "selector" ]

  connect() {}

  change_color() {
    if (this.backgroundTarget.classList.contains("bg-yellow-100")) {
      // Switch from yellow to red
      this.backgroundTarget.classList.remove("bg-yellow-100");
      this.backgroundTarget.classList.add("bg-red-100");
      this.selectorTarget.classList.remove("bg-red-300");
      this.selectorTarget.classList.add("bg-blue-300");
    } else if (this.backgroundTarget.classList.contains("bg-red-100")) {
      // Switch from red to blue
      this.backgroundTarget.classList.remove("bg-red-100");
      this.backgroundTarget.classList.add("bg-blue-100");
      this.selectorTarget.classList.remove("bg-blue-300");
      this.selectorTarget.classList.add("bg-green-300");
    } else if (this.backgroundTarget.classList.contains("bg-blue-100")) {
      // Switch from blue to green
      this.backgroundTarget.classList.remove("bg-blue-100");
      this.backgroundTarget.classList.add("bg-green-100");
      this.selectorTarget.classList.remove("bg-green-300");
      this.selectorTarget.classList.add("bg-yellow-300");
    } else {
      // Switch from green to yellow
      this.backgroundTarget.classList.remove("bg-green-100");
      this.backgroundTarget.classList.add("bg-yellow-100");
      this.selectorTarget.classList.remove("bg-yellow-300");
      this.selectorTarget.classList.add("bg-red-300");
    }
  }
}
