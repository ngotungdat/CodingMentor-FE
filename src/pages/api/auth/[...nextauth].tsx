import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { SocialLogin, login, loginByDev } from '~/services/auth'
import { copyRightLog } from '~/utils/functions'

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials-signin',
			name: 'Tài khoản',
			credentials: {
				username: { label: 'Username' },
				password: { label: 'Password' }
			},
			async authorize(credentials: ICredentials, req) {
				try {
					console.log('credentials: ', credentials)
					const response = credentials?.isSocial ? await SocialLogin(credentials) : await login(credentials)
					return credentials?.isSocial ? Promise.resolve(response) : Promise.resolve(response.data)
				} catch (error) {
					return Promise.reject(new Error(encodeURIComponent(JSON.stringify(error))))
				}
			}
		}),
		CredentialsProvider({
			id: 'credentials-dev-signin',
			name: 'Dev signin',
			credentials: {
				username: { label: 'Username' },
				password: { label: 'Password' }
			},
			async authorize(credentials: any) {
				try {
					const rs: any = await loginByDev(credentials)
					return Promise.resolve(rs.data)
				} catch (error) {
					return Promise.reject(new Error(encodeURIComponent(JSON.stringify(error))))
				}
			}
		})
	],
	session: {
		strategy: 'jwt',
		maxAge: 24 * 60 * 60 // 1 day
	},
	jwt: {
		secret: 'YzQzYzg0MzljNzE5ODk0ZDQwZGQ0NGNhOGI5MmU4OThlNmVlODZlYTc0M2Y5MjFjNDdmYWI2ZmJmZjFjNjBjMQ=='
	},
	callbacks: {
		async signIn({ user, account, profile }) {
			// After signin
			copyRightLog()
			return Promise.resolve(true)
		},
		async session({ session, token }) {
			if (token) {
				session.auth_time = token?.auth_time
				session.accessToken = token?.token
				session.user = {}
			}
			return Promise.resolve(session)
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			const isSignIn = user ? true : false
			if (isSignIn) {
				token.auth_time = Math.floor(Date.now() / 1000)
			}
			if (account?.type === 'credentials') {
				const newToken = { ...token, ...user, isNewUser }
				return Promise.resolve(newToken)
			}
			return Promise.resolve(token)
		},
		async redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? Promise.resolve(baseUrl) : Promise.resolve(baseUrl)
		}
	},
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signin',
		error: '/auth/signin',
		newUser: null
	},
	debug: true
})
