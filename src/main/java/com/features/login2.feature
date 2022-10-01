#Author: your.email@your.domain.com
#Keywords Summary :
@HRM1
Feature: OrangeHRM ONLINE APPLICATION.

@HRM2
Scenario Outline: Login Test.
Given user on login page
When  user enter "<username>"and "<password>"
Then user should be on homepage

Examples:
|username|password|
|Admin|admin123|
|Ajay|ajay123|
|Sachin|sa123|

@HRM3
Scenario: Logo Test
Given user on login page
Then user should see OrangeHRM Logo

#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
