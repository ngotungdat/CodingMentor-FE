// import { Form, Select } from 'antd'
// import React from 'react'
// import { Controller } from 'react-hook-form'

// const SelectField = (props: ISelectField) => {
// 	const { isDynamicField, disabled, mode, style, optionDisabledList } = props

// 	const { Option } = Select
// 	const { errors } = props.form.formState

// 	let hasError
// 	let errorMessage

// 	if (isDynamicField) {
// 		const nameSlice = props.name.slice(0, props.name.indexOf('.'))
// 		const index = props.name.slice(props.name.indexOf('.') + 1, props.name.lastIndexOf('.'))
// 		const key = props.name.slice(props.name.lastIndexOf('.') + 1)
// 		if (errors[nameSlice] && errors[nameSlice][index]) {
// 			hasError = errors[nameSlice][index][key]
// 			errorMessage = errors[nameSlice][index][key]?.message
// 		}
// 	} else {
// 		hasError = errors[props.name]
// 		errorMessage = errors[props.name]?.message
// 	}

// 	const checkOnChangeSelect = (value) => {
// 		if (!props.onChangeSelect) return
// 		props.onChangeSelect(value)
// 	}

// 	return (
// 		<Form.Item
// 			style={style}
// 			label={props.label}
// 			className={`${!!props?.className} ${hasError ? 'ant-form-item-with-help ant-form-item-has-error' : ''}`}
// 			required={!!props?.isRequired}
// 		>
// 			<Controller
// 				name={props.name}
// 				control={props.form.control}
// 				render={({ field }) => {
// 					let temp: any = 'fuck'

// 					if (field?.value == null || field?.value == undefined) {
// 						temp = { ...field, value: null }
// 					} else {
// 						temp = field
// 					}
// 					return (
// 						<Select
// 							{...temp}
// 							mode={mode}
// 							className="style-input"
// 							showSearch
// 							loading={!!props?.isLoading}
// 							style={{ width: '100%' }}
// 							placeholder={props?.placeholder}
// 							optionFilterProp="children"
// 							disabled={disabled}
// 							onChange={(value) => {
// 								checkOnChangeSelect(value)
// 								field.onChange(value)
// 							}}
// 						>
// 							{!!props?.optionList &&
// 								props?.optionList.map((o, idx) => (
// 									<Option key={idx} value={o.value} disabled={o.disabled || optionDisabledList?.includes(o.value)}>
// 										{o.title}
// 									</Option>
// 								))}
// 						</Select>
// 					)
// 				}}
// 			/>

// 			{hasError && (
// 				<div className="ant-form-item-explain ant-form-item-explain-error font-color-error">
// 					<div role="alert">{errorMessage}</div>
// 				</div>
// 			)}
// 		</Form.Item>
// 	)
// }

// export default SelectField
import { Form, Select } from 'antd'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { optionCommonPropTypes } from '~/utils/proptypes'

const SelectField = (props: any) => {
	const {
		form,
		name,
		isDynamicField,
		label,
		optionList,
		placeholder,
		disabled,
		mode,
		onChangeSelect,
		isLoading,
		style,
		className,
		isRequired,
		optionDisabledList,
		selectDate,
		timeCourse,
		index,
		defaultValue
	} = props
	const { Option } = Select
	const { errors } = form.formState

	let hasError
	let errorMessage

	if (isDynamicField) {
		// NAME.INDEX.KEY;
		const nameSlice = name.slice(0, name.indexOf('.'))
		const index = name.slice(name.indexOf('.') + 1, name.lastIndexOf('.'))
		const key = name.slice(name.lastIndexOf('.') + 1)
		// IF HAVE NAME SLICE
		if (errors[nameSlice] && errors[nameSlice][index]) {
			hasError = errors[nameSlice][index][key]
			errorMessage = errors[nameSlice][index][key]?.message
		}
	} else {
		hasError = errors[name]
		errorMessage = errors[name]?.message
	}

	const checkOnChangeSelect = (value) => {
		if (!onChangeSelect) return
		onChangeSelect(value)
	}

	useEffect(() => {
		if (defaultValue) {
			form.setValue(name, defaultValue.value)
			checkOnChangeSelect(defaultValue.value)
		}
	}, [defaultValue?.value])

	return (
		<Form.Item
			style={style}
			label={label}
			className={`${className} ${hasError ? 'ant-form-item-with-help ant-form-item-has-error' : ''}`}
			required={isRequired}
		>
			<Controller
				name={name}
				control={form.control}
				render={({ field }) => {
					let temp: any = 'fuck'

					if (field?.value == null || field?.value == undefined) {
						temp == { ...field, value: null }
					} else {
						temp = field
					}

					return (
						<>
							{defaultValue !== undefined && defaultValue !== null ? (
								<Select
									{...temp}
									mode={mode}
									className="style-input"
									showSearch
									loading={isLoading}
									style={{ width: '100%' }}
									placeholder={placeholder}
									optionFilterProp="children"
									disabled={disabled}
									onChange={(value) => {
										checkOnChangeSelect(value)
										field.onChange(value)
									}}
									defaultValue={defaultValue}
								>
									<Option key={defaultValue.value} value={defaultValue.value} disabled={disabled}>
										{defaultValue.title}
									</Option>
									{/* {optionList.map((o, idx) => (
								))} */}
								</Select>
							) : (
								<Select
									{...temp}
									mode={mode}
									className="style-input"
									showSearch
									allowClear
									loading={isLoading}
									style={{ width: '100%' }}
									placeholder={placeholder}
									optionFilterProp="children"
									disabled={disabled}
									onChange={(value) => {
										checkOnChangeSelect(value)
										field.onChange(value)
									}}
								>
									{optionList.map((o, idx) => (
										<Option key={idx} value={o.value} disabled={o.disabled || optionDisabledList?.includes(o.value)}>
											{o.title}
										</Option>
									))}
								</Select>
							)}
						</>
					)
				}}
			/>
			{hasError && (
				<div className="ant-form-item-explain ant-form-item-explain-error font-color-error">
					<div role="alert">{errorMessage}</div>
				</div>
			)}
		</Form.Item>
	)
}

SelectField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	isDynamicField: PropTypes.bool,
	optionList: optionCommonPropTypes,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	mode: PropTypes.string,
	onChangeSelect: PropTypes.func,
	isLoading: PropTypes.bool,
	style: PropTypes.shape({}),
	className: PropTypes.string,
	isRequired: PropTypes.bool,
	optionDisabledList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
	selectDate: PropTypes.bool,
	timeCourse: PropTypes.array,
	index: PropTypes.number,
	defaultValue: PropTypes.object
}
SelectField.defaultProps = {
	isDynamicField: false,
	optionList: [],
	label: '',
	placeholder: '',
	disabled: false,
	onChangeSelect: null,
	mode: '',
	isLoading: false,
	style: {},
	className: '',
	isRequired: false,
	optionDisabledList: [],
	selectDate: false,
	timeCourse: [],
	index: 0,
	defaultValue: null
}
export default SelectField
