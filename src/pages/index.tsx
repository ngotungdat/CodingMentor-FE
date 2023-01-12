import LayoutBase from '~/components/LayoutBase'
import NewsFeed from '~/components/Global/NewsFeed/NewsFeed'
import React from 'react'

function Home() {
	return (
		<>
			<NewsFeed />

			{/* <iframe
				width={400}
				height={500}
				src="https://m.1688.com/offer_search/-6D7033.html?keywords=凉鞋"
				title="W3Schools Free Online Web Tutorials"
			></iframe> */}
		</>
	)
}

Home.layout = LayoutBase

export default Home
