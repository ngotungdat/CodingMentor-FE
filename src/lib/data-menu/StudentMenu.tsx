import Icon from './icons.json'

export const StudentParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	}
	// {
	// 	TabName: 'tab-package',
	// 	Title: 'Bộ đề',
	// 	Icon: Icon.store
	// }
]

export const StudentChildMenu = [
	{
		MenuName: 'tab-home',
		MenuTitle: 'Trang chủ',
		MenuKey: '/dashboard',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/newsfeed',
				Route: '/newsfeed',
				Icon: Icon.news,
				Text: 'Tin tức'
			},
			{
				TypeItem: 'single',
				Key: '/course/schedule-study-student',
				Icon: Icon.calendar,
				Route: '/course/schedule-study-student',
				Text: 'Lịch học'
			},
			{
				TypeItem: 'single',
				Key: '/customer/service/service-test-student',
				Route: '/customer/service/service-test-student',
				Icon: Icon.appointment_info,
				Text: 'Thông tin hẹn test'
			},
			{
				TypeItem: 'single',
				Key: '/course/course-list',
				Route: '/course/course-list',
				Icon: Icon.course_list,
				Text: 'Khóa học của bạn'
			},
			{
				ItemType: 'sub-menu',
				Key: 'video-course',
				Icon: Icon.video,
				TitleSub: 'Khóa học video',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/video-course',
						Route: '/video-course',
						Text: 'Danh sách khóa học',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/video-course-student',
						Route: '/video-course-student',
						Text: 'Danh sách đơn hàng',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/video-course-list',
						Route: '/video-course-list',
						Text: 'Khóa học đã sở hữu',
						Icon: ''
					}
				]
			},
			// {
			// 	ItemType: 'single',
			// 	Key: '/option/services',
			// 	Route: '/option/services',
			// 	Text: 'Dịch vụ đã mua',
			// 	Icon: Icon.buy
			// },
			{
				ItemType: 'single',
				Key: '/option/faq',
				Route: '/option/faq',
				Text: 'Câu hỏi thường gặp',
				Icon: Icon.secList
			},
			{
				ItemType: 'single',
				Key: '/feedback',
				Route: '/feedback',
				Text: 'Phản hồi',
				Icon: Icon.certificate
			}
		]
	},
	{
		MenuName: '1-1',
		MenuTitle: 'Đặt lịch với giáo viên',
		MenuKey: '/1-1',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/course/teachers',
				Route: '/course/teachers',
				Icon: Icon.userEclips,
				Text: 'Giáo viên'
			},
			{
				TypeItem: 'single',
				Key: '/course/calendar',
				Route: '/course/calendar',
				Icon: Icon.calendar,
				Text: 'Lịch của tôi'
			}
		]
	},
	{
		MenuName: 'tab-package',
		MenuTitle: 'Bộ đề thi',
		MenuKey: '/package',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/package/package-student',
				Route: '/package/package-student',
				Text: 'Bộ đề của tôi',
				Icon: Icon.videoActivated
			},
			{
				ItemType: 'single',
				Key: '/package/package-store',
				Route: '/package/package-store',
				Text: 'Cửa hàng',
				Icon: Icon.store
			},
			{
				ItemType: 'single',
				Key: '/package/package-result-student',
				Route: '/package/package-result-student',
				Text: 'Kết quả đã làm bài',
				Icon: Icon.secList
			}
		]
	},
	{
		MenuName: 'tab-document',
		MenuTitle: 'Thư viện tài liệu',
		MenuKey: '/document-list',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/document-list',
				Route: '/document-list',
				Text: 'Danh sách tài liệu',
				Icon: Icon.document
			}
		]
	}
]
