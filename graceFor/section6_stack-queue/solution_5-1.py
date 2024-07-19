def count_cut(bracket_string):
    stack = []
    total_pieces = 0
    
    for i in range(len(bracket_string)):
        if bracket_string[i] == '(':
            stack.append('(')
        else:
            if bracket_string[i-1] == '(':
                stack.pop()
                total_pieces += len(stack)
            else:
                stack.pop()
                total_pieces += 1
    
    return total_pieces

# 테스트 케이스 1
bracket_string1 = "()(((()())(())()))(())"
print(count_cut(bracket_string1))

#테스트 케이스 2
bracket_string2 = "(((()(()()))(())()))(()())"
print(count_cut(bracket_string2)) 
