import React, {Component} from 'react';
import '../App.css';
import triangle from "../images/triangle1.png";


class Body extends Component {
    constructor(props){
        super(props);
        this.handleChange =   this.handleChange.bind(this);
        this.handleSubmit =   this.handleSubmit.bind(this);
        this.scrollToDiv =    this.scrollToDiv.bind(this);
       // this.getBase64Image = this.getBase64Image.bind(this); //this is test test test test test tes test test...

       // this.convertSvgToImage = this.convertSvgToImage.bind(this); //opet test test test test test

        this.state = {
            topText:'Top Text',
            bottomText:' Bottom Text',
            randomImg:'https://i.imgflip.com/1otk96.jpg',
            allMemes: [],
            memeName:'',
            hideOrshow: 'showhideimg',
            //currentImagebase64: null,
        }
    };

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(dataHere =>  dataHere.json()
        )
        .then( response => {
            const {memes} = response.data;
            this.setState({ allMemes: memes })
        })
        this.scrollToDiv();
    };


    componentDidUpdate() {
        this.scrollToDiv();
    };


      scrollToDiv() {
        this.el.scrollIntoView() //scrolovace do pocetka zeljenog diva/elementa.
      };


    handleChange(event){
        const {name, value} = event.target; //which is object, so take name, value  from DOM object, which is input here
        this.setState({ [name]:value })
    };


    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * Math.floor(this.state.allMemes.length));
        const eachMeme = this.state.allMemes[randNum].url
        const eachMemeName = this.state.allMemes[randNum].name
        this.setState({
            randomImg:eachMeme,
            memeName: eachMemeName,
        })
        setTimeout(() => {
            this.setState({hideOrshow: ''})
        }, 100)



       /* var baseImage = new Image();
        baseImage.src = eachMeme;
        console.log(baseImage);
        const base64 = this.getBase64Image(baseImage);
        console.log('basa 64:', base64)
        this.setState({ currentImagebase64: base64 })*/
        
    };


/*
    convertSvgToImage = () => {
        const svg = this.svgRef;
        console.log('sta je?', svg);
        let svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        const svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
        img.onload = function() {
          canvas.getContext("2d").drawImage(img, 0, 0);
          const canvasdata = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.download = "meme.png";
          a.href = canvasdata;
          document.body.appendChild(a);
          a.click();
        };
      }



    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        console.log('ovde je:',  dataURL)
        return dataURL;
    }
*/


    render(){
        return (
            <div>
            <div>
                <form onSubmit={this.handleSubmit} className='bodyCont' >

                <input
                style={{fontStyle:'italic', fontFamily:'Kristen ITC'}}
                 type='text' 
                 name='topText' 
                 placeholder='Top Text' 
                 value={this.state.topText}
                 onChange={this.handleChange}/>
                <input
                 style={{fontStyle:'italic', fontFamily:'Kristen ITC'}}
                 type='text' 
                 name='bottomText' 
                 placeholder='Bottom Text' 
                 value={this.state.bottomText} 
                 onChange={this.handleChange}/>

                {/*<button onClick={() => this.convertSvgToImage()} className="btn btn-primary">Download Meme!</button>*/}


                <button className='genbtncls' onClick={this.scrollToDiv}>
                <img src={triangle} alt='button img'/> Generate <img src={triangle} alt='button img'/>
                </button>
                </form>
            </div>

            
            <div  className='memeCont container'>
                 <h3 className='topTxt'>{this.state.topText.toUpperCase()}</h3> 
                 <h3 className='bottomTxt'>{this.state.bottomText.toUpperCase()}</h3>



                
            {/*<svg
              height={500}
              width={400}
              id="svg_ref"
              ref={el => { this.svgRef = el }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
                ref={el => { this.imageRef = el }}
                xlinkHref={this.state.currentImagebase64}
                height={500}
                width={400}
              />
              </svg>*/}



                 <img id='memeid' ref={el => { this.el = el; }} className={this.state.hideOrshow} title={this.state.memeName} src={this.state.randomImg} alt={this.state.memeName}/>
            </div>
            </div>
        )
    };
}


export default Body;
