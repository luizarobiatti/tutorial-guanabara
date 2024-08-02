let variables = "can change";
    const VARIABLES = "don't change";
    const ON = true;
    const OFF = !ON;
    const SWITCH = 2;
    variables = "let variables " + variables +
     ", I changed now.";
    
    console.log(variables);
    console.log(OFF);
    console.log(SWITCH === 2);
    console.log(SWITCH !== 2);
    if (SWITCH === 2) {
        console.log("switch is two");
    } else if (SWITCH > 2) {
        console.log("is great")
       }