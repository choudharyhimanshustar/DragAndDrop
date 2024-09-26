# Web Series List - Drag and Drop

This project is a React-based web application where users can create a list of their favorite web series by dragging and dropping items. The app uses `react-beautiful-dnd` to enable drag-and-drop functionality. Users can reorder the list by dragging items around.

## Features

- **Drag and Drop**: Rearrange the list of web series using drag and drop.
- **Dynamic State Management**: The order of the web series updates dynamically when items are dropped in a new position.
- **Customizable**: Users can add and reorder their own web series items.
- **Responsive UI**: The application is responsive, offering a smooth experience on various screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **react-beautiful-dnd**: A drag-and-drop library for React that makes reordering lists easy.
- **CSS**: For styling the application.

## Installation and Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/choudharyhimanshustar/DragAndDrop.git
    ```

2. **Navigate into the project directory:**
    ```bash
    cd draganddrop
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the app:**
    ```bash
    npm start
    ```

5. **Open the app in your browser:**
    ```
    http://localhost:3000
    ```


## How It Works

- The web series are rendered as draggable items using `react-beautiful-dnd`.
- Each item can be moved by dragging and dropped to a new position within the list.
- The list updates dynamically with the new order once an item is dropped.
- The app maintains the state of the list using the `useState` hook in React.




## Future Enhancements

- **Add/Remove Items**: Allow users to add or remove web series from the list.
- **Persistence**: Save the list order in local storage or a database.
- **Styling**: Improve the user interface and make the design more polished.

## Contributing

If you'd like to contribute to the project, please feel free to fork the repository and submit a pull request.



