class HomeController < ApplicationController
  def index
    @stickies = Sticky.all
  end
end
