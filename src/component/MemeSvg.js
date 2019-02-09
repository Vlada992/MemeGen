import React from 'react';
import '../App.css';


class MemeSvg extends React.Component {
    
    render(){
     const selctFile = this.props[0].selectedFile;
     const state = this.props[0];   

        return ( 
            <div  className='memeCont container'>
            <svg
             height={selctFile  ? 550 : state.memeHeight}
             width={selctFile  ? 550 : state.memeWidth}
             id="svg_ref"
             ref={el => { this.svgRef = el }}
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
             
              <filter id='myFilter'>
              <feGaussianBlur stdDeviation={state.blur5.slice(4,5)} />
              <feColorMatrix type={state.hueRotate} values='180' />
              <feColorMatrix type={state.saturate} values="0" result="desat"/>
              </filter>
              <image
              style={{opacity: state.opacity}}
              ref={el => { this.imageRef = el }}
              xlinkHref={state.currentImagebase64}
              height={selctFile  ? 550 : state.memeHeight}
              width={selctFile  ? 550 : state.memeWidth}
              filter="url(#myFilter)"
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
              y={selctFile ? "35%" : "50%"}
              > 
              {state.middleText !== 'Middle Text' ? state.middleText.toLowerCase() : null}
              </text>
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
        )
    };
}


export default MemeSvg;





