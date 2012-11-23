__author__ = 'sbanerjee'

import random

def main():
	hards = ['p', 'ch', 'k', 't', 'w', 'z', 'm']
	vowels = ['i', 'o', 'a']

	pachow = ''
	numSyllables = random.randint(1,4)
	for i in range(0, numSyllables):
		hard = random.choice(hards)
		vowel = random.choice(vowels)
		pachow += hard + vowel

	pachow += random.choice(hards)
	pachow += 'ow'
	print pachow

if __name__ == "__main__":
	main()
