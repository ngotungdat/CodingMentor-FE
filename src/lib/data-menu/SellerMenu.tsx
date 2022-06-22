import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCalendarPlus,
	faUser,
	faUserClock,
	faUserGraduate,
	faChartLine,
	faHome,
	faCubes,
	faCommentDots,
	faQuestionCircle,
	faBookOpen,
	faVideo
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Icon from './icons.json'

const SHOW_ICON = true

export const SellerParentMenu = [
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
		TabName: 'tab-customer',
		Title: 'Khách hàng',
		Icon: Icon.customer
	}
]

export const SellerChildMenu = [
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
				ItemType: 'sub-menu',
				Key: 'sub-tab-option-1',
				Icon: Icon.star,
				TitleSub: 'Phản hồi',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/create-feedback',
						Route: '/create-feedback',
						Text: 'Phản hồi của bạn',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/feedback',
						Route: '/feedback',
						Text: 'Danh sách phản hồi',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'single',
				Key: '/option/faq',
				Route: '/option/faq',
				Text: 'Câu hỏi thường gặp',
				Icon: Icon.secList
			}
		]
	},
	{
		MenuName: 'tab-course',
		MenuTitle: 'Khóa học',
		MenuKey: '/course',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/video-course',
				Route: '/video-course',
				Icon: Icon.video,
				Text: 'Danh sách'
			}
		]
	},
	{
		MenuName: 'tab-customer',
		MenuTitle: 'Khách hàng',
		MenuKey: '/customer',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/customer/student/student-advisory',
				Route: '/customer/student/student-advisory',
				Text: 'Khách hàng',
				Icon: Icon.customer
			},
			{
				ItemType: 'single',
				Key: '/customer/service/service-info-student',
				Route: '/customer/service/service-info-student',
				Text: 'Thêm lịch hẹn test',
				Icon: Icon.promiseTest
			},
			{
				ItemType: 'single',
				Key: '/customer/service/service-appointment-test',
				Route: '/customer/service/service-appointment-test',
				Text: 'Khách hẹn test',
				Icon: Icon.add
			},
			{
				ItemType: 'single',
				Key: '/customer/student/student-list',
				Route: '/customer/student/student-list',
				Text: 'Dữ liệu học viên',
				Icon: Icon.userEclips
			}
		]
	}
]
