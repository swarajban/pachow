package main

import (
	"fmt"
	"time"
	"math/rand"
)

func pachow() string {
	hards := []string{"p", "ch", "k", "t", "w", "z", "m"}
	vowels := []string{"i", "o", "a"}

	numSyllables := rand.Intn(5) + 1
	pachow := ""

	for i := 0; i < numSyllables; i++ {
		hard := getRandom(hards)
		vowel := getRandom(vowels)
		pachow += hard + vowel
	}

	pachow += getRandom(hards)
	pachow += "ow"
	return pachow
}

func getRandom(parts []string) string {
	index := rand.Intn(len(parts))
	return parts[index]
}

func main() {
	rand.Seed(time.Now().UnixNano())
	fmt.Printf(pachow())
}
