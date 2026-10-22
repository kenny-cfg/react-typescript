function getUser(id: string | number): string {
  return `User ID is: ${id}`;
}

console.log(getUser(101));
console.log(getUser("A202"));