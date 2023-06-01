
'use client';
import { Card, Space } from "antd";

export default function PlaygroundOne() {
    return (
        <Space
            direction="horizontal"
            size="large"
            style={{ display: 'flex' }}
            >
            <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>
    );
}