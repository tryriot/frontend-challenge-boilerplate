import { reactive } from "vue";

export enum TodoListItemStatus {
  ACTIVE = "active",
  COMPLETED = "completed",
}

export interface TodoListItem {
  title: string;
  status: TodoListItemStatus;
}

const interviewTodoListItems: TodoListItem[] = [
  {
    title: "Basic implementation of todo list",
    status: TodoListItemStatus.COMPLETED,
  },
  {
    title: "Bug: The trash icon is not working",
    status: TodoListItemStatus.ACTIVE,
  },
  {
    title: "Bug: When pressing enter in input, the page reloads",
    status: TodoListItemStatus.ACTIVE,
  },
  {
    title: "Bug: Adding a second item renames the first one",
    status: TodoListItemStatus.ACTIVE,
  },
  {
    title: "Feat: I want the input to clear after I add the item",
    status: TodoListItemStatus.ACTIVE,
  },
  {
    title: "Feat: I want to be able to filter by status",
    status: TodoListItemStatus.ACTIVE,
  },
];

export const useTodoListItems = () => {
  const items: TodoListItem[] = reactive(interviewTodoListItems.concat([]));

  const addItem = (item: TodoListItem) =>
    items.push({ title: item.title, status: TodoListItemStatus.ACTIVE });

  const toggleItem = (index: number) => {
    if (items[index].status === TodoListItemStatus.ACTIVE) {
      items[index].status = TodoListItemStatus.COMPLETED;
    } else {
      items[index].status = TodoListItemStatus.ACTIVE;
    }
  };

  const removeItem = (index: number) => items.splice(index, 1);

  return {
    items,
    addItem,
    removeItem,
    toggleItem,
  };
};
