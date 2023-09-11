import { useState } from 'react';// for displaying text in the display box
import {marked} from 'marked';   // for markdown stuff
import './App.css';

function App() {
  const [text,setText]=useState(`
   # Hey
   ## This challenge was fun
   [music](https://youtu.be/dQw4w9WgXcQ)
  \`text\`
  \`\`\`
  {
    "animal": "Dog",
    "name": "Cookie",
    "age": 1
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > Blockquote
  ![alt text](scape.jpg)
  **bold text**
  `);// we use back quote to enter code inside the display box

  marked.setOptions({ //interprets carriage returns and renders then as <br>(line break) element
    breaks:true
  })

  return (
    <div className="App" >
    <h3>Editor</h3>
    <textarea id="editor" onChange={(event)=>{setText(event.target.value)}}  value={text}>
    </textarea>
    <h3>Previewer </h3>
    <div className='previewer'>
      <div 
        id="preview" 
        dangerouslySetInnerHTML={{__html:marked(text),}} 
        ></div>   
    </div>
     
    </div>
  );
}

export default App;