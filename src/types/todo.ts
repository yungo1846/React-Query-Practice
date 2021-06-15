export interface TodoInfo {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoAddRequest {
  title: TodoInfo["title"];
  isDone: TodoInfo["isDone"];
}

export interface TodoEditRequest {
  id: TodoInfo["id"];
  title: TodoInfo["title"];
}

export interface TodoCheckRequest {
  id: TodoInfo["id"];
  isDone: TodoInfo["isDone"];
}
