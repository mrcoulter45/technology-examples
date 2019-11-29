fn main() {
    //********************************************
    // Prints and Comments
    //********************************************
    // This is a print statement
    println!("Hello World");
    
    /*
        This is a
        multiline
        comment
    */
    
    //********************************************
    // Variables
    //********************************************
    let x0 = 5;
    // allow y0 to be mutable
    let mut y0 = 10;
    println!("The value of x0 is: {}", x0);
    println!("The value of y0 is: {}", y0);
    y0 = 15;
    println!("The value of y0 is: {}", y0);
    
    //********************************************
    // Variable Data Types
    //********************************************
    let x1 = 5; // defaults to i32 (signed 32 bit integer)
    let y1: u64 = 10; // y1 specified to unsigned 64 bit integer
    let z1 = 4.2; // defaults to f32 (32 bit floating point)
    let a1: f64 = 8.2; // 64 bit floating point
    let b1: bool = true; // boolean
    println!("Values of x1, y1, z1, a1, b1: {} {} {} {} {}", x1, y1, z1, a1, b1);
    
    //********************************************
    // If Statements
    //********************************************
    let n2 = 50;
    // parentheses not required for if statements
    if n2 < 50 {
        println!("n2 is less than 50");
    } else if n2 == 50 {
        println!("n2 is equal to 50");
    } else {
        println!("n2 is greater than 50");
    }
}
