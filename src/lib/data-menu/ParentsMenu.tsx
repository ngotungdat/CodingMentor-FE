import React from 'react'

import Icon from './icons.json'

export const ParentsParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	}
]

export const ParentsChildMenu = [
	{
		MenuName: 'tab-home',
		MenuTitle: 'Trang chủ',
		MenuKey: '/parents',
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
				Key: '/parents/course-of-student',
				Route: '/parents/course-of-student',
				Text: 'Các khóa học',
				Icon: Icon.category
			},
			{
				TypeItem: 'single',
				Key: '/parents/course-of-student-price',
				Route: '/parents/course-of-student-price',
				Text: 'Công nợ',
				Icon: Icon.secMoney
			},
			{
				TypeItem: 'single',
				Key: '/parents/schedule-of-student',
				Route: '/parents/schedule-of-student',
				Text: 'Lịch học',
				Icon: Icon.calendar,
			},
			{
				TypeItem: 'single',
				Key: '/parents/score-of-student',
				Route: '/parents/score-of-student',
				Icon: Icon.userEclips,
				Text: 'Xem điểm'
			},
			{
				TypeItem: 'single',
				Key: '/parents/roll-up-student',
				Route: '/parents/roll-up-student',
				Icon: Icon.appointment_info,
				Text: 'Chi tiết điểm danh'
			}
		]
	}
]
