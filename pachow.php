<?php

$hards = array(
		 'p',
		  'ch',
		   'k',
		    't',
		     'w',
		      'z',
		       'm',
	      );

$vowels = array(
		 'i',
		  'o',
		   'a',
	       );

$numSyllables = mt_rand(1,4);
$pachow = '';
for ($i = 0; $i < $numSyllables; ++$i) {
	 $hard = $hards[mt_rand(0, count($hards) - 1)];
	  $vowel = $vowels[mt_rand(0, count($vowels) - 1)];
	   $pachow .= $hard.$vowel;
}

echo $pachow.$hards[mt_rand(0, count($hards) - 1)].'ow';

