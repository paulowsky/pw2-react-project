import { Badge, Text } from "@chakra-ui/react"

function Hello({ name }) {
  console.log(name)
  return (
    <div className="Hello">
      <Text fontSize="xl" fontWeight="bold">
        Hello
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          {name}
        </Badge>
        !
      </Text>
    </div>
  )
}

export default Hello
