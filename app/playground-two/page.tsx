'use client';
import Box from "./box";
import Bucket from "./bucket";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Space } from "antd";
import AvatarContainer from "./target";
import { useState } from "react";

export default function PlaygroundTwo() {
    const [ids, setIds] = useState([])

    const seedIds = [80, 22, 66, 34, 12, 43, 62]

    const handler = (id: number) => {
        setIds(ids => [...ids, id])
    }

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <Space direction="vertical">
                    <Space direction="horizontal">
                        {seedIds.map(id => {
                            return (<Box id={id} handler={handler} />)
                        })}
                    </Space>
                    <Space direction="horizontal">
                        <Bucket><AvatarContainer ids={ids} /></Bucket>
                    </Space>
                </Space>
            </DndProvider>
        </div>
    )
}