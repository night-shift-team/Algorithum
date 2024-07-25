package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	var sizes [][2]int
	reader := bufio.NewReader(os.Stdin)
	sizeString, _ := reader.ReadString('\n')
	sizeString = strings.Trim(sizeString, "\n")
	splitcommaString := strings.Split(sizeString, ",")
	for i := 0; i < len(splitcommaString); i += 2 {
		first, _ := strconv.Atoi(strings.Trim(splitcommaString[i], "[ ]"))
		second, _ := strconv.Atoi(strings.Trim(splitcommaString[i+1], "[ ]"))
		sizes = append(sizes, [2]int{first, second})
	}
	result := solution240715(sizes)
	fmt.Println(result)
}
func solution240715(sizes [][2]int) int {
	for i := range sizes {
		// 작은값이 첫번째 index, 큰 값이 두번째 index 에 위치
		if sizes[i][0] > sizes[i][1] {
			sizes[i][0], sizes[i][1] = sizes[i][1], sizes[i][0]
		}
	}
	bigInFirst, bigInSecond := 0, 0
	for i := range sizes {
		if bigInFirst < sizes[i][0] {
			bigInFirst = sizes[i][0]
		}
		if bigInSecond < sizes[i][1] {
			bigInSecond = sizes[i][1]
		}
	}
	return bigInFirst * bigInSecond
}
