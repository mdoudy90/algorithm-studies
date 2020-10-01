var Solution = function(nums) {
  this.default = nums.slice();
  this.nums = nums.slice();
};

Solution.prototype.reset = function() {
this.nums = this.default.slice();
return this.nums;
};

Solution.prototype.shuffle = function() {
for (let i = 0; i < Math.floor(this.nums.length / 2); i++) {
  let randomNum1 = Math.floor(Math.random() * this.nums.length);
  [this.nums[i], this.nums[randomNum1]] = [this.nums[randomNum1], this.nums[i]];
}
return this.nums;
};

var obj = new Solution([1,2,3,4]);
console.log(obj.reset())
console.log(obj.shuffle())
console.log(obj.shuffle())