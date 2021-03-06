import React from 'react'
import './Blog3.css'

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


function BlogThree() {

    return (
		<div className='firstBlog'>

		<div className='blogPostOne'>
				<div style={blogImg} className='eatingHands'></div>
				<div style={blogImg} className='fork'></div>
				<div style={blogImg} className='focus'></div>
				<div style={blogImg} className='foodBoard'></div>
				
		
			</div>
		
			<div className='blogPostOne'>
			<div className='postDesc'>
		<h1 style={blogTitle}>Focus on Eating Habits</h1>
		<h5 style={blogWriter}>By: Melody Caban</h5>
		<br/>
		<br/>
		<p style={blogData}>
		The first step I took toward healthy eating was to stop going to fast-food restaurants. I used to eat fast food as often as 4 times a week.
		 To my surprise, I found that giving up fast food wasn't that hard, to the point where i feel like I don't enjoy it anymore.
When I does go out to eat, I try to pick menu items that I knows are healthier. I order salads and lower-fat sandwiches instead of hamburgers,
 and I drinks water instead of soda pop. I try to order things that I know I can modify or are already prepared the way I would like them to be 
 prepared.
		</p>
		<p style={blogData}>
		Planning meals has been a key to my success. It helps me avoid the trap of getting too hungry and resorting to fast food. Each week I 
		plan what I will eat for each meal, and I shop for groceries with my plan in mind. It's a lot easier to make healthy choices when you're 
		just planning ahead for it.
		</p>
		<p style={blogData}>
		I've  always enjoyed cooking. Now I experiment with ways to make recipes healthier. I used whole wheat flour instead of white flour, and olive 
		oil instead of butter. The cooking styles that I do now just involve a healthier way to cook the foods that I already liked.
Cooking allows me to have more control over his food choices. If you're going to prepare it yourself, you're much better off than if you were going to buy it already packaged. You know exactly what's in it.
		</p>
		<p style={blogData}>
		Rather than cutting out certain foods, I sometimes include my favourite foods in my eating plan. 
		That way I don't feel like I'm letting myself down by not sticking to my plan.
		</p>
		<p style={blogData}>
		For myself, there have been no drawbacks to changing the way I eat. I acknowledged that it takes planning to eat healthfully. But I know
		 that it's worth the effort. As a result of my changes, I am back to a healthy weight and have the energy to do the activities that I want
		  to do. It's just something that's been really positive for me.
		</p>
		</div>
		</div>
		</div>
		)
	}
	
	
	export default BlogThree;