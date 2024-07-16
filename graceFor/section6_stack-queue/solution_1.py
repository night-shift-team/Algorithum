def is_valid_parentheses(s):
    stack = []
    
    for char in s:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if not stack:
                return "NO"
            stack.pop()
    
    return "YES" if not stack else "NO"

# 테스트케이스 1
input_string = "(()(()))(())"
print(is_valid_parentheses(input_string))
