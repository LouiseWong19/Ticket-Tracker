# Ticket Tracker 
### Author - Louise Wong

## Introduction
A ticket tracker which allows users to keep track of all the tickets the staff members had completed. The user can add and minus the number of tickets accordingly. 

### Technology Used:
- React
- JSX
- SCSS

### Design
The design is aimed to be simple and used a lighter colour `#F7F6E7` as the background and a darker colour `#2B3C4F` for the trackers to bring out the contrast.

## Description
### App
The App.jsx included implementation of the component `<EmployeeTile />` and the data file `team.js` is also imported in the App.jsx.

### Components
Three components have been created:
- `Counter`
- `Employee`
- `EmployeeTiles`
The `Counter` component includes a `useState` to create a counter which allows the user to press - or + button to decrement or increment the counter by 1.
The `Employee` component is created to include the employee detail such as name and their role. The `EmployeeTiles` component is created to map out the employee ticket tiles with employee details taken from `team.js` data file.

