const obj = {
  amount : 150000,
  years : 30,
  rate : 3.5
}

const obj2 = {
  amount : 20000,
  years : 10,
  rate : 4.5
}

const obj3 = {
  amount : 100,
  years : 1,
  rate : 5.5
}

const obj4 = {
  amount : 1000000,
  years : 50,
  rate : 6.5
}


it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(obj)).toBeCloseTo(673.57);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(obj2)).toBeCloseTo(207.28);
});

it("should handle 1 year as an input", function () {
  expect(calculateMonthlyPayment(obj3)).toBeCloseTo(8.58);
})

it("should handle very high numbers", function () {
  expect(calculateMonthlyPayment(obj4)).toBeCloseTo(5637.17);
})
