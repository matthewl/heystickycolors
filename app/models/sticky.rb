class Sticky < ApplicationRecord
  # We call this to determine the next color.
  def next_color
    return "red" if color == "yellow"
    return "blue" if color == "red"
    return "green" if color == "blue"

    "yellow"
  end
end
