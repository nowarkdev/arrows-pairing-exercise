Given(/^I go to the bill page$/) do
  visit '/'
end

When(/^I click '(.*)'$/) do |text|
	click_link(text)
end

Then(/^I should see '(.*)'$/) do |text|
  expect(page).to have_content(text)
end

Then(/^I should see all call charges$/) do 
  expect(page).to have_content('07716393769')
end

Then(/^I should see (.*) '(.*)' items?$/) do |count, item_class|
	expect(page).to have_selector(".#{item_class}", count: count)
end
