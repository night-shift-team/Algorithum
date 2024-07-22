def check_course(required_courses, course_plan):
    required_index = 0
    n_required = len(required_courses)

    for course in course_plan:
        if course == required_courses[required_index]:
            required_index += 1
            if required_index == n_required:
                return "YES"
    
    return "NO"

# 테스트케이스 1
required_courses = "CBA"
course_plan = "CBDAGE"
print(check_course(required_courses, course_plan))
