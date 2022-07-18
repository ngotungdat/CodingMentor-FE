import React from 'react'
import Icon from './icons.json'

export const AcademicParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	}
]

export const AcademicChildMenu = [
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
				Text: 'Trang chủ'
			},
			{
				TypeItem: 'single',
				Key: '/staff/salary-of-staff',
				Route: '/staff/salary-of-staff',
				Icon: Icon.secMoney,
				Text: 'Bảng lương nhân viên'
			}
		]
	}
]
