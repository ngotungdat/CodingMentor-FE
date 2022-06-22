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
	{
		TabName: 'tab-document',
		Title: 'Thư viện tài liệu',
		Icon: Icon.document
	},
	{
		TabName: 'tab-question-bank',
		Title: 'Ngân hàng đề',
		Icon: Icon.question
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
				Key: '/staff/salary-of-teacher',
				Route: '/staff/salary-of-teacher',
				Icon: Icon.secMoney,
				Text: 'Bảng lương'
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
				Key: '/course/calendar',
				Route: '/course/calendar',
				Icon: Icon.calendar,
				Text: 'Quản lý lịch dạy'
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
				Key: '/package/package-result-teacher',
				Route: '/package/package-result-teacher',
				Text: 'Chấm đề thi',
				Icon: Icon.edit
			},
			{
				ItemType: 'single',
				Key: '/customer/student/course-exam',
				Route: '/customer/student/course-exam',
				Text: 'Chấm bài kiểm tra',
				Icon: Icon.question
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
				Icon: Icon.firstList
			},
			{
				ItemType: 'single',
				Key: '/question-bank/exam-list',
				Route: '/question-bank/exam-list',
				Text: 'Danh sách đề',
				Icon: Icon.secList
			}
		]
	}
]
