import { Form, Spin } from 'antd'
import React from 'react'
import EditorSimple from '~/components/Elements/EditorSimple'

function UpdateDetails(props) {
	const { form, loading, height } = props

	return (
		<>
			{loading ? (
				<div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
					<Spin size="large" />
				</div>
			) : (
				<div className="row vc-e-d cc-vc-details" style={{ height: height }}>
					<div className="col-md-12 col-12">
						<Form.Item name="Slogan" label="Slogan">
							<EditorSimple
								defaultValue={form.getFieldValue('Slogan')}
								handleChange={(e) => form.setFieldsValue({ Slogan: e })}
								isTranslate={false}
								isSimpleTool={true}
								height={90}
							/>
						</Form.Item>
					</div>
					<div className="col-md-12 col-12">
						<Form.Item name="Requirements" label="Điều kiện học">
							<EditorSimple
								defaultValue={form.getFieldValue('Requirements')}
								handleChange={(e) => form.setFieldsValue({ Requirements: e })}
								isTranslate={false}
								isSimpleTool={true}
								height={90}
							/>
						</Form.Item>
					</div>
					<div className="col-md-12 col-12">
						<Form.Item name="CourseForObject" label="Đối tượng học">
							<EditorSimple
								defaultValue={form.getFieldValue('CourseForObject')}
								handleChange={(e) => form.setFieldsValue({ CourseForObject: e })}
								isTranslate={false}
								isSimpleTool={true}
								height={90}
							/>
						</Form.Item>
					</div>
					<div className="col-md-12 col-12">
						<Form.Item name="ResultsAchieved" label="Nội dung khóa học">
							<EditorSimple
								defaultValue={form.getFieldValue('ResultsAchieved')}
								handleChange={(e) => form.setFieldsValue({ ResultsAchieved: e })}
								isTranslate={false}
								isSimpleTool={true}
								height={90}
							/>
						</Form.Item>
					</div>
					<div className="col-md-12 col-12">
						<Form.Item name="Description" label="Mô tả">
							<EditorSimple
								defaultValue={form.getFieldValue('Description')}
								handleChange={(e) => form.setFieldsValue({ Description: e })}
								isTranslate={false}
								isSimpleTool={true}
								height={90}
							/>
						</Form.Item>
					</div>
				</div>
			)}
		</>
	)
}

export default UpdateDetails
