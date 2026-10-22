import type { PropsWithChildren } from "react"

type DisgustingHeaderProps = PropsWithChildren & {
  age: number,
}

const DisgustingHeader = ({ age, children }: DisgustingHeaderProps) => {
  return <h1>{children} is {age} years old</h1>
}

export default DisgustingHeader;