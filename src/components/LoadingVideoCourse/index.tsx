import { Card, List, Skeleton } from 'antd'
import React from 'react'

function LoadingVideoCourse() {
	return (
		<List
			itemLayout="horizontal"
			dataSource={['1', '2']}
			grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
			renderItem={(item) => (
				<Card style={{ marginBottom: 16 }}>
					<div style={{ display: 'flex', position: 'relative' }}>
						<Skeleton.Image style={{ width: 180, height: 180, borderRadius: 12 }} />
						<div style={{ flex: 1, marginLeft: 16 }}>
							<Skeleton paragraph={false} active style={{ width: '30%' }} />
							<div style={{ display: 'flex' }}>
								<Skeleton paragraph={false} active style={{ width: 60 }} />
								<Skeleton paragraph={false} active style={{ width: 40, marginLeft: 8 }} />
								<Skeleton paragraph={false} active style={{ width: 20, marginLeft: 8 }} />
							</div>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<Skeleton.Avatar active />
								<Skeleton paragraph={false} active style={{ width: 80, marginLeft: 8, marginTop: 8 }} />
							</div>
							<Skeleton paragraph={false} active style={{ width: '20%', marginTop: 8 }} />
							<Skeleton paragraph={false} active style={{ width: '8%' }} />
							<div style={{ display: 'flex', marginTop: 16 }}>
								<Skeleton.Button size="small" active style={{ width: 100 }} />
								<Skeleton.Button size="small" active style={{ width: 80, marginLeft: 8 }} />
							</div>
						</div>
					</div>
				</Card>
			)}
		/>
	)
}

export default LoadingVideoCourse
