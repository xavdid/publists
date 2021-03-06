// describes wunderlist types, as I need them

interface Task {
  id: number,
  created_at: string, // this is a datetime string, really
  due_date: string, // also datetime
  list_id: number,
  starred: boolean,
  title: string,
  completed: boolean,
  // I add these manually later during condensation
  subtasks?: Subtask[],
  note?: string
}

interface List {
  id: number,
  created_at: string, // this is a datetime string, really
  title: string,
  type: string
}

interface Position {
  // id: number,
  values: number[],
  // type: 'list_position' | 'task_position'
}

interface Subtask {
  id: number,
  created_at: string, // this is a datetime string, really
  task_id: number,
  title: string,
  completed: boolean
}

interface Note {
  id: number,
  content: string,
  task_id: number
}

interface User {
  wid: string,
  access_token: string,
  name: string,
  public_lists: {[s:string]: boolean}
}

interface Folder {
  id: number,
  title: string,
  list_ids: number[],
  type: string
}
