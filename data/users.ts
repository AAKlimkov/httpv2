export interface userInt {
    id: string
    username: string
    age: number
    hobbies: Array<string>
}

export let users: Array<userInt> = [
    {
        id: '1',
        username: 'Andrey',
        age: 30,
        hobbies: []
    }
]
