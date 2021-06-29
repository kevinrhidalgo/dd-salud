import React from 'react'
import './Blog2.css'

const blogImg={
	marginTop:'20px',
	marginBottom:'-40px',
	marginLeft:'10px'
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

function BlogTwo() {

    return (
		<div className='firstBlog'>

<div className='blogPostOne'>
        <div style={blogImg} className='workingOut'></div>
	    <div style={blogImg} className='running'></div>
		<div style={blogImg} className='frame'></div>
        <div style={blogImg} className='board'></div>
		

	</div>

	<div className='blogPostOne'>
	<div className='postDesc'>
		<h1 style={blogTitle}>Small Steps, Big Benefits </h1>
		<h5 style={blogWriter}>By: Soley McWilliam</h5>
		<br/>
		<br/>
		<p style={blogData}>
		Growing up I never worked out. I chose video games over physical activities, and had Kool-Aid and Froot Loops every day.
		 It wasn’t until my 40s, weighing around 300 pounds, that I decided I needed a lifestyle reboot. A few simple diet changes, like dropping
		  sugary soda and limiting beer and desserts, it helped me lose 50 pounds. But I quickly hit a plateau and knew it was time to start moving.
		</p>
		<p style={blogData}>
		The details of a workout schedule stressed me out at first. When do you exercise? Who takes the kids to school? Who makes dinner?”
		 After a few months of putting it off, I decided to just walk. Not long after, when I was walking my typical route around a tennis court,
		  I decided to pick it up and run the length of one side. Then, I ran two sides, then three, then a full loop, until I ran my first
		   mile in 2014.
		</p>
		<p style={blogData}>
		I was keeping it a secret at this point and I remember taking my kids to the park one day. They were on the bikes and got far ahead of me,
		 so I decided to run to catch up. The look on my daughter’s face when she saw me running was like she saw Santa Claus. That’s when I
		  started taking my one-mile jogs up to a 5k, 10k, half-marathon and eventually, marathon distance.
		</p>
		<p style={blogData}>
		What motivated me to keep going was that it wasn’t as hard as I made it out to be. I lost a total of 140 pounds and i have kept it off for 
		four years now. People tend to make these huge decisions, like joining a gym or signing up for bootcamp, but I just made a tiny choice to 
		take a walk around the block. I always try to remind myself that those little decisions snowball, positive or negative.”
		</p>
		<p style={blogData}>
		People always ask the hardest thing about losing weight, and I respond that it was saying no to buttered popcorn at the movies. 
		Exercise for me is not about running a marathon, it’s about those daily decisions to just go outside.”
		</p>
		
    </div>
		</div>
		</div>
		)
	}
	
	
	export default BlogTwo;