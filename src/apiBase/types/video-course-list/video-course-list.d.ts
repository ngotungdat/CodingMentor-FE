import { data } from '~/lib/customer-student/data'
type IVideoCourseList = IBaseApi<{
	ID: number
	VideoCourseID: number
	VideoCourseName: string
	UserInformationID: number
	StudentName: string
	ImageThumbnails: string
	Status: number
	StatusName: number
	RatingNumber: number
	RatingComment: string
	data: { data: object }
	OriginalPrice: number
	SellPrice: number
	Quantity: number
	AverageRating: number
	CategoryID: number
	CategoryName: string
	ChineseName: string
	CreatedOn: string
	CurriculumID: number
	Description: string
	EnglishName: string
	ExpiryDays: number
	ID: number
	LevelName: string
	LimitBooking: number
	LimitMinutes: number
	RequestPoint: number
	StatusActive: string
	TeacherID: number
	TeacherName: string
	TotalFeedBack: number
	TotalVideoCourseSold: number
	TotalVideoViews: number
	TotalVideos: number
	VideoCourseName: string
	isBought: boolean
}>

type IVideoCourses = {
	ID: number
	CategoryID: number
	CategoryName: string
	LevelID: number
	LevelName: string
	CurriculumID: number
	VideoCourseName: string
	EnglishName: string
	ChineseName: string
	OriginalPrice: number
	SellPrice: number
	TeacherID: null
	ExpiryDays: number
	TeacherName: null
	Enable: true
	ImageThumbnails: string
	TagArray: string
	WebVideoCourseID: number
	LimitBooking: number
	LimitMinutes: number
	RequestPoint: number
	CreatedOn: string
	CreatedBy: string
	ModifiedOn: null
	ModifiedBy: null
}
