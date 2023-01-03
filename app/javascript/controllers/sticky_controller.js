import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {}

  change_color() {
    if (this.outputTarget.classList.contains("bg-yellow-100")) {
      this.outputTarget.classList.remove("bg-yellow-100");
      this.outputTarget.classList.add("bg-red-100");
    } else if (this.outputTarget.classList.contains("bg-red-100")) {
      this.outputTarget.classList.remove("bg-red-100");
      this.outputTarget.classList.add("bg-blue-100");
    } else if (this.outputTarget.classList.contains("bg-blue-100")) {
      this.outputTarget.classList.remove("bg-blue-100");
      this.outputTarget.classList.add("bg-green-100");
    } else {
      this.outputTarget.classList.remove("bg-green-100");
      this.outputTarget.classList.add("bg-yellow-100");
    }
  }
}
