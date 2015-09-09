require 'capybara/cucumber'
require 'capybara/poltergeist'
require 'net/http'
require 'uri'
require 'json'

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, js_errors: false, debug: false)
end

LOCAL_URL = 'http://localhost'
Capybara.app_host = "#{LOCAL_URL}:#{ENV['port'] || '8081'}"
Capybara.run_server = false
Capybara.default_wait_time = 10

Capybara.register_driver :chrome do |app|
  options = {}
  options[:browser] = :chrome
  Capybara::Selenium::Driver.new(app, options)
end

if ENV['BROWSER']
  Capybara.default_driver = :selenium
else
  Capybara.default_driver = :poltergeist
end