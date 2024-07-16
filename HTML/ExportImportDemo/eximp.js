//import multiply, {days,dob,hello,addition} from "./util.js";

// since this function is default export we have to import it outside the {}


// to import all export together except default we can use * operator
import multiply from "./util.js";
import * as eximpExample from "./util.js";
console.log(eximpExample.days);
console.log(eximpExample.dob);
eximpExample.hello("how are you");
eximpExample.addition(2,4);
multiply(65,86); 