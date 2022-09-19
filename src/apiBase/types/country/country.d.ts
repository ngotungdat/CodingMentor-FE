type IGetAllCountry<T = ICountry> = {
	message: string
	totalRow: number
	data: T
}
type ICountry = {
	Name: string
	Iso: string
	ID: number
	Enable: boolean
	CreatedOn: string
	CreatedBy: string
	ModifiedOn: string
	ModifiedBy: string
}

type IGetAllCity<T = ICity> = {
	message: string
	totalRow: number
	data: T
}
type ICity = {
	Name: string
	Iso: string
	ID: number
	Enable: boolean
	CreatedOn: string
	CreatedBy: string
	ModifiedOn: string
	ModifiedBy: string
}
