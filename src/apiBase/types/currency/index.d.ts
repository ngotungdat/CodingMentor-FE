type IGetAllCurrency<T = ICurrency[]> = {
	message: string
	data: T
}

type ICurrency = {
	ID: number
	CurrencyType: string
	ExchangeRate: number
	Enable: boolean
	CreatedOn: string
	CreatedBy: string
	ModifiedOn: string
	ModifiedBy: string
}
