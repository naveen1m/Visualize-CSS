const WeightOptions =[
    {
        name: 'normal',
        display: `font-Weight: normal;`,
        syntax: `Normal font weight. Same as 400`
       },
       {
        name: 'bold',
        display: `font-Weight: bold;`,
        syntax: `Bold font weight. Same as 700.`
       },
       {
        name: 'bolder',
        display: `font-Weight: bolder;`,
        syntax: `One relative font weight heavier than the parent element. `
       },
       {
        name: 'lighter',
        display: `font-Weight: lighter;`,
        syntax: `One relative font weight lighter than the parent element. `
       },
       
       {
        name: '100',
        display: `font-Weight: 100;`,
        syntax: `Font weight 100 is the lightest and thinnest variation of a typeface. It represents the lowest level of thickness 
or boldness within a font family.`
       },
       {
        name: '900',
        display: `font-Weight: 900;`,
        syntax: `Font weight 900 is the boldest and heaviest variation of a typeface. It represents the maximum level of thickness 
or boldness within a font family. Text set with a font weight of 900 appears exceptionally strong and commanding, 
making it well-suited for attention-grabbing headlines, titles, or other text elements that require maximum visual
impact.`
       },
];
export default WeightOptions;