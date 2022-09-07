import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () => originalRenderPage({})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: <>{initialProps.styles}</>
			}
		} finally {
		}
	}

	render() {
		return (
			<Html lang="vi">
				<script src="https://www.paypal.com/sdk/js?client-id=ASevmYvsyHL3XpnEKhjPyAw9ZxTvsCrMxb1PUFCBP1Doy0hfzks9uvvUTae-cZvU4eObfZMWByop28nU&currency=AUD"></script>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
