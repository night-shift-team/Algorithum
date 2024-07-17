package main

import (
	"fmt"
	"strings"
)

func main() {
	var goalho string
	fmt.Scan(&goalho)
	for i := 0; ; i++ {
		if len(goalho) <= 0 {
			break
		}
		if strings.Count(goalho, "(") != strings.Count(goalho, ")") {
			fmt.Println("NO")
			return
		}
		if goalho == strings.Replace(goalho, "()", "", strings.Count(goalho, "()")) {
			fmt.Println("NO")
			return
		}
		goalho = strings.Replace(goalho, "()", "", strings.Count(goalho, "()"))
	}
	fmt.Println("YES")
	return
}
