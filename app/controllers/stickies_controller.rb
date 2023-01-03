class StickiesController < ApplicationController
  def change_color
    @sticky = Sticky.find(params[:id])
    @sticky.update(color: params[:color])
    render json: {message: "Success"}
  end
end
