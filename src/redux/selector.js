import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = state => state.filter.search;

export const todoListSelector = state => state.todoList;

export const filterStatusSelector = state => state.filter.status;

export const filterPrioritySelector = state => state.filter.priority;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritySelector,
    (todoList, searchText, status, priority) => {
        return todoList.filter(todo => {
            if(status === 'All' ) {
                return todo.name.includes(searchText) && (priority.length ?  priority.includes(todo.priority) : true);
            }

            return (todo.name.includes(searchText) && 
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priority.length ? priority.includes(todo.priority) : true)
            ) 
        });
    }
)

