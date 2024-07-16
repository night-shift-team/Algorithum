def remove_sting(input_str):
    stack = []
    result = []

    for char in input_str:
        if char == '(':
            stack.append('(')
        elif char == ')':
            if stack:
                stack.pop()
        else:
            if not stack:
                result.append(char)

    return ''.join(result)

# 테스트케이스 1
input_str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)"
output_str = remove_sting(input_str)
print(output_str) 
