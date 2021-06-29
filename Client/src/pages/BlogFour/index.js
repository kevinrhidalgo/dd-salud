import React from 'react'
import './Blog4.css'

const blogImg={
	margin:'20px'
}
const blogTitle={
	fontFamily: 'Viaoda Libre',
	fontSize: '40px',
	width:'300px',
}
const blogWriter={
color:'teal',
fontSize:'12px',
marginTop:'30px'
}
const blogData={
	fontFamily: 'Georgia, Times New Roman, Times, serif',
}

function BlogFour() {

    return (
		<div className='firstBlog'>

		<div className='blogPostOne'>
				<div style={blogImg} className='foodChart'></div>
				<div style={blogImg} className='platter'></div>
				<div style={blogImg} className='female'></div>
				<div style={blogImg} className='mealPlanImg'></div>
				
		
			</div>
		
			<div className='blogPostOne'>
			<div className='postDesc'>
		<h1 style={blogTitle}>From Dieting to Healthy Eating Habits</h1>
		<h5 style={blogWriter}>By: Francheska Frances</h5>
		<br/>
		<br/>
		<p style={blogData}>	
I am no stranger to dieting. Over the years, I followed many different weight-loss plans. 
Each plan worked for a while, but eventually I would go back to my old eating habits and my weight would go back up. 
Initially the way i saw dieting was there is this mind-set that this is a diet. And when I get to my goal weight, then 
I don't have to do the diet anymore.
		</p>
		<p style={blogData}>
		I found that with each diet it got a little harder to lose the weight. So when my employer decided to offer a yearlong healthy-weight
		 program that focused on making lasting changes instead of temporary dieting, I was eager to try it.
		 I think I was at a spot where I was mentally prepared and wanting to do stuff.
		I've been on the American Heart Association Diet. I've been on the diabetic diet. I've been on South Beach. 
		I've had success in the past. But I needed something that was going to work and stay with me.
		</p>
		<p style={blogData}>
		I lost 35 pounds over a year on the healthy-weight program. But more important I learned a new set of eating habits that she can live with.
		An important part of my program was setting realistic goals that I could turn into long-term habits. I identified small changes I could make, 
		such as eating an apple instead of a doughnut for a morning snack. Then I would try that strategy for 1 week. If it was something that I was
		 easily able to do, I would add it to my list of healthy eating habits. If it didn't work well for myself, I would try another type of healthy 
		 eating change the next week.
		</p>
		<p style={blogData}>
		Making one change at a time helped myself sort through all the nutrition advice I had heard and pick out only the things that worked well for 
		myself. And it allowed myself to try a variety of healthy eating strategies without feeling like a failure if something didn't work with my lifestyle.
		</p>
		<p style={blogData}>
		This time I have more of a sense that this is not just a diet. It's a health habit. I just feel like it's a part of my life now, and it's not something 
		that I'm going to stop when the diet gets over.
		</p>
		</div>
		</div>
		</div>
		)
	}
	
	
	export default BlogFour;