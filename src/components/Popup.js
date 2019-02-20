import React from 'react';

const Popup = props =>{
  let handleExit=()=>{
    alert("Are you sure you dont want to see the artist?")
  }
  let handleSubmit=()=>{
    alert("Your entry has been recorded. Please visit the site again.")
  }
  return(
    <div>
      <div>
        <h3 onClick={handleExit}>x</h3>
      </div>
        <h3>Hello Welcome to Our Page</h3>
      <div>
      <div>
        <h5>Please enter your details to buy tickets to the concert to {props.artist}</h5>
      </div>
      <form>
        <label>Email:</label>
        <input type="text"/>
        <input onClick={handleSubmit} type="submit"/>
      </form>
      </div>
    </div>

  )
}
// const divStyle = {
// 	  color: '#E3D458',
// 	  backgroundColor: '#C447B5',
// 	  textAlign: 'center',
// 	  padding: '40px',
// 	  margin: '50px',
// 	  borderRadius: '25px',
// 	  border: 'thick solid #99358D',
// 	  maxWidth: '1000px',
// 	  margin: 'auto',
// 	  marginTop: '20px',
// 	}
//
// 	const divIcon = {
// 	  textAlign: 'right',
// 	  fontWeight: 'bolder',
// 	  color: 'black',
// 	  fontSize: '30px',
// 	  marginTop: '-40px',
// 	  marginBottom: '-20px',
// 	  marginLeft: '915px',
// 	}
//
// 	const divPrizeButton = {
// 	  color: '#A555B4',
// 	  backgroundColor: '#6EB1B3',
// 	  border: 'medium solid #000000',
// 	  height: '29px',
// 	}
//
// 	const divPrizeLoc = {
// 	  marginTop: '-45px',
// 	  marginLeft: '684px',
// 	  width: '50px',
// 	}
//
// 	const divLabelLoc = {
// 	  width: '635px',
// 	  marginTop: '20px',
// 	  marginLeft: '46px',
// 	}
//
// 	const divLabel = {
// 	  backgroundColor: '#E3D458',
// 	  height: '28px',
// 	}
// const Popup = props => {
//   let handleExit = () => {
// 	  alert("Are you sure you don't want to see Tay Sway?")
// 	  }
//
// 	  let submission = () => {
// 	  alert("Your submission is completed, good luck!")
// 	  }
//
// 	  let text2 = "Please enter your email so we can send you the tickets"
//   return(
//     <div style={divStyle}>
// 	      <div style={divIcon}>
// 	        <button onClick={handleExit} >X</button>
// 	      </div>
//
// 	      <div>
// 	        <h3>You have won tickets to see {props.artist}!!</h3>
// 	      </div>
//
// 	      <div>
// 	        <h6>{text2}</h6>
// 	      </div>
//
// 	      <div>
// 	        <form>
// 	          <label>
// 	            <div style={divLabelLoc}>
// 	              <input type="text" name="name" placeholder="Your email here" style={divLabel}/>
// 	            </div>
// 	          </label>
//
// 	            <div style={divPrizeLoc}>
// 	              <input type="submit" value="CLAIM YOUR PRIZE HERE" onClick={submission} style={divPrizeButton}/>
// 	            </div>
// 	        </form>
// 	      </div>
// 	    </div>
// 	  );
// 	};

export default Popup;
