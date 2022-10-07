// export type Assignment = {
//   id: string;
//   title: string;
//   userId: string;
// };

// export async function getAllAssignments(): Promise<Assignment[]> {
//   const assignments = [
//     { id: "10", title: "Title XA", userId: "1" },
//     { id: "3", title: "Title YB", userId: "2" },
//     { id: "17", title: "Title XC", userId: "3" },
//     { id: "8", title: "Title YD", userId: "1" },
//     { id: "2", title: "Title XE", userId: "2" },
//     { id: "33", title: "Title YF", userId: "3" },
//   ];
//   return new Promise((res) =>
//     setTimeout(() => {
//       res(assignments);
//     }, 1000)
//   );
// }
// export const expectedResultObject = {
//   X: [
//     { id: "2", title: "Title XE", userId: "2" },
//     { id: "10", title: "Title XA", userId: "1" },
//     { id: "17", title: "Title XC", userId: "3" },
//   ],
//   Y: [
//     { id: "3", title: "Title YB", userId: "2" },
//     { id: "8", title: "Title YD", userId: "1" },
//     { id: "33", title: "Title YF", userId: "3" },
//   ],
// };

// export type User = {
//   id: string;
//   name: string;
// };

// const userDataBase: User[] = [
//   { id: "1", name: "User Z" },
//   { id: "2", name: "User X" },
//   { id: "3", name: "User Y" },
// ];

// export async function getUserById(id: string): Promise<User | undefined> {
//   return new Promise((res) =>
//     setTimeout(() => {
//       const user = userDataBase.find((user) => user.id === id);
//       res(user);
//     }, 1000)
//   );
// }

// export const expectedResult = [
//   {
//     id: "2",
//     title: "Title E",
//     user: { id: "2", name: "User X", numberOfPosts: 2 },
//   },
//   {
//     id: "3",
//     title: "Title B",
//     user: { id: "2", name: "User X", numberOfPosts: 2 },
//   },
//   {
//     id: "17",
//     title: "Title C",
//     user: { id: "3", name: "User Y", numberOfPosts: 2 },
//   },
//   {
//     id: "33",
//     title: "Title F",
//     user: { id: "3", name: "User Y", numberOfPosts: 2 },
//   },
//   {
//     id: "8",
//     title: "Title D",
//     user: { id: "1", name: "User Z", numberOfPosts: 2 },
//   },
//   {
//     id: "10",
//     title: "Title A",
//     user: { id: "1", name: "User Z", numberOfPosts: 2 },
//   },
// ];
export type Assignment = {
  id: string;
  title: string;
  userId: string;
};

export async function getAllAssignments(): Promise<Assignment[]> {
  const assignments = [
    { id: "10", title: "Title A", userId: "1", tag: "X,Y" },
    { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
    { id: "17", title: "Title C", userId: "3", tag: "Y" },
    { id: "8", title: "Title D", userId: "1", tag: "X" },
    { id: "2", title: "Title E", userId: "2", tag: "X,Y" },
    { id: "33", title: "Title F", userId: "3", tag: "Z" },
  ];

  return new Promise((res) =>
    setTimeout(() => {
      res(assignments);
    }, 1000)
  );
}
export const expectedResultObject = {
  X: [
    { id: "2", title: "Title E", userId: "2", tag: "X,Y" },
    { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
    { id: "8", title: "Title D", userId: "1", tag: "X" },
    { id: "10", title: "Title A", userId: "1", tag: "X,Y" },
  ],
  Y: [
    { id: "2", title: "Title E", userId: "2", tag: "X,Y" },
    { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
    { id: "10", title: "Title A", userId: "1", tag: "X,Y" },
    { id: "17", title: "Title C", userId: "3", tag: "Y" },
  ],
  Z: [
    { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
    { id: "33", title: "Title F", userId: "3", tag: "Z" },
  ],
};
export type User = {
  id: string;
  name: string;
};

const userDataBase: User[] = [
  { id: "1", name: "User Z" },
  { id: "2", name: "User X" },
  { id: "3", name: "User Y" },
];

export async function getUserById(id: string): Promise<User | undefined> {
  return new Promise((res) =>
    setTimeout(() => {
      const user = userDataBase.find((user) => user.id === id);
      res(user);
    }, 1000)
  );
}

export const expectedResult = [
  {
    id: "2",
    title: "Title E",
    user: { id: "2", name: "User X", numberOfPosts: 2 },
  },
  {
    id: "3",
    title: "Title B",
    user: { id: "2", name: "User X", numberOfPosts: 2 },
  },
  {
    id: "17",
    title: "Title C",
    user: { id: "3", name: "User Y", numberOfPosts: 2 },
  },
  {
    id: "33",
    title: "Title F",
    user: { id: "3", name: "User Y", numberOfPosts: 2 },
  },
  {
    id: "8",
    title: "Title D",
    user: { id: "1", name: "User Z", numberOfPosts: 2 },
  },
  {
    id: "10",
    title: "Title A",
    user: { id: "1", name: "User Z", numberOfPosts: 2 },
  },
];

// export const expectedResultObject = {
//   X: [
//     { id: "2", title: "Title E", userId: "2", tag: "X,Y" },
//     { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
//     { id: "8", title: "Title D", userId: "1", tag: "X" },
//     { id: "10", title: "Title A", userId: "1", tag: "X,Y" },
//   ],
//   Y: [
//     { id: "2", title: "Title E", userId: "2", tag: "X,Y" },
//     { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
//     { id: "10", title: "Title A", userId: "1", tag: "X,Y" },
//     { id: "17", title: "Title C", userId: "3", tag: "Y" },
//   ],
//   Z: [
//     { id: "3", title: "Title B", userId: "2", tag: "X,Y,Z" },
//     { id: "33", title: "Title F", userId: "3", tag: "Z" },
//   ],
// };
