const Floatopt =[
    
      
        {
        name: 'none',
        display: `float: none;`,
        syntax: `The element does not float, (will be displayed just where it occurs in the 
text). This is default.`
       },
       {
        name: 'left',
        display: `float: left;`,
        syntax: `The element floats to the left of its container.`
       },
       {
        name: 'right',
        display: `float: right;`,
        syntax: `The element floats the right of its container.`
       },
       {
        name: 'inline-start',
        display: `float: inline-start;`,
        syntax: `The element must float on the start side of its containing block. That is the
left side with ltr scripts, and the right side with rtl scripts.`
       },
       {
        name: 'inline-end',
        display: `float: inline-end;`,
        syntax: `The element must float on the end side of its containing block. That is the 
right side with ltr scripts, and the left side with rtl scripts.`
       },
       {
        name: 'inherit',
        display: `float: inherit;`,
        syntax: `It is used to inherit the 'float' property value from the element's parent
element. Here the parent element's float propert is none.`
       },
       
      

];
export default Floatopt;