type IScheduleOfStudent = IBaseApi<{
	ID: number;
	ButtonID: number;
	ButtonName: string;
	FinishZoom: boolean;
	IsExam: boolean;
	ExamTopicID: number;
	ZoomRoomScheduleID: number;
	ZoomRoomID: string;
	ZoomRoomPass: string;
	SignatureTeacher: string;
	SignatureStudent: string;
	ApiKey: string;
	IsRoomStart: boolean;
	CourseID: number;
	Title: string;
	BranchID: number;
	BranchName: string;
	RoomID: number;
	RoomName: string;
	SubjectID: number;
	SubjectName: string;
	StartTime: string;
	EndTime: string;
	IsOff: boolean;
}>[];
