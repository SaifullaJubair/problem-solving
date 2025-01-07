// 1. Return the SUm of Two Numbers

const sumOfTwoNumber = (x, y) => {
  let sum;
  sum = x + y;
  return sum;
};

// console.log(sumOfTwoNumber(3,2))
// console.log(sumOfTwoNumber(-3,-6))
// console.log(sumOfTwoNumber(7,3))

// 2. Is the Number Less than or Equal to Zero?

const lessThanOrEqualToZero = (num) => {
  if (num <= 0) {
    return true;
  } else return false;
};

// console.log(lessThanOrEqualToZero(-1));

//3. Less than 100

const lessThanHanded = (num1, num2) => {
  let total = num1 + num2;
  if (total <= 100) {
    return true;
  } else return false;
};

console.log(lessThanHanded(60, 40));

//3. কোনো বিদ্যালয়ের ৫ম শ্রেণির মোট ৫০ জন শিক্ষার্থীর ৪২% ছাত্রী। বিদ্যালয়টিতে মোট কত জন ছাত্রী


const calculateGirls = (num, percentage) => {
    const girls = (num * percentage) / 100
    return girls
}
console.log(calculateGirls(100,42))