// check that files are linked
console.log("20 11 25 - JavaScript Conditionals Practice");

// prompt user for name, role, and rank
let userName = prompt("enter your name");
let userRole = prompt("enter your role - owner, admin, contributor");
let userRank = parseInt(prompt("enter your rank - 1, 2, 3, 4"));
// display user's info in console
console.log(`Name : ${userName}. Role : ${userRole}. Rank : ${userRank}`);

// determine user's role
if(userRole == "owner")
{
    alert(`${userName} is an owner`);
} else if(userRole == "admin")
{
    alert(`${userName} is an admin`);
} else if(userRole == "contributor")
{
    alert(`${userName} is a contributor`);
} else {
    alert(`${userName} did not enter a valid role.`);
}

// determine high rank and role
if(userRole == "owner" && userRank <= 2)
{
    alert(`${userName} has full read and write access`);
} else {
    alert(`${userName} does not have full read and write access`);
}

// determine high rank or role
if(userRole == "owner" || userRole == "admin" || userRank == 1)
{
    alert(`${userName} has full read access`);
} else {
    alert(`${userName} needs permission for certain actions`);
}
