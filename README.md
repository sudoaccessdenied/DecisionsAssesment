# DecisionsAssesment
### Description
  Solution for Assessment Coding Question.
## Features
  * Project have two pages home and add Product. 
  * Home Page List the Product using using json object from server.
  * Add Product Page  Dynamically Create **Text**,**Number**,**Checkbox**,and **Select** input Form by getting configuaration from server for clicked product.

## Run Development Server
  1. Install dependencies using `npm install` Command in DecisionsAssesment Directory
  2. Run `ng serve` in the Command in DecisionsAssesment Directory and Navigate to `http://localhost:4200/ in  browser.

## I have followed the follwing approach for solving the problem.
  1. Initially i have created two component show-product  and add-product and their respective Resolve guards i.list-resolver and product-resolver.
  2. Created routes for both Components.
  3. Created A Service called ApiService to fetch data from server.
  4. Created interface add-product-form for type-checking. 
  5. Show-product component receive data from its resolver and list the product.
  6. When the user click on the button in show-product page the definitionUrl gets save in localStorage and navigate to add-product component.
  7. product-resolver resolve the data by getting url from localstorage and return the data to add-product component.
  8. handled the case in add-product component if url does not exit in localstorage.
  9. add-product component initalize the data received from resolver and and create form group using ApiService.
  10. Used Angular directives to handle multiple cases in template file for input typs.
  11. Added one additional feature i.e select input form compatibility .

## Screenshots
  #### Home Page
  ![Home page](https://github.com/sudoaccessdenied/DecisionsAssesment/blob/master/home.png "Home Page")
  #### Product Page
  ![Add Product](https://github.com/sudoaccessdenied/DecisionsAssesment/blob/master/addproduct.png "Add Product Page ")
  #### Select Input Example
  ![Select](https://github.com/sudoaccessdenied/DecisionsAssesment/blob/master/select.png "Select Input")
