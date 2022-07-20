This package contains four nodes for Node-RED to make conditional actions and repetitive actions slightly easier.

The first three nodes, num-if, str-if and bool-if repeat their input message exactly if it matches a condition.
str-if only lets through messages if the msg.payload is a string and matches condition, which can be:
- Equals: the string exactly equals the set value
- Contains: the string contains the set value at any point
- Not Equals: the string does NOT equal a set value
- Not Contains: the string does NOT contain the set value
- Regex: the string matches a regular expression (/g flag enabled)
Note: These conditions are case-sensitive

num-if only lets through numbers which match a condition, which can be:
- Equals: the number is equal to a set value
- Higher than: the number is higher than a set value
- Lower than: the number is lower than a set value
- Not Equals: the number is NOT equal to a set value
- Rounded: the number is a round number
- Even: the number is an even number
- Odd: the number is an odd number

bool-if only lets through boolean values if they match a condition:
- Equals: the boolean equals a set value
- Not Equals: the boolean does NOT equal a set value

The last node is a repeat node. This node simply repeats its input exactly as-is a set number of times.

