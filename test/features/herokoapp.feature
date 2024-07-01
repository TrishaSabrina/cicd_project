# Feature:Heroko App Test
# Scenario: I will test dropdown

# Then I should see the main page is opened
# When I click dropdown link from the main page
# Then I should see the dropdown page is opened
# When I select <option> from dropdown

# Examples:
# |    option     |
# |   Option 2    |






Feature: Heroko App Test
Scenario: I will login the login page

When I enter <username> to the input field
And I type <password> to the password field
When I click login button
Then I should see the home page after login

When I click logout button

Examples:
|   username    | | password              |
|   tomsmith    | |  SuperSecretPassword! |