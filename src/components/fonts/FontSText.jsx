import React from 'react'

const FontSText = () => {
  return (
    
    <>
       <div>
       <h1 className='ml-12 mt-7 font-sans '>Values :</h1>
        <h2 className='ml-12 mt-7 text-xl font-sans '>
        "family-name" :</h2>
        <p className='ml-12 mt-7 text-lg font-sans' >The name of a font family. For example, "Times" and "Helvetica" are font families. 
        Font family names containing whitespace should be quoted. For example: "Comic Sans MS".</p>
        <h2 className='ml-12 mt-7 text-xl font-sans '> "Generic-name" :</h2>
        <p className='ml-12 mt-7 text-lg font-sans'>
        Generic font families are a fallback mechanism, a means of preserving some of the style 
        sheet author's intent when none of the specified fonts are available. Generic family names are 
         keywords and must not be quoted. A generic font family should be the last item in the list of 
          font family names. The following keywords are defined:
        </p>
        
        
       </div>
    </>
  )
}

export default FontSText