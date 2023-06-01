import { Avatar } from 'antd';
import { useDrag } from "react-dnd"

export default function Box({ id, handler }) {

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        item: { id: id },
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: 'BOX',
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<{ id: number }>()
            if (item && dropResult) {
                handler(item.id)
            }
        },

    }))

    return (
        <>
            <div
                ref={dragPreview}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                }}>
                <div role="Handle" ref={drag} >
                    <Avatar size={id}>{id}</Avatar>
                </div>
            </div>
        </>
    )
}