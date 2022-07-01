type IStatAverageAgeOfStudent = IBaseApi<{
	ID: number;
	Age: string;
	Amount: number;
}>;
type IStatPercentStudentByArea = IBaseApi<{
	AreaID: number;
	AreaName: string;
	Amount: number;
}>;

type IStatPercentStudentBySource = IBaseApi<{
	SourceInformationID: number;
	SourceInformationName: string;
	Amount: number;
}>;

type IStatCoursePurchased = IBaseApi<{
	ID: number;
	CourseName: string;
	TotalPurchases: number;
}>;

type IStatJobOfStudent = IBaseApi<{
	JobID: number;
	JobName: string;
	Amount: number;
}>;

type IStatSalaryOfStaff = IBaseApi<{
	RoleID: number;
	RoleName: string;
	SalaryTotal: number;
}>;

type IStatDataBarChart = IBaseApi<{
	ID: number;
	dataKey: string;
	sortName: sting;
	value: number;
	title: string;
}>;

type IStatRankTeacherByLessons = IBaseApi<{
	UserInformationID: number;
	RoleID: number;
	FullNameUnicode: string;
	Avatar: string;
	TotalLesson: number;
	TotalRow: number;
}>;

type IStatTotalLessonOfTeacher = IBaseApi<{
	UserInformationID: number;
	RoleID: number;
	FullNameUnicode: string;
	Avatar: string;
	Email: string;
	Mobile: string;
	TotalLesson: number;
	TotalRow: number;
}>;

type ILessonDetailsOfTeacher = IBaseApi<{
	ID: number
	TeacherID: number
	Date: string
	BranchName: string
	CourseName: string
	TimeStart: string
	TimeEnd: string
	Time: number
}>

type IStatTotalByBranch = {
	BaiTapChuaCham: number
	BoDeChuaCham: number
	BaiKiemTraChuaCham: number
	HenTestChuaCham: number
	TyLeKhongLamBaiTap: number
	NoHocPhi: number
	TrungBinhXemVideo: number
	TongXemKhoaVideo: number
	HocVienBiCanhBao: number
	NhanVien: number
	GiaoVien: number
	HocVienDangHoc: number
	KhoaHocDangMo: number
	KhachHangChuaTuVanThanhCong: number
	ChuaDangKyHoc: number
}

type IStatTotalByMonth = {
	DoanhThuVideo: number
	PreDoanhThuVideo: number
	HocVienChuyenKhoa: number
	PreHocVienChuyenKhoa: number
	BaiTapDaCham: number
	PreBaiTapDaCham: number
	BaiTapDaNop: number
	PreBaiTapDaNop: number
	BaoLuu: number
	PreBaoLuu: number
	HenTest: number
	PreHenTest: number
	PreHocVienHenDangKy: number
	HocVienHenDangKy: number
	PreHocVienMoi: number
	HocVienMoi: number
	PreKhachHangMoiTrongThang: number
	KhachHangMoiTrongThang: number
}