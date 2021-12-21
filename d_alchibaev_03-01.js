var primes = new Array()

var iter = 2
while (iter <= 100){
	var isPrime = true
	for (var i=0; i < primes.length; i++){
        if (primes[i] < iter && iter % primes[i] == 0){
			isPrime = false
		}
	}
	if (isPrime == true){
		primes.push(iter)
		console.log(iter)
	}
	iter++
}