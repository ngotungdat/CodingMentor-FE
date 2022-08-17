import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser,
	faFileContract,
	faBook,
	faCircleQuestion,
	faHome,
	faBookOpen,
	faFileSignature,
	faCubes,
	faFile,
	faFileLines,
	faCalendarDays,
	faCircleDollarToSlot
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from './icons.json'
import { icons } from 'antd/lib/image/PreviewGroup'

const SHOW_ICON = true

export const TeacherParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	},
	{
		TabName: 'tab-course',
		Title: 'Khóa học',
		Icon: Icon.category
	},
	{
		TabName: 'tab-student',
		Title: 'Học viên',
		Icon: Icon.customer
	},
	// {
	// 	TabName: 'tab-staff',
	// 	Title: 'Phân công',
	// 	Icon: Icon.staff
	// },
	{
		TabName: 'tab-document',
		Title: 'Tài liệu',
		Icon: Icon.document
	}
]

export const TeacherChildMenu = [
	{
		MenuName: 'tab-home',
		MenuTitle: 'Trang chủ',
		MenuKey: '/dashboard',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/newsfeed',
				Route: '/newsfeed',
				Icon: Icon.home,
				Text: 'Tin tức'
			},
			{
				TypeItem: 'single',
				Key: '/course/schedule-study-teacher',
				Icon: Icon.calendar,
				Route: '/course/schedule-study-teacher',
				Text: 'Lịch dạy '
			},
			{
				TypeItem: 'single',
				Key: '/teacher/day-off-schedule',
				Icon: Icon['calendar-x'],
				Route: '/teacher/day-off-schedule',
				Text: 'Lịch nghỉ'
			},
			{
				TypeItem: 'single',
				Key: '/staff/salary-of-teacher',
				Route: '/staff/salary-of-teacher',
				Icon: Icon.secMoney,
				Text: 'Bảng lương giáo viên'
			}
		]
	},
	{
		MenuName: 'tab-course',
		MenuTitle: 'Lịch dạy',
		MenuKey: '/course',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/course/course-list',
				Icon: Icon.document,
				Route: '/course/course-list',
				Text: 'Danh sách khóa học'
			},
			{
				TypeItem: 'single',
				Key: '/course/schedule-study',
				Icon: Icon.calendar,
				Route: '/course/schedule-study',
				Text: 'Kiểm tra lịch'
			}
		]
	},
	{
		MenuName: 'tab-student',
		MenuTitle: 'Học viên',
		MenuKey: '/customer',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/customer/report/report-customer-warning',
				Route: '/customer/report/report-customer-warning',
				Text: 'Cảnh báo học viên',
				Icon: Icon.userEclips
			},
			{
				ItemType: 'single',
				Key: '/feedback',
				Route: '/feedback',
				Text: 'Phản hồi',
				Icon: Icon.feedback
			}
			// {
			// 	TypeItem: 'single',
			// 	Key: '/customer/service/service-test-teacher',
			// 	Route: '/customer/service/service-test-teacher',
			// 	Icon: Icon.edit,
			// 	Text: 'Chấm bài hẹn test'
			// },
			// {
			// 	ItemType: 'single',
			// 	Key: '/package/package-result-teacher',
			// 	Route: '/package/package-result-teacher',
			// 	Text: 'Chấm đề thi',
			// 	Icon: Icon['edit-2']
			// }
		]
	},
	// {
	// 	MenuName: 'tab-staff',
	// 	MenuTitle: 'Phân công',
	// 	MenuKey: '/staff',
	// 	MenuItem: [
	// 		{
	// 			ItemType: 'single',
	// 			Key: '/staff/manage-task',
	// 			Route: '/staff/manage-task',
	// 			Text: 'Quản lý công việc',
	// 			Icon: Icon.todo
	// 		}
	// 	]
	// },
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
