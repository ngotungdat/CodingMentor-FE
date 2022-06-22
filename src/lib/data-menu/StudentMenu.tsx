import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faFileContract,
	faCubes,
	faInfoCircle,
	faVideo,
	faShoppingCart,
	faCheckCircle,
	faQuestionCircle,
	faComments,
	faStore,
	faFileLines,
	faCalendarCheck,
	faCalendarMinus,
	faUserTie,
	faFileVideo,
	faBook
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from './icons.json'

const SHOW_ICON = true

export const StudentParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	},
	{
		TabName: '1-1',
		Title: 'Đặt lịch với giáo viên',
		Icon: Icon.calendar
	},
	{
		TabName: 'video',
		Title: 'Khoá video',
		Icon: Icon.video
	},
	{
		TabName: 'tab-package',
		Title: 'Bộ đề',
		Icon: Icon.store
	},
	{
		TabName: 'tab-document',
		Title: 'Thư viện tài liệu',
		Icon: Icon.document
	}
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
			// {
			// 	TypeItem: 'single',
			// 	Key: '/customer/service/service-test-student',
			// 	Route: '/customer/service/service-test-student',
			// 	Icon: !!SHOW_ICON && <FontAwesomeIcon icon={faInfoCircle as IconProp} size="lg" />,
			// 	Text: 'Thông tin hẹn test'
			// },
			{
				ItemType: 'single',
				Key: '/option/faq',
				Route: '/option/faq',
				Text: 'Câu hỏi thường gặp',
				Icon: Icon.secList
			}
			// {
			// 	ItemType: 'single',
			// 	Key: '/feedback',
			// 	Route: '/feedback',
			// 	Text: 'Phản hồi',
			// 	Icon: !!SHOW_ICON && <FontAwesomeIcon icon={faComments as IconProp} size="lg" />
			// }
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
		MenuName: 'video',
		MenuTitle: 'Khóa video',
		MenuKey: '/video',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/video-course',
				Route: '/video-course',
				Text: 'Danh sách khóa học',
				Icon: Icon.video
			},
			{
				ItemType: 'single',
				Key: '/video-course-student',
				Route: '/video-course-student',
				Text: 'Danh sách đơn hàng',
				Icon: Icon.buy
			},
			{
				ItemType: 'single',
				Key: '/video-course-list',
				Route: '/video-course-list',
				Text: 'Khóa học đã sở hữu',
				Icon: Icon.videoActivated
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
