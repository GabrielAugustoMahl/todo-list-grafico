import React, {createContext} from "react";
import { TodoService } from "../utils/TodoService";

export const TodoContext = createContext<{todoService: TodoService} | undefined>(undefined)