const StyleOption =[
      
        {
        name: 'oblique',
        display: `font-style: oblique;`,
        syntax: `Selects a font that is classified as oblique. If no oblique version of the face is 
available, one classified as italic is used instead. If neither is available, the 
style is artificially simulated`
       },
       {
        name: 'normal',
        display: `font-style: normal;`,
        syntax: `Selects a font that is classified as normal within a font-family.`
       },
       {
        name: 'italic',
        display: `font-style: italic;`,
        syntax: `Selects a font that is classified as italic. If no italic version of the face is 
available, one classified as oblique is used instead. If neither is available,the 
style is artificially simulated.`
       },
       {
        name: 'initial',
        display: `font-style: initial;`,
        syntax: `This property value of the font-style property is used to make the font oblique. Oblique fonts are the 
sloped versions of the font. initial. Using this value, the browser will display the initial font 
style that is the default. Basically, this value sets the property to its default value.`
       }
      
      
      
];
export default StyleOption;