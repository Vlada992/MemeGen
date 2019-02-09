import React from 'react';
import '../App.css';


class MemeForm extends React.Component {
    
    render(){
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
                
                {<select 
                style={{fontFamily: state.fontFam, height:55}}
                onClick={funcs.chooseFont}>
                {optSel}
                </select>
                }

                <div id='optionContDiv' style={{display:'flex', justifyContent:'flex-end', border:"1px solid gray"}}>
                 <label style={{paddingRight:'5px'}}>Opacity:</label>
                 <select
                 name='opacity'
                 onClick={funcs.filterAndOpacity}>
                 >
                 <option  value='1'>None</option>
                 <option  value='0.9'>0.9</option>
                 <option  value='0.7'>0.7</option>
                 <option value='0.5'>0.5</option>
                 <option value='0.3'>0.3</option>
                 <option value='0.1'>0.1</option>
                 </select>

                 <select
                 name='filter'
                 onClick={funcs.filterAndOpacity}>
                 >
                 <option value='none'>None</option>
                 <option  value='blur5'>blur</option>
                 <option value='hueRotate'>Color matrix</option>
                 <option value='saturate'>Saturate</option>
                 </select>
                 <input 
                 type='text'
                 name='middleText' 
                 placeholder='Middle Text'
                 style={{width:'100px', fontWeight:900, fontSize:'10px'}}
                 value={state.middleText} 
                 onChange={funcs.handleChange}/>
                 </div>

               
                <button  
                onClick={(ev) => funcs.convertSvgToImage(ev) } 
                className="btn btn-primary btndownload">
                Download Meme <span style={{fontSize:36}}> &#8599;</span>
                </button>
                <button 
                className='genbtncls'> 
                <span className='arrow1'>&#65086;</span> Generate <span className='arrow1'>&#65086;</span>
                </button>
                </form>
            </div>

            
            


            </div>
        )
    };
}


export default MemeForm;







