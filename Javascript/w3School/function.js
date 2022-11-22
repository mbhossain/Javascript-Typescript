// (function() { //Self-Invoking Functions
//     console.log("Hi...I can invoke me!!");
// })();

// function myFunction(arg1, arg2) { //myFunction is a function constructor
//     this.firstName = arg1;
//     this.lastName = arg2;
// }

// var x = new myFunction("John", "Doe")
// console.log(x.firstName);

// var add = (function() { //JavaScript Closures, Counting with a local variable.
//     var counter = 0;
//     return function() { counter += 1; return counter; }
// })();

// function myFunction() {
//     console.log(add());
// }


// var nums = [2, 5, 5, 11];
// var target = 10;



// LeetCode:01
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// function twoSum(nums, target) {
//     for (var i = 0; i <= nums.length; i++) {
//         for (var j = i + 1; j <= nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum(nums, target));



// LeetCode:02
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
var l1 = [9, 9, 9, 9, 9, 9, 9];
var l2 = [9, 9, 9, 9];
var addTwoNumbers = function(l1, l2) {
    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = null;
    // Carry
    let carry = 0;
    // Loop for the two lists
    while (l1 !== null || l2 !== null) {
        // At the start of each iteration, we should add carry from the last iteration
        let sum = carry;
        // Since the lengths of the lists may be unequal, we are checking if the
        // current node is null for one of the lists
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        // At this point, we will add the total sum % 10 to the new node
        // in the resultant list
        let node = new ListNode(Math.floor(sum) % 10);
        // Carry to be added in the next iteration
        carry = Math.floor(sum / 10);
        // If this is the first node or head
        if (temp == null) {
            temp = head = node;
        }
        // For any other node
        else {
            temp.next = node;
            temp = temp.next;
        }
    }
    // After the last iteration, we will check if there is carry left
    // If it's left then we will create a new node and add it
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }
    return head;
};
console.log(addTwoNumbers(l1, l2));
// addTwoNumbers(l1, l2);