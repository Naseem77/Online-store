// Simulate authentication service
const Auth = {
	_isAuthenticated: false,

	authenticate(email, pass, cb) {
		this._isAuthenticated = true
		setTimeout(
			() =>
				cb({
					email: email
				}),
			100
		)
	},
	
	signout(cb) {
		this._isAuthenticated = false
		setTimeout(cb, 100)
	}
}

export default Auth
