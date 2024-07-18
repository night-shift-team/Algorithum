package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	//Input
	reader := bufio.NewReader(os.Stdin)
	peopleString, _ := reader.ReadString(']')
	var limit int
	fmt.Scanln(&limit)
	people := make([]int, 0)

	nonEdgeString := strings.Trim(peopleString, "[]")
	strArr := strings.Split(nonEdgeString, ",")
	for _, value := range strArr {
		intVal, _ := strconv.Atoi(strings.TrimSpace(value))
		people = append(people, intVal)
	}
	//solution
	result := solution1(people, limit)
	fmt.Println(result)
	return
}

func solution1(people []int, limit int) int {
	count := 0

	//내림차순 정렬(무거운 순)
	sort.Slice(people, func(i, j int) bool {
		return people[i] >= people[j]
	})
	// 양 끝 무게를 합한 무게가 limit을 넘으면 보트+1, i++, lastIndex는 그 다음 큰거랑 다시 비교
	lastIndex := len(people) - 1
	for i := 0; i < len(people); i++ {
		if i > lastIndex {
			break
		}
		if i == lastIndex {
			count++
			break
		}
		if people[i]+people[lastIndex] > limit {
			count++
			continue
		}
		count++
		lastIndex--
	}
	return count
}
