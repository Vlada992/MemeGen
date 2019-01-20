import React, {Component} from 'react';
import '../App.css';
import BodyRender from './BodyRender';






class Body extends Component {
    constructor(props){
        super(props);
        this.handleChange =   this.handleChange.bind(this);
        this.handleSubmit =   this.handleSubmit.bind(this);
        this.getBase64Image = this.getBase64Image.bind(this);
        this.state = {
            topText:'Top Text',
            bottomText:' Bottom Text',
            randomImg:'https://i.imgflip.com/1otk96.jpg',
            allMemes: [],
            memeName:'',
            hideOrshow: 'showhideimg',
            currentImagebase64: null,
            topY: "10%",
            topX: "50%",
            bottomX: "50%",
            bottomY: "90%",
            selectedFile:'',
            allFonts:''
        }
    };


    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(dataHere =>  dataHere.json()
        )
        .then( response => {
            const {memes} = response.data;
            this.setState({ allMemes: memes })
    
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDiLaPS4sIZ07PDUySo4FTZiLigDcfwRgk')
        .then(data =>{
            return data.json();
        })
        .then(resp =>{
            console.log(resp);
            console.log('ARRAY:', resp.items[0].family)
            this.setState({ allFonts: resp.items })
        })

        })
    };


    handleChange(event){
        const {name, value} = event.target; //which is object, so take name, value  from DOM object, which is input here
        this.setState({ [name]:value })
    };


    handleSubmit(event){
        this.setState({selectedFile: ''})
        event.preventDefault()
        const randNum = Math.floor(Math.random() * Math.floor(this.state.allMemes.length));
        const eachMeme = this.state.allMemes[randNum].url;
        const eachMemeName = this.state.allMemes[randNum].name;
        const eachMemeWidth = this.state.allMemes[randNum].width;
        const eachMemeHeight = this.state.allMemes[randNum].height;
        this.setState({
            randomImg:eachMeme,
            memeName: eachMemeName,
            memeWidth: eachMemeWidth,
            memeHeight: eachMemeHeight
        })
        setTimeout(() => {
            this.setState({hideOrshow: ''})
        }, 100)

        var baseImage = new Image();
        baseImage.setAttribute('crossOrigin', 'anonymous');
        baseImage.src =  this.state.selectedFile ?  this.state.selectedFile : eachMeme;
        baseImage.onload = () => {
        const base64 = this.getBase64Image(baseImage);
        this.setState({ currentImagebase64: base64 })
        }
    };


    //font method




    convertSvgToImage = () => {
        const svg =  this.child.svgRef
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

    


    getBase64Image(img){
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
    }


    fileSelectHandler = event => {
        this.setState({selectedFile: URL.createObjectURL(event.target.files[0]) })
    };


    render(){
        console.log('u body TO JE OVO:', this.state.allFonts)
        const allProps = [
            this.state,
            {
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            convertSvgToImage:  this.convertSvgToImage,
            getBase64Image:  this.getBase64Image,
            fileSelectHandler: this.fileSelectHandler
            }
        ];

        return (
            <div>
            <BodyRender  {...allProps}
            ref={(el) => { this.child = el; }}
            />
            </div>
        )
    };
}


export default Body;




