// text decoration data
const DecorationOption =[
    {
        name: 'overline',
        display: `text-decoration: overline;`,
        syntax: `overline : draws a 1px line across the text, directly above its “top” point.`
       },
       {
        name: 'line-through',
        display: `text-decoration: line-through;`,
        syntax: `A line-through is a text-decoration that adds a line through the text to sort 
of cancel it out. This can make the text a little difficult to read, but it can 
also be a useful way to “redact” information without eliminating it entirely.`
       },
       {
        name: 'underline',
        display: `text-decoration: underline;`,
        syntax: `underline : draws a 1px line across the text at its baseline. line-through :
draws a 1px line across the text at its “middle” point. `
       },
       {
        name: 'overline underline',
        display: `text-decoration: overline underline;`,
        syntax: `text-decoration: overline underline; means that the text will have both an 
overline and an underline simultaneously. `
       },
       {
        name: 'underline dotted',
        display: `text-decoration: underline dotted;`,
        syntax: `it means you are applying an underline to the text with a dotted line style.`
       },
       {
        name: 'underline dotted red',
        display: `text-decoration: underline dotted red;`,
        syntax: `it specifies that the text should be underlined with a red dotted line. `
       },
      
       {
        name: 'underline overline #FF3028',
        display: `text-decoration: underline overline #FF3028;`,
        syntax: `it allows you to apply multiple text decorations to an element, including both 
underlines and overlines, and specify their color using hexadecimal color codes
like #FF3028`
       },
      
       
       
];
export default DecorationOption;