class PagesController < ApplicationController
  def root
    @url = request.original_url

  end
end