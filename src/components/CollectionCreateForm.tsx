import React, { useState, useRef, useEffect } from "react";

import { Modal, Form, Input, Radio } from "antd";

type Props = {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
};

const CollectionCreateForm = ({ visible, onCreate, onCancel }: Props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        // @ts-ignore
        inputRef?.current?.focus({
          cursor: "start",
        });
      }, 100);
    }
  }, [visible]);

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input ref={inputRef} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { CollectionCreateForm };
