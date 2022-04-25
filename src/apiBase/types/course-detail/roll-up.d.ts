type IRollUp = IBaseApi<{
	ID: number
	BranchID: number
	StudentID: number
	StudentName: string
	CourseID: number
	CourseScheduleID: number
	Note: string
	StatusID: number
	StatusName: string
	LearningStatusID: number
	LearningStatusName: string
	Enable: boolean
	Warning: boolean
	SubjectName?: string
	Date?: string
}>
