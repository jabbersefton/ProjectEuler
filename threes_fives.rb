$total = 0

for num in 1...10
	if (num % 3 == 0) || (num % 5 == 0)
		$total += num
	end
end

puts $total