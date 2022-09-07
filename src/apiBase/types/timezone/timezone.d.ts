type IGetAllTimeZone<T = ITimeZone[]> = {
	message: string
	data: T
	totalRow: number
}

type ITimeZone = {
	Name: string
	Value: number
	ID: number
	Enable: boolean
	CreatedOn: string
	CreatedBy: string
	ModifiedOn: string
	ModifiedBy: string
}
