import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider as AuthProvider } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { WrapProvider } from '~/context/wrap'
import OneSignal from 'react-onesignal'
import '../styles/global.scss'
import _ from '~/appConfig'
import { getTypeURL } from '~/utils/functions'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const _1SignalLocalhost = 'aa474546-6a6b-48a4-8c44-bc6035a3e911'

export default function App({ Component, pageProps }) {
	const router = useRouter()
	const [currentUrl, setCurrentUrl] = useState('')

	useEffect(() => {
		setCurrentUrl(window.location.href)
		console.log('NODE_ENV: ', process.env.NODE_ENV)
	}, [])

	useEffect(() => {
		if (currentUrl !== '') {
			let type = getTypeURL(currentUrl)
			OneSignal.setSubscription(true)
			OneSignal.init({
				appId:
					type == 'LOCALHOST' ? _1SignalLocalhost : type == 'DEMO' ? process.env.NEXT_PUBLIC_ONE_SIGNAL : process.env.NEXT_PUBLIC_ONE_SIGNAL
			}).then(() => {
				OneSignal.showSlidedownPrompt()
			})
			OneSignal.on('popoverShown', function () {})
			const handleRouteChangeError = (err: any, url: any) => {
				console.log('handleRouteChangeError', url)
			}
			router.events.on('routeChangeError', handleRouteChangeError)
			return () => {
				router.events.off('routeChangeError', handleRouteChangeError)
			}
		}
	}, [currentUrl])

	const Layout = Component.layout || ((props) => <>{props.children}</>)

	return (
		<>
			<Head>
				<title>{_.chromeTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1" />
				<meta name="robots" content="noindex" />
				<meta name="description" content={_.description} />
				<meta name="og:title" content={_.description} />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="icon" href="/logo.png" />
				<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
				<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.7/css/dx.common.css" />
				<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.7/css/dx.light.css" />
				<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.7/css/dx-gantt.min.css" />
				<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
				<script src="https://www.amcharts.com/lib/3/serial.js"></script>
				<script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
			</Head>

			<AuthProvider session={pageProps.session}>
				<WrapProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</WrapProvider>
			</AuthProvider>
		</>
	)
}
