import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser,
	faUserClock,
	faUserTie,
	faChartLine,
	faVideo,
	faShoppingCart,
	faCogs,
	faCircleCheck,
	faUsers,
	faCircleDollarToSlot,
	faFileContract,
	faUserCheck,
	faUserPen,
	faBook,
	faCircleQuestion,
	faFileLines,
	faGears,
	faWrench,
	faCubes,
	faCalendarDays,
	faComments,
	faMoneyBills,
	faUserGroup,
	faUserSecret,
	faBookAtlas,
	faCalendarCheck,
	faUsersGear,
	faMapLocation
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Icon from './icons.json'

const SHOW_ICON = true

export const AdminParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	},
	{
		TabName: 'tab-course-list',
		Title: 'Quản lý khóa học',
		Icon: Icon.category
	},
	{
		TabName: 'tab-course',
		Title: 'Khóa học Video',
		Icon: Icon.video
	},
	{
		TabName: 'tab-customer',
		Title: 'Khách hàng',
		Icon: Icon.customer
	},
	{
		TabName: 'tab-staff',
		Title: 'Quản lí nhân viên',
		Icon: Icon.staff
	},
	// {
	// 	TabName: 'tab-package',
	// 	Title: 'Bộ đề',
	// 	Icon: Icon.store
	// },
	{
		TabName: 'tab-document',
		Title: 'Thư viện tài liệu',
		Icon: Icon.document
	},
	// {
	// 	TabName: 'tab-question-bank',
	// 	Title: 'Ngân hàng đề',
	// 	Icon: Icon.question
	// },
	{
		TabName: 'tab-option',
		Title: 'Cấu hình',
		Icon: Icon.settings
	}
]

