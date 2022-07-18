import React from 'react'
import Icon from './icons.json'

export const AccountantParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: Icon.home
	}
]

export const AccountantChildMenu = [
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
				Key: '/dashboard',
				Route: '/dashboard',
				Icon: Icon.chart,
				Text: 'Thống kê'
			},
			{
				TypeItem: 'single',
				Key: '/staff/salary-of-staff',
				Route: '/staff/salary-of-staff',
				Icon: Icon.secMoney,
				Text: 'Bảng lương nhân viên'
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
						Key: '/customer/finance/finance-cashier-invoice',
						Route: '/customer/finance/finance-cashier-invoice',
						Text: 'Phiếu thu',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'single',
				Key: '/staff/manage-task',
				Route: '/staff/manage-task',
				Text: 'Quản lí công việc',
				Icon: Icon.more,
			}
		]
	}
]
