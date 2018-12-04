// Given two integers a and b, which can be positive or negative, find the sum of
// all the numbers between including them too and return it. If the two numbers
// are equal return a or b.

function GetSum( a,b )
{
   return 0.5*(a + b)*(Math.abs(a-b)+1)
}

