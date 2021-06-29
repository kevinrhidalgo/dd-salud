import React, { useEffect, useContext, useState } from 'react'
import MealList from "../../components/MealList/MealList";
//using this to authenticate the user for when it tries to access this page
import { UserContext } from "../../utils/UserContext";
import './Recipes.css'

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
const blogTitle={
	fontFamily: 'Viaoda Libre',
	fontSize: '45px',
	width:'750px',
	marginBottom:'30px',
	color:'#222222'
}
const blogData={
	fontFamily: 'Georgia, Times New Roman, Times, serif',
	width:'550px',
	fontSize:'14px',
	color:'#222222'
}
const readySet={
	fontFamily: 'Georgia, Times New Roman, Times, serif',
	fontSize:'17px',
	color:'teal',
}

function ProtectedRoute() {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);

	const [user, dispatch] = useContext(UserContext)
	console.log(user)

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, );
	function getMealData() {
		fetch(
		  `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
		)
		  .then((response) => response.json())
		  .then((data) => {
			setMealData(data);
		  })
		  .catch(() => {
			console.log("error");
		  });
	  }
	
	  function handleChange(e) {
		setCalories(e.target.value);
	  }

	return (
		<>
		<div className='recipes'>
		<div className='recipePlan'>
          <h1 style={blogTitle}>Let's see what meal combinations you get</h1>
		</div>
		<div className='recipePlan'>
		  <p style={blogData}>Generate a random combination of meals based on the amount of calories you plan to intake for the day. Check out each Recipe
			  for the meal generated and plan your day or even week. Not happy with the the combinartion received, generate again.
		  </p>
		</div>
		  <div className='recipePlan'>
		  <p style={readySet}>
			  Ready to give it a shot. Lets see what combo you generate
		  </p>
		</div>
		
		<div className='recipePlan'>
				<div className="appSec">
					
      <div className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
	<div className='mealBtn'>
        <button onClick={getMealData}>Get Daily Recipe Plan</button>
		</div>
      </div>
      {mealData && <MealList mealData={mealData} />}
    </div>
	</div>
	</div>

</>
	)

}

export default ProtectedRoute