import './App.css';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { useState, useEffect } from 'react'
import marked from 'marked'
import Box from '@material-ui/core/Box'
import { useRef } from 'react';


function App() {
  
const componentRef = useRef();

const textoInicio = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
   
const [textoConverter, setTextoConverter] = useState( (textoInicio));   
const agregarTexto= (e) => {
      setTextoConverter(e.target.value, ...textoConverter)    
  } 
useEffect(() => {
  componentRef.current.innerHTML= marked(textoConverter)
}, [textoConverter])

  return (
    
    <div className="App">

        <Grid container spacing={1}>

          <Grid item xs={12} md={6}>
            <Paper style={{padding:'2rem',minHeight:'30rem'}} >
              <TextField              
                multiline
                fullWidth 
                value= {textoConverter}               
                onChange={ (e) => agregarTexto(e)}
                variant="outlined"
                id="editor"            
                
              />
            </Paper> 
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper  style={{padding:'2rem' ,minHeight:'30rem'}} >
              <Box id="preview"  ref={node => componentRef.current = node}>
                 
              </Box>                          
            </Paper>  
          </Grid>                        
         
          
        </Grid>

      

    </div>
  );
}

export default App;
