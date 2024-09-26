import React from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './WebSeriesList.css'
export default function WebSeriesList({ items, setItems }) {


    const onDragEnd = (result) => {
        const { destination, source } = result;
        console.log(destination);


        // If there's no destination (i.e., dropped outside the list), return
        if (!destination) return;


        // If the item was dropped in the same place, return
        if (destination.index === source.index) return;


        // Rearrange items
        const reorderedItems = Array.from(items);
        const [removed] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, removed);


        // Update the state with the new item order
        setItems(reorderedItems);
    };
    return (<DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="Drop"
                >
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="Drag"
                                    style={{ ...provided.draggableProps.style }}
                                >
                                    <img src={item.watchUrl} className="image" />
                                    <h1>{item.text}</h1>
                                    <img src={item.image} className="image" />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>)
}









