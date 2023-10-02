// font family options data
const FontOptions = [
    {
      name: 'system-ui',
      display: `font-family: system-ui;`,
      syntax: `Glyphs are taken from the default user interface font on a given platform. 
Because typographic traditions vary widely across the world, this generic is
provided for typefaces that don't map cleanly into the other generics.`
     },
    { name: 'Arial',
      display: `font-family: Arial;`,
      syntax: `Arial contains more humanist characteristics than many of its predecessors and as
such is more in tune with the mood of the last decades of the twentieth century.
The overall treatment of curves is softer and fuller than in most industrial style
sans serif faces.`
     },
     
    { name: 'Courier New', 
      display: `font-family: Courier New;`,
      syntax: `Courier New is a monospaced font family known for its distinctive typewriter-like 
appearance. It features fixed-width characters, where each character takes up the
same amount of horizontal space, making it easy to align text in columns.` }, 

    { name: 'Georgia', 
      display: `font-family: Georgia;`,
      syntax: `Georgia is a serif font family designed for digital screens and print. It is known for 
its elegant and traditional appearance, with distinctive serifs on the characters. 
Georgia's design combines readability with a touch of sophistication, making it suitable
for both online and offline content.` }, 

    { name: 'Verdana', 
      display: `font-family: Verdana;`,
      syntax: `The Verdana fonts exhibit characteristics derived from the pixel rather than the pen, the brush or 
the chisel. The relationship between straight, curved and diagonal strokes has been painstakingly
developed to ensure that the pixel patterns at small sizes are pleasing, clear and legible.` },

    { name: 'Tahoma', 
      display: `font-family: Tahoma;`,
      syntax: `Tahoma is one of Microsoft's new sans serif typeface families. It consists of two Windows TrueType fonts 
(regular and bold), and was created to address the challenges of on-screen display, particularly at small
sizes in dialog boxes and menus.` }, 
          
    { name: 'Serif', 
      display: `font-family: serif;`,
      syntax: `Glyphs have finishing strokes, flared or tapering ends, or have actual serifed endings.`
      }, 

        
     { name: 'Sans-serif', 
       display: `font-family: Sans-Serif;`,
       syntax: `Glyphs have stroke endings that are plain.` }, 

    
    { name: 'Monospace', 
      display: `font-family: Monospace;`,
      syntax: `All glyphs have the same fixed width.` }, 


    { name: '"Courier New", Courier, monospace', 
      display: `font-family: "Courier New", Courier, monospace ;`,
      syntax: `The font-family declaration "Courier New", Courier, monospace; specifies the use 
of the Courier New typeface as the preferred font, with a fallback to the generic
Courier font and, if necessary, any available monospace font.` }, 

          
    { name: 'Cursive', 
      display: `font-family: Cursive;`,
      syntax: `Glyphs in cursive fonts generally have either joining strokes or other cursive
characteristics beyond those of italic typefaces. The glyphs are partially or
completely connected, and the result looks more like handwritten pen or brush
writing than printed letter work.` }, 


     { name: '"Brush Script MT", cursive', 
       display: `font-family: "Brush Script MT", cursive;`,
       syntax: `"Brush Script MT" is a cursive font family known for its elegant and handwritten appearance. 
It simulates the look of handwritten script with flowing, brush-like strokes, giving it a 
distinct and personalized feel. This font style is often chosen for its decorative and 
artistic qualities, making it suitable for various creative and informal design projects,
such as invitations, greeting cards, and artistic displays. "Brush Script MT" adds a touch
of whimsy and personality to text, making it an excellent choice for conveying a warm and
inviting atmosphere in printed and digital materials.` }, 

    
        { name: 'Fantasy', 
          display: `font-family: Fantasy;`,
          syntax: `Fantasy fonts are primarily decorative fonts that contain playful representations
of characters.` }, 


        { name: 'Copperplate, Papyrus, fantasy', 
          display: `font-family:Copperplate, Papyrus, fantasy ;`,
          syntax: `This declaration tells the browser to use the first available font from the list, and if that 
font is not available on the user's device, it should fall back to the next font in the list, 
and so on until a suitable font is found or until a generic font type (like "serif," 
"sans-serif," or "monospace") is used as a last resort.` }, 

          {
            name: 'emoji',
            display: `font-family: emoji;`,
            syntax: `Fonts that are specifically designed to render emoji.`
           },
           {
            name: 'math',
            display: `font-family: math;`,
            syntax: `This is for the particular stylistic concerns of representing mathematics:
superscript and subscript, brackets that cross several lines, nesting
expressions, and double struck glyphs with distinct meanings.`
           },
           {
            name: 'fangsong',
            display: `font-family: fangsong;`,
            syntax: `A particular style of Chinese characters that are between serif-style Song and
cursive-style Kai forms. This style is often used for government documents.`
           },
           {
            name: 'inherit',
            display: `font-family:inherit ;`,
            syntax: `instructs an element to inherit its font-family property from its closest parent element. 
This ensures that the element's text uses the same font-family as its parent, contributing to 
a consistent and harmonious typography style within a document or web page. It allows for the 
propagation of font choices from parent to child elements, simplifying the management of font 
styles and maintaining design cohesion.`
           },

          ];
  
  export default FontOptions