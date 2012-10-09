require 'sinatra/base'
require 'pry'

class OrderSystem < Sinatra::Base

  get '/' do
    erb :orders
  end
  
  
  
end