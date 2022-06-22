import React from 'react'
import Icon from './icons.json'

export const ProfessionalManagerParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	}
]

export const ProfessionalManagerChildMenu = [
	{
		MenuName: 'tab-home',
		MenuTitle: 'Trang chủ',
		MenuKey: '/dashboard',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/dashboard',
				Route: '/dashboard',
				Icon: '',
				Text: 'Trang chủ'
			},
			{
				TypeItem: 'single',
				Key: '/staff/salary-of-staff',
				Icon: '',
				Route: '/staff/salary-of-staff',
				Text: 'Bảng lương nhân viên'
			}
		]
	}
]
