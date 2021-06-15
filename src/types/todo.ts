export interface TodoInfo {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoAddRequest {
  title: TodoInfo["title"];
  isDone: TodoInfo["isDone"];
}
