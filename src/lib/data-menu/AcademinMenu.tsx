import React from 'react';
import { Airplay, FileText, Home, User, UserCheck } from 'react-feather';

export const AcademicParentMenu = [
	{
		TabName: 'tab-home',
		Title: 'Trang chủ',
		Icon: <Home />
	}
];

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
				Icon: '',
				Text: 'Trang chủ'
			},
			{
				TypeItem: 'single',
				Key: '/staff/salary-of-staff',
				Route: '/staff/salary-of-staff',
				Icon: '',
				Text: 'Bảng lương nhân viên'
			}
		]
	}
];
