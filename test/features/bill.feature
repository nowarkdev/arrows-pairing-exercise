Feature: To display a customer's bill

  Scenario: As a customer I can see my total cost for a set period
    Given I go to the bill page
    Then I should see 'My Bill'
    And I should see '£136.03'
    And I should see 'Jan 26th - Feb 25th'

	Scenario: As a customer I can see my subscriptions
		Given I go to the bill page
		When I click 'Subscriptions'
		Then I should see 3 'subscription' items
		And I should see '£71.40'

	Scenario: As a customer I can see my call charges
		Given I go to the bill page
		When I click 'Calls'
		Then I should see 28 'calls' items
		And I should see '£59.64'

	Scenario: As a customer I can see my Sky Store products
		Given I go to the bill page
		When I click 'Sky Store'
		Then I should see 1 'rental' item
		And I should see 2 'buyAndKeep' items
		And I should see '£24.97'

