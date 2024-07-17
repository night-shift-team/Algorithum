def evaluate(numbers):
    stack = []
    
    for char in numbers:
        if char.isdigit():
            stack.append(int(char))
        else:
            # 연산자일 경우
            b = stack.pop()
            a = stack.pop()
            
            if char == '+':
                stack.append(a + b)
            elif char == '-':
                stack.append(a - b)
            elif char == '*':
                stack.append(a * b)
            elif char == '/':
                stack.append(a / b)
    
    return stack.pop()

# 테스트 케이스1
input = "352+*9-"
result = evaluate(input)
print(result) 
