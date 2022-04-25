import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider, Tooltip } from "antd";
import { LogIn } from "react-feather";

const ReserveChangeCourse = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Tooltip title="Chuyển vào khóa">
        <button
          className="btn btn-icon exchange"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <LogIn />
        </button>
      </Tooltip>

      <Modal
        title="Chuyển vào khóa"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div style={{ paddingRight: 5 }}>
                <Button type="primary" size="large">
                  Xác nhận
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => setIsModalVisible(false)}
                  type="default"
                  size="large"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        }
      >
        <div className="wrap-form">
          <Form layout="vertical">
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Học viên">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Số điện thoại">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Ngày hẹn">
                  <Input className="style-input" placeholder="" type="date" />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Chọn khóa">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="jack">Jack</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Giá khóa học">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Số tiền đã đóng">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Mã giảm giá">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Giảm giá">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Còn lại">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Thanh toán">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Phương thức">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Ngày thu nợ">
                  <Input className="style-input" placeholder="" type="date" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-12">
                <Form.Item label="Ghi chú">
                  <TextArea />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ReserveChangeCourse;
