import { Badge, Text } from "@chakra-ui/react"

function Count({ number }) {
  return (
    <div className="Count">
      <Text fontSize="xl" fontWeight="bold">
        Number:
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          {number}
        </Badge>
      </Text>
    </div>
  )
}

export default Count
