export interface TokenRequest{
	token: string,
	msg: string
}
export interface LoginRequest extends TokenRequest{
	first_time: boolean
}
