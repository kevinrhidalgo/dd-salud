import React from 'react'
import './Blog1.css'

const blogImg={
	margin:'10px',
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

function BlogOne() {

    return (
		<div className='firstBlog'>
		
	<div className='blogPostOne'>
		
	    <div style={blogImg} className='buffalo'></div>
		<div style={blogImg} className='burger'></div>
        <div style={blogImg} className='rice'></div>
		<div style={blogImg} className='salad'></div>

	</div>
<div className='blogPostOne'>
	<div className='postDesc'>
		<h1 style={blogTitle} >How going vegan changed my life.</h1>
		<h5 style={blogWriter}>By: Bryan Maurice</h5>
		<br/>
		<br/>
		<p style={blogData}>
		What is the first thing when you hear the phrase, "I am vegan". You think, "I can't have meat, i cant have a burger or cookies. I have
		to eat salads everyday". I say this because this is how i used to think. In High School i had a friend who was vegan and she would 
		always talk about it. Me as a vegan, I could never see myself become, I loved my occasional burger, my occasional milk chocolate cookie
</p>
<p style={blogData}>
	It was until as i got older I started feeling the effects of the way I ate. Ive been hearing and reading the long term effects of red 
	processed meats. I did not like the way my body was feeling, so it was than the chose to experiment and push myself to the limits. It was than
	that I chose to try being a vegan for a week. It was challenging at first, until I began to do my own research and find alternatives and recipes
	for foods I usually enjoyed. 
</p>
<p style={blogData}>
	For example, instead of chicken I substituted it for jack fruit. After cooking it, it looked and tasted as identical as it could be. '
	I found vegan recipe for chocolate chips cookies, for buffalo chicken, for a cheeseburger and so many more. Since my change I can honestly
	say i've never felt better in my life, i feel more lighter, more energeized, more confident. 
</p>
<p style={blogData}>Becoming vegan is still a learning process as i adjust to this new lifestyle. Tho I dont miss red meat, there are a few non vegan foods
	I miss here and there. Now though I chose to be a vegan, I know its not for everyone. Its a hard decision, which is why i recommend
	for anyone interested in becoming vegan, I'd say do your research, don't push your body to much in the beginning and take smalls steps 
	into changing this new lifestyle.
</p>
</div>
</div>
		</div>
		)
	}
	
	
	export default BlogOne;