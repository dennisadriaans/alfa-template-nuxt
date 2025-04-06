export interface User {
    id: string;
    date: string;
    status: string;
    email: string;
    amount: number;
}
export const UsersData: User[] = [
    {
        id: "4600",
        date: "2024-03-11T15:30:00",
        status: "paid",
        email: "james.anderson@example.com",
        amount: 594,
    },
    {
        id: "4599",
        date: "2024-03-11T10:10:00",
        status: "failed",
        email: "mia.white@example.com",
        amount: 276,
    },
    {
        id: "4598",
        date: "2024-03-11T08:50:00",
        status: "refunded",
        email: "william.brown@example.com",
        amount: 315,
    },
    {
        id: "4597",
        date: "2024-03-10T19:45:00",
        status: "paid",
        email: "emma.davis@example.com",
        amount: 529,
    },
    {
        id: "4596",
        date: "2024-03-10T15:55:00",
        status: "paid",
        email: "ethan.harris@example.com",
        amount: 639,
    },
    {
        id: "4595",
        date: "2024-03-10T12:20:00",
        status: "processing",
        email: "olivia.wilson@example.com",
        amount: 184,
    },
    {
        id: "4594",
        date: "2024-03-09T16:40:00",
        status: "refunded",
        email: "noah.taylor@example.com",
        amount: 432,
    },
    {
        id: "4593",
        date: "2024-03-09T09:15:00",
        status: "paid",
        email: "sophia.martin@example.com",
        amount: 728,
    },
    {
        id: "4592",
        date: "2024-03-08T21:30:00",
        status: "failed",
        email: "lucas.clark@example.com",
        amount: 347,
    },
    {
        id: "4591",
        date: "2024-03-08T14:05:00",
        status: "paid",
        email: "isabella.rodriguez@example.com",
        amount: 519,
    },
    {
        id: "4590",
        date: "2024-03-08T11:50:00",
        status: "processing",
        email: "mason.lewis@example.com",
        amount: 263,
    },
    {
        id: "4589",
        date: "2024-03-07T17:25:00",
        status: "paid",
        email: "amelia.walker@example.com",
        amount: 652,
    },
]