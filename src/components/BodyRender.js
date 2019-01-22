import React from 'react';
import '../App.css';


class BodyRender extends React.Component {
    
    render(){
     console.log('prolazi prvi:', this.props[0].allFonts) 
     const selctFile = this.props[0].selectedFile;
     const state = this.props[0], funcs = this.props[1]    
     let optSel = this.props[0].allFonts.map((val, ind) => {
         return <option value={val.family} key={ind}>{val.family}</option>
     })

        return (
            <div> 
            <div>
                <form onSubmit={funcs.handleSubmit} className='bodyCont'>
                <input 
                style={{border:'1px solid gray'}} 
                type='file' 
                onChange ={funcs.fileSelectHandler}
                
                />
                <input
                 style={{fontStyle:'italic', fontFamily:'Kristen ITC'}}
                 type='text' 
                 name='topText' 
                 placeholder='Top Text' 
                 value={state.topText}
                 onChange={funcs.handleChange}/>
                <input
                 style={{fontStyle:'italic', fontFamily:'Kristen ITC'}}
                 type='text' 
                 name='bottomText' 
                 placeholder='Bottom Text' 
                 value={state.bottomText} 
                 onChange={funcs.handleChange}/>
                
                <select 
                style={{fontFamily: state.fontFam, height:55}} 
                onClick={funcs.chooseFont}>
                 

                <option value="impact">Impact</option>
                <option  value="Algerian">Algerian</option>
                <option  value="Verdana"> Verdana</option>
                <option  value="Arial"> Arial</option>
                <option  value="Bauhaus 93"> Bauhaus 93</option>
                <option  value="Bernard MT"> Bernard MT</option>
                <option  value="Calibri"> Calibri</option>
                <option  value="Times New Roman">Times New Roman</option>
                <option  value="Courier"> Courier</option>
                <option  value="ABeeZee"> ABeeZee  </option>
                <option  value="Aclonica"> Aclonica  </option> 

                </select>


                <select 
                onClick={funcs.chooseFont}>
                {optSel}
                </select>

                <button  
                onClick={() => funcs.convertSvgToImage()} 
                className="btn btn-primary btndownload">
                Download Meme <span style={{fontSize:36}}> &#8599;</span>
                </button>
                <button 
                className='genbtncls'> 
                <span className='arrow1'>&#65086;</span> Generate <span className='arrow1'>&#65086;</span>
                </button>
                </form>
            </div>

            
            <div  className='memeCont container'>
            <svg
             height={selctFile  ? 550 : state.memeHeight}
             width={selctFile  ? 550 : state.memeWidth}
             id="svg_ref"
             ref={el => { this.svgRef = el }}
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
                ref={el => { this.imageRef = el }}
                xlinkHref={state.currentImagebase64}
                height={selctFile  ? 550 : state.memeHeight}
                width={selctFile  ? 550 : state.memeWidth}
              />
              <text
              style={{ fill:'white',  fontFamily: state.fontFam}}
              className='topTxt'
              dominantBaseline="middle"
              textAnchor="middle"
              x={state.topX}
              y={selctFile  ? "35%" : state.topY}
              >
              {state.topText.toUpperCase()}
              </text >

              <text
              style={{ fill:'white', fontFamily: state.fontFam}}
              className='bottomTxt'
              dominantBaseline="middle"
              textAnchor="middle"
              x={state.bottomX}
              y={selctFile ? "65%" : state.bottomY}
              > 
              {state.bottomText.toUpperCase()}
              </text>
              </svg>
            </div>
            </div>
        )
    };
}


export default BodyRender;





