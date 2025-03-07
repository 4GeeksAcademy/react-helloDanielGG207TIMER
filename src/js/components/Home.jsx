import React from "react";
import Digits from "./Digits";



function Home (props) {
	let time = props.time
	let numberArray =  time.toString().split('').map(Number)
	 if (numberArray.length < 6 )
		for(let i = numberArray.length ; i < 6 ; i++ )
	     numberArray.unshift(0)
	
	console.log(numberArray)
	return (
		<div className="container mt-5">
          <div class="row">
		   <Digits number = {<i className="fa-solid fa-clock"></i>}/>
           <Digits number = {numberArray[0]}/>
		   <Digits number = {numberArray[1]}/>
		   <Digits number = {numberArray[2]}/>
		   <Digits number = {numberArray[3]}/>
		   <Digits number = {numberArray[4]}/>
		   <Digits number = {numberArray[5]}/>
		  </div>
		  

		  </div>
		  
			
    
		
	)
}

export default Home;