export const AdminChildMenu = [
	{
		MenuName: 'tab-home',
		MenuTitle: 'Trang chủ',
		MenuKey: '/dashboard',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/dashboard',
				Route: '/dashboard',
				Icon: Icon.chart,
				Text: 'Thống kê'
			},
			{
				TypeItem: 'single',
				Key: '/newsfeed',
				Route: '/newsfeed',
				Icon: Icon.news,
				Text: 'Tin tức'
			},
			{
				ItemType: 'single',
				Key: '/feedback',
				Route: '/feedback',
				Text: 'Phản hồi',
				Icon: Icon.star
			}
		]
	},
	{
		MenuName: 'tab-course-list',
		MenuTitle: 'Quản lý khóa học',
		MenuKey: '/course',
		MenuItem: [
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course',
				Icon: Icon.category,
				TitleSub: 'Khóa học',
				SubMenuList: [
					{
						TypeItem: 'single',
						Key: '/course/create-course-offline',
						Icon: '',
						Route: '/course/create-course-offline',
						Text: 'Tạo khóa Offline'
					},
					{
						TypeItem: 'single',
						Key: '/course/create-course-online',
						Icon: '',
						Route: '/course/create-course-online',
						Text: 'Tạo khóa Online'
					},
					{
						TypeItem: 'single',
						Key: '/course/create-self-course',
						Icon: '',
						Route: '/course/create-self-course',
						Text: 'Tạo khóa 1-1'
					},
					{
						TypeItem: 'single',
						Key: '/course/course-list',
						Icon: '',
						Route: '/course/course-list',
						Text: 'Danh sách khóa học'
					}
				]
			},
			{
				TypeItem: 'single',
				Key: '/course/schedule-study',
				Route: '/course/schedule-study',
				Icon: Icon.calendar,
				Text: 'Kiểm tra lịch'
			},
			{
				TypeItem: 'single',
				Key: '/course/register-course',
				Route: '/course/register-course',
				Icon: Icon.add,
				Text: 'Đăng ký học'
			}
		]
	},
	{
		MenuName: 'tab-course',
		MenuTitle: 'Khóa học video',
		MenuKey: '/video-course',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/video-course',
				Route: '/video-course',
				Icon: Icon.video,
				Text: 'Danh sách'
			},
			{
				TypeItem: 'single',
				Key: '/video-course-order',
				Icon: Icon.buy,
				Route: '/video-course-order',
				Text: 'Đơn hàng'
			},
			{
				TypeItem: 'single',
				Key: '/video-course-list',
				Icon: Icon.videoActivated,
				Route: '/video-course-list',
				Text: 'Đã kích hoạt'
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course-child',
				Icon: Icon.settings,
				TitleSub: 'Cấu hình',
				SubMenuList: [
					{
						TypeItem: 'single',
						Key: '/config-type-video-course',
						Icon: '',
						Route: '/config-type-video-course',
						Text: 'Danh mục khóa học'
					},
					{
						TypeItem: 'single',
						Key: '/config-level-video-course',
						Icon: '',
						Route: '/config-level-video-course',
						Text: 'Trình độ'
					},
					{
						TypeItem: 'single',
						Key: '/config-tag-video-course',
						Icon: '',
						Route: '/config-tag-video-course',
						Text: 'Từ khóa'
					}
				]
			}
		]
	},
	{
		MenuName: 'tab-customer',
		MenuTitle: 'Khách hàng',
		MenuKey: '/customer',
		MenuItem: [
			{
				ItemType: 'sub-menu',
				Key: 'student-list-032',
				Icon: Icon.customer,
				TitleSub: 'Học viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/student/student-advisory',
						Route: '/customer/student/student-advisory',
						Text: 'Khách hàng',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-list',
						Route: '/customer/student/student-list',
						Text: 'Dữ liệu học viên',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-reserve',
						Route: '/customer/student/student-reserve',
						Text: 'Học viên bảo lưu',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-appointment',
						Route: '/customer/student/student-appointment',
						Text: 'Học viên chờ xếp lớp',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-course',
						Route: '/customer/student/student-course',
						Text: 'Học viên trong khóa',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-change-course',
						Route: '/customer/student/student-change-course',
						Text: 'Học viên chuyển khóa',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/exchange-student',
						Route: '/customer/student/exchange-student',
						Text: 'Học viên chuyển giao',
						Icon: ''
					},
					// {
					// 	ItemType: 'single',
					// 	Key: '/package/package-payment',
					// 	Route: '/package/package-payment',
					// 	Text: 'Học viên mua bộ đề',
					// 	Icon: ''
					// },
					{
						ItemType: 'single',
						Key: '/customer/contract/contract-customer-list',
						Route: '/customer/contract/contract-customer-list',
						Text: 'Học viên có hợp đồng',
						Icon: ''
					}
					// {
					// 	ItemType: 'single',
					// 	Key: '/customer/certificate-list',
					// 	Route: '/customer/certificate-list',
					// 	Text: 'Chứng chỉ học viên',
					// 	Icon: ''
					// }
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sss-list-33098s',
				TitleSub: 'Hẹn test',
				Icon: Icon.promiseTest,
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/service/service-info-student',
						Route: '/customer/service/service-info-student',
						Text: 'Thêm lịch hẹn test',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/service/service-appointment-test',
						Route: '/customer/service/service-appointment-test',
						Text: 'Khách hẹn test',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course-child-3',
				Icon: Icon.userEclips,
				TitleSub: 'Báo cáo học viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/report/report-customer-warning',
						Route: '/customer/report/report-customer-warning',
						Text: 'Cảnh báo học viên',
						Icon: ''
					}
					// {
					// 	ItemType: 'single',
					// 	Key: '/customer/report/report-customer-test',
					// 	Route: '/customer/report/report-customer-test',
					// 	Text: 'Học viên sắp thi',
					// 	Icon: ''
					// }
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course-child-4',
				Icon: Icon.money,
				TitleSub: 'Tài chính',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-customer-debts',
						Route: '/customer/finance/finance-customer-debts',
						Text: 'Thông tin thanh toán',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-cashier-refund',
						Route: '/customer/finance/finance-cashier-refund',
						Text: 'Yêu cầu hoàn tiền',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-cashier-payment',
						Route: '/customer/finance/finance-cashier-payment',
						Text: 'Phiếu chi',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-cashier-invoice',
						Route: '/customer/finance/finance-cashier-invoice',
						Text: 'Phiếu thu',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'single',
				Key: '/customer/parents',
				Route: '/customer/parents',
				Text: 'Danh sách phụ huynh',
				Icon: Icon.parent
			}
		]
	},
	{
		MenuName: 'tab-staff',
		MenuTitle: 'Quản lí nhân viên',
		MenuKey: '/staff',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/staff/staff-list',
				Route: '/staff/staff-list',
				Text: 'Danh sách nhân viên',
				Icon: Icon.staff
			},
			{
				ItemType: 'single',
				Key: '/staff/teacher-list',
				Route: '/staff/teacher-list',
				Text: 'Danh sách giáo viên',
				Icon: Icon.firstList
			},
			{
				ItemType: 'sub-menu',
				Key: 'list-salary',
				Icon: Icon.secMoney,
				TitleSub: 'Bảng lương',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/staff/teacher-salary',
						Route: '/staff/teacher-salary',
						Text: 'Bảng lương giáo viên',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/admin-salary-staff',
						Route: '/staff/admin-salary-staff',
						Text: 'Bảng lương nhân viên',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'single',
				Key: '/teacher/total-lesson',
				Route: '/teacher/total-lesson',
				Text: 'Thống kê giảng dạy',
				Icon: Icon.chartUp
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-staff-child-3',
				Icon: Icon.saler,
				TitleSub: 'Tư vấn viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/staff/saler-list',
						Route: '/staff/saler-list',
						Text: 'Danh sách tư vấn viên',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/sales-campaign',
						Route: '/staff/sales-campaign',
						Text: 'Chiến dịch kinh doanh',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/sales-salary',
						Route: '/staff/sales-salary',
						Text: 'Duyệt lương',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/sales-salary-history',
						Route: '/staff/sales-salary-history',
						Text: 'Lịch sử duyệt',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/saler-revenue',
						Route: '/staff/saler-revenue',
						Text: 'Doanh thu tư vấn viên',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'single',
				Key: '/staff/staff-salary',
				Route: '/staff/staff-salary',
				Text: 'Cấu hình lương',
				Icon: Icon.secSettings
			}
		]
	},
	{
		MenuName: 'tab-package',
		MenuTitle: 'Bộ đề',
		MenuKey: '/package',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/package/package-list',
				Route: '/package/package-list',
				Text: 'Quản lí bộ đề',
				Icon: Icon.store
			},
			{
				ItemType: 'single',
				Key: '/package/package-examiner',
				Route: '/package/package-examiner',
				Text: 'Giáo viên chấm bài',
				Icon: Icon.userEclips
			},
			{
				ItemType: 'single',
				Key: '/package/package-set-result',
				Route: '/package/package-set-result',
				Text: 'Kết quả đã làm',
				Icon: Icon.promiseTest
			},
			{
				ItemType: 'single',
				Key: '/package/package-payment',
				Route: '/package/package-payment',
				Text: 'Học viên mua bộ đề',
				Icon: Icon.customer
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
	},
	{
		MenuName: 'tab-question-bank',
		MenuTitle: 'Ngân hàng đề thi',
		MenuKey: '/question-bank',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/question-bank/question-list',
				Route: '/question-bank/question-list',
				Text: 'Danh sách câu hỏi',
				Icon: Icon.secList
			},
			{
				ItemType: 'single',
				Key: '/question-bank/exam-list',
				Route: '/question-bank/exam-list',
				Text: 'Danh sách đề',
				Icon: Icon.store
			}
		]
	},
	{
		MenuName: 'tab-option',
		MenuTitle: 'Cấu hình',
		MenuKey: '/option',
		MenuItem: [
			{
				ItemType: 'sub-menu',
				Key: 'sub-tab-option-1',
				Icon: Icon.location,
				TitleSub: 'Địa chỉ',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/option/provincial',
						Route: '/option/provincial',
						Text: 'Tỉnh / Thành phố',
						Icon: ''
					}
					// {
					// 	ItemType: 'single',
					// 	Key: '/option/district',
					// 	Route: '/option/district',
					// 	Text: 'Quận / Huyện',
					// 	Icon: ''
					// },
					// {
					// 	ItemType: 'single',
					// 	Key: '/option/ward',
					// 	Route: '/option/ward',
					// 	Text: 'Phường / Xã',
					// 	Icon: ''
					// }
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-tab-option-4',
				Icon: Icon.education,
				TitleSub: 'Cấu hình học',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/option/center',
						Route: '/option/center',
						Text: 'Trung tâm',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/grade',
						Route: '/option/grade',
						Text: 'Khối học',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/study-time',
						Route: '/option/study-time',
						Text: 'Ca học',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/program',
						Route: '/option/program',
						Text: 'Chương trình',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-tab-option-3',
				Icon: Icon.more,
				TitleSub: 'Khác',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/timezone',
						Route: '/timezone',
						Text: 'Cấu hình Timezone',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/configure-currency',
						Route: '/configure-currency',
						Text: 'Cấu hình tiền tệ',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/zoom/config-zoom',
						Route: '/option/zoom/config-zoom',
						Text: 'Tài khoản Zoom',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/meeting/meeting-zoom',
						Route: '/option/meeting/meeting-zoom',
						Text: 'Phòng học Zoom',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/discount',
						Route: '/option/discount',
						Text: 'Mã khuyến mãi',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/learning-needs',
						Route: '/option/learning-needs',
						Text: 'Nhu cầu học',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/payment-method',
						Route: '/option/payment-method',
						Text: 'Phương thức thanh toán',
						Icon: ''
					},
					// {
					// 	ItemType: 'single',
					// 	Key: '/option/currency-config',
					// 	Route: '/option/currency-config',
					// 	Text: 'Cấu hình tiền tệ',
					// 	Icon: ''
					// },
					{
						ItemType: 'single',
						Key: '/option/customer-supplier',
						Route: '/option/customer-supplier',
						Text: 'Nguồn khách hàng',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/day-off',
						Route: '/option/day-off',
						Text: 'Ngày nghỉ',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/jobs',
						Route: '/option/jobs',
						Text: 'Công việc',
						Icon: ''
					},

					{
						ItemType: 'single',
						Key: '/option/consultation-status',
						Route: '/option/consultation-status',
						Text: 'Tình trạng tư vấn khách hàng',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/feedback',
						Route: '/option/feedback',
						Text: 'Loại phản hồi',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/purpose',
						Route: '/option/purpose',
						Text: 'Mục đích học',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/notification',
						Route: '/option/notification',
						Text: 'Tạo thông báo',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/idiom',
						Route: '/option/idiom',
						Text: 'Thành ngữ',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/contract',
						Route: '/option/contract',
						Text: 'Hợp đồng',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/term-of-service',
						Route: '/option/term-of-service',
						Text: 'Điều khoản',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/config-voucher-invoice',
						Route: '/option/config-voucher-invoice',
						Text: 'Mẫu',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/option/faq',
						Route: '/option/faq',
						Text: 'Câu hỏi thường gặp',
						Icon: ''
					}
				]
			}
		]
	}
]
