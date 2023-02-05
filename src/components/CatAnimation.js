import React, { Component } from 'react';
import './catAnimation.css';
import normalCat from "./gifs/normal-cat.gif";
import sleepyCat from "./gifs/sleepy-cat.gif";
import eatingCat from "./gifs/peach-cat-ramen.gif";
import playingCat from "./gifs/playing-football.gif";
import heart from "./gifs/heart.gif";



class CatAnimation extends Component{

    state={
        currentCat:normalCat,
        numberOfHearts:1,
        hearts:[],

    }






    feedCat=()=>{
        this.setState({
            currentCat:eatingCat,   
        });
        setInterval(()=>{
            this.setState({currentCat:normalCat})
        }, 4000);

        if(this.state.numberOfHearts<3){
            this.setState({
                numberOfHearts:this.state.numberOfHearts+1,
            hearts:this.state.hearts.concat(<img src={heart} className="heart" alt="heart" width="50px" height="50px"/>)
            })
        }

    }


    playGames=()=>{
        this.setState({currentCat: playingCat});
        setInterval(()=>{
            this.setState({currentCat:normalCat})
        }, 4000);

    }

    componentDidMount() {

        for(let i=1;i<=this.state.numberOfHearts;i++){
            this.setState({hearts:this.state.hearts.concat(<img src={heart} className="heart" alt="heart" width="50px" height="50px"/>)});

        }

        this.interval = setInterval(() => {
            this.decreaseHeart();
          }, 10000);

        this.interval = setInterval(() => {
            let date = new Date();
       let hour=date.getHours();
       if(hour>=22 || hour <=5){
        this.setState({currentCat:sleepyCat});
       }
       else{
        this.setState({currentCat:normalCat});
       }    

        }, 1000);

        
   
         



    }



       


    render(){

       

        return(
            <div id='shell'>
                <div id='cat-animation'>
                    <img src={`${this.state.currentCat}`} id="cat-gif" alt="Normal cat" width="200px" height="200px"/>
                </div>

                <div id="buttons">
                    <button onClick={this.feedCat}>Feed Cat</button>
                    <button onClick={this.playGames}>Play Games</button>
                </div>
                <div id="hearts-container">
                {this.state.hearts}
                </div>

                {this.state.currentCat===sleepyCat?<p id="sleep-info">The cat is sleeping between 10 p.m. and 5 a.m.</p>:null}



            </div>

        )
    }


}

export default CatAnimation;