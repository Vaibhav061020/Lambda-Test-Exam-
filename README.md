
Firstly, we require to initialize our project for that we 
use a simple command such as 
    npm init -y
then we install Cypress, The command that I have used is.
    npm install cypress@7
I have used the cypress version 9 specifically because it is 
easy to work and configure.Then I have deleted all the integration files downloaded by Cypress and created the 
folder called as Functional test in it. Inside this folder,I have included the Test-scenario1-test.spec.js and Test-scenario1-test.spec.js file. 

At top of this file we have to include add the command
   /// <reference type="cypress"/>
It will help the autosuggestion of the cypress tag. Inside the first "It" block we are going to visit this "https://www.lambdatest.com/selenium-playground" website, which is the demo site from the lambda test.
 
After this we are navigating to the input form submit under the input form. By the below command
cy.xpath("//a[normalize-space()='Input Form Submit']").click();
then we are going to install the cypress-axe@0.14.0 and cypress-axe-core@4.4.2 for checking the accessibility of the form. For this we require the below command.
npm install --D cypress-axe@0.14.0 axe-core@4.4.2
In the above command I have included the versions of the packages while installing it. They are stable and mostly used version of that packages. After installing this package we have to import it inside the index.js in the support folder.
import 'cypress-axe'
 
then inside your script file Test-Scenario1.tests.spec.js we have to include two cypress commands  cy.injectAxe() and cy.checkA11y(). First command is responsible for injecting the command and second to check the accessibility of the particular component.
 

Then run the script and we can see the accessibility check on the cypress log 
 
if you click on any error on the cypress log the accessibility error is highlighted on your right side panel.
 
we can also check the accessibility for a specific element as well as a particular paragraph or field and any form as well. As we see we can check the accessibility of the form. In the below image we have to just pass the xpath or the selector inside the "checkA11y()" command as shown below.
 
And the script it will show you the accessibility assertion specifically for the form. As we see in the below image we have a single error inside the form only.
 


