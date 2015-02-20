$first = 1
$second = 2
$fib = 0
$fibeven = 0

for $first in 1...100
	if $first % 1 == 0
		$fibeven += $first
	end
  $fib = $first + $second
  $first = $second
  $second = $fib
end

puts $fibeven