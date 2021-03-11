import "./formHandler";
var validUrl = require("valid-url");
/*As of now we have only one. Please separate validation logic in another 
file and make calls to it for validations*/

function valid_Url (formText){
  console.log("::: Running checkForURL :::", formText);
if (validUrl.isUri(formText)) {
  console.log("------ Looks like an URI  -------");
} else {
  console.log("----- Not a URI -----");
}
  
}

export{valid_Url}