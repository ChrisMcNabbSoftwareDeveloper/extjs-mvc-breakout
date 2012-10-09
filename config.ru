require 'pathname'
WEB_PATH = Pathname.new File.dirname(__FILE__)

require 'sinatra/base'

require WEB_PATH + 'order_system/order_system'

map('/ordersystem') { run OrderSystem }
