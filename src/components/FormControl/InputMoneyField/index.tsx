import { Form, InputNumber } from 'antd'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { parseToMoney } from '~/utils/functions'
import { numberWithCommas } from './../../../utils/functions/index'

const InputMoneyField = (props) => {
	const { form, name, label, placeholder, disabled, handleChange, style, className, isRequired, rules } = props

	const { errors } = form.formState
	const hasError = errors[name]

	const checkHandleChange = (value) => {
		if (!handleChange) return
		handleChange(value)
	}

	const [salary, setSalary] = useState('')

	// useEffect(() => {
	//   const value = salary;
	//   if (value !== null && value !== undefined) {
	//     setSalary(parseToMoney(value.replace(/[^0-9\.]+/g, "")));
	//   }
	// }, [salary]);

	return (
		<Form.Item
			style={style}
			label={label}
			className={`${hasError ? 'ant-form-item-with-help ant-form-item-has-error' : ''}`}
			required={isRequired}
		>
			<Controller
				name={name}
				rules={rules}
				control={form.control}
				render={({ field }) => (
					<InputNumber
						{...field}
						className="style-input w-100"
						style={{ borderRadius: 5 }}
						placeholder={placeholder}
						disabled={disabled}
						precision={2}
						formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
						parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
						// value={
						//   salary.length !== 0 ? numberWithCommas(field?.value) : salary
						// }
						// onChange={(e) => {
						//   setSalary(e.target.value);
						//   field.onChange(e.target.value.toLocaleString());
						// }}
					/>
				)}
			/>
			{hasError && (
				<div className="ant-form-item-explain ant-form-item-explain-error font-color-error">
					<div role="alert">{errors[name]?.message}</div>
				</div>
			)}
		</Form.Item>
	)
}
InputMoneyField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	handleChange: PropTypes.func,
	style: PropTypes.shape({}),
	className: PropTypes.string,
	isRequired: PropTypes.bool,
    rules: PropTypes.object
}
InputMoneyField.defaultProps = {
	label: '',
	placeholder: '',
	disabled: false,
	handleChange: null,
	style: {},
	className: '',
	isRequired: false
}
export default InputMoneyField
