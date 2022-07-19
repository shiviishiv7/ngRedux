export class Todo {
    id: number
    name: string
    description: string
    userId: number = Math.floor(Math.random() * 10)
    status: string = "CREATED"
    create_on: string = new Date().toDateString().toString();
    update_on: string = new Date().toDateString().toString();
}