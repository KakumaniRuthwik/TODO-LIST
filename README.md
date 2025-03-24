
# TODO List Project

This is a simple Todo List application where you can add, delete, and navigate between different task lists stored in the sidebar. The application uses localStorage to persist the tasks across page reloads.

## Project Structure

```
src/
│
├── css/
│   └── output.css              # Compiled CSS file
├── Icons/
│   └── Hamburger.svg           # Menu icon for sidebar toggle
│   └── Close.svg               # Close icon for sidebar toggle
│   └── Add.svg                 # Add item icon for the todo list
│   └── Cross.svg               # Close icon for adding new task
│   └── ellipsis.svg            # Ellipsis icon for the more options button
├── script/
│   └── script.js               # Main JavaScript file handling app logic
├── index.html                  # Main HTML file
└── README.md                   # Project documentation (this file)
```

## Features

- **Sidebar Toggle**: A smooth animation to toggle the sidebar with a hamburger and close icon. 
- **Task Addition**: Easily add tasks by entering a title in the input field and storing them in `localStorage`.
- **Task Deletion**: Remove tasks both from the UI and `localStorage` with a delete button.
- **Task Persistence**: The tasks are saved to `localStorage` so they persist across page reloads.
- **Dynamic Sidebar Update**: The task list in the sidebar is automatically updated as tasks are added or deleted.
- **Hover Effects & Animations**: Hover effects for tasks and smooth animations to improve the user experience.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone git@github.com:KakumaniRuthwik/TODO-LIST.git
   ```

2. Navigate into the project directory:
   ```bash
   cd TODO-LIST
   ```

3. Open `index.html` in your preferred browser.

## Usage

1. **Sidebar Toggle**: Click on the hamburger icon to open or close the sidebar.
2. **Add Task**: Click the "Add Item" button to reveal the input form and add a new task to the sidebar.
3. **Delete Task**: Hover over a task in the sidebar, and a delete button will appear. Click on it to Delete the task.
4. **Task Persistence**: Reload the page, and the tasks will remain stored in `localStorage`.

## Technologies Used

- HTML
- CSS
- JavaScript
- localStorage

## Contributing

Feel free to fork this repository, make changes, and submit a pull request. If you find any bugs or have suggestions, please open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
