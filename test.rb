puts (1...10).select { |num| num % 3 == 0 || num % 5 == 0 }.inject(0) { |sum, num| sum += num }