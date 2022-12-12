let userP = 0;
const readP = 4;
const writeP= 2;
const exeP=1;

/*Sets the permission for the user*/
setPermissions(a)
{
    let userP = a;
}

/*Checks if the file has certain permissions */
console.log("Does this user have read permissions?")
console.log((userP/4 == 1) ? "Yes" : "No")
console.log("Does this user have writing permissions?")
console.log(((userP/4 == 1 && (userP%4 == 3 || userP%4 == 2))|| userP == 3 || userP == 2) ? "Yes" : "No")
console.log("Does this user have execute permissions?")
console.log((userP == 1 || userP == 3 || userP == 5 || userP == 7) ? "Yes" : "No")

/*Maybe it can be used with linux to make files have permissions*/ 