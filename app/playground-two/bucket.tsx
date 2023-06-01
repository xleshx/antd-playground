import { useDrop } from "react-dnd"
import AvatarContainer from "./target"

export default function Bucket({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'BOX',

        // Props to collect
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return (
        <>
            <div
                ref={drop}
                role={'Dustbin'}
                style={{
                    backgroundColor: isOver ? 'red' : '#118ce9',
                    opacity: 0.9,
                }}
            >
                {children}
                {canDrop ? 'Release to drop' : 'Drag a box here'}
            </div>
        </>
    )
}