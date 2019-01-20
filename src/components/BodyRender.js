import React from 'react';
import '../App.css';


class BodyRender extends React.Component {


    

    render(){
        const fontShort = this.props[0].allFonts
        console.log(this.props[0])
        console.log('u bodi renderr:', this.props[0])
        //console.log(this.props[0].allFonts[0].family)
        return (
            <div> 
            <div>
                <form onSubmit={this.props[1].handleSubmit} className='bodyCont'>
                <input style={{border:'1px solid gray'}} type='file' onChange ={this.props[1].fileSelectHandler}/>
                <input
                 style={{fontStyle:'italic', fontFamily:'Kristen ITC'}}
                 type='text' 
                 name='topText' 
                 placeholder='Top Text' 
                 value={this.props[0].topText}
                 onChange={this.props[1].handleChange}/>
                <input
                 style={{fontStyle:'italic', fontFamily:'Kristen ITC'}}
                 type='text' 
                 name='bottomText' 
                 placeholder='Bottom Text' 
                 value={this.props[0].bottomText} 
                 onChange={this.props[1].handleChange}/>
                
                <select>
                <option value="impact">Impact</option>
                <option value="impact"> {/* {this.props[0].allFonts[0].family} */} </option>

               
                </select>


                <button  onClick={() => this.props[1].convertSvgToImage()} className="btn btn-primary btndownload">Download Meme! </button>
                <button className='genbtncls'> <span className='arrow1'>&#65086;</span> Generate <span className='arrow1'>&#65086;</span>
                </button>
                </form>
            </div>

            
            <div  className='memeCont container'>
            <svg
             height={this.props[0].selectedFile ? 550 : this.props[0].memeHeight}
             width={this.props[0].selectedFile ? 550 : this.props[0].memeWidth}
              id="svg_ref"
              ref={el => { this.svgRef = el }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
                ref={el => { this.imageRef = el }}
                xlinkHref={this.props[0].currentImagebase64}
                height={this.props[0].selectedFile ? 550 : this.props[0].memeHeight}
                width={this.props[0].selectedFile ? 550 : this.props[0].memeWidth}
              />
              <text
              style={{ fill:'white'}}
              className='topTxt'
              dominantBaseline="middle"
              textAnchor="middle"
              x={this.props[0].topX}
              y={this.props[0].selectedFile ? "35%" :  this.props[0].topY}
              >
              {this.props[0].topText.toUpperCase()}
              </text >

              <text
              style={{ fill:'white'}}
              className='bottomTxt'
              dominantBaseline="middle"
              textAnchor="middle"
              x={this.props[0].bottomX}
              y={this.props[0].selectedFile ? "65%" :  this.props[0].bottomY}
              > 
              {this.props[0].bottomText.toUpperCase()}
              </text>
              </svg>
            </div>
            </div>
        )
    };
}


export default BodyRender;





