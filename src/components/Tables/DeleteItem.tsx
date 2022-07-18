import { Tooltip } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AlertTriangle, Trash, X } from 'react-feather'

const DeleteItem = (props) => {
	const [isVisible, setIsVisible] = useState(false)
	const { onDelete } = props

	const handleDelete = () => {
		onDelete()
		setIsVisible(false)
	}

	return (
		<>
			<Tooltip title="Xóa">
				<button className="btn btn-icon delete" onClick={() => setIsVisible(true)}>
					<img src="/images/delete-icon.png" style={{ width: 20, height: 20 }} alt="delete icon" />
				</button>
			</Tooltip>
			<Modal
				title={
					<div className="cart-icon-title p-0 m-0">
						<img src="/images/buy-cart.png" alt="cart icon" />
						<span className="ml-3">Giỏ hàng</span>
					</div>
				}
				visible={isVisible}
				onOk={handleDelete}
				onCancel={() => setIsVisible(false)}
				footer={null}
			>
				<div className="row">
					<div className="col-12">

				<p className="text-confirm">Bạn có chắc chắn muốn xóa?</p>
					</div>
					<div className="col-12 d-flex justify-content-end">
						<button className="btn btn-light" onClick={()=>{setIsVisible(false)}}>Hủy</button>
						<button className="btn btn-danger" onClick={()=>{handleDelete()}} style={{marginLeft: 8}}>Xóa mục</button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default DeleteItem
