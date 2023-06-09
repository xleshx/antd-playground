import { Avatar, Space } from "antd";

export default function AvatarContainer({ ids }: { ids: number[] }) {
    return (
        <Space direction="horizontal">
            {ids.map((id: number) => {
                return (
                    <div>
                        <Avatar size={id}>{id}</Avatar>
                    </div>
                )
            })}

        </Space>
    )
}