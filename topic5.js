var user = {
    first_name: "Haseena",
    last_name: "Begum",
    age: "21",
    department: "CSE"
    };
    console.log(user);
    console.log(Object.keys(user).length);
    delete user.last_name;
    console.log(user);
    console.log(Object.keys(user).length);