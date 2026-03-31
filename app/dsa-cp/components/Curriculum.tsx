"use client";

import { useState } from "react";

export default function Curriculum() {
  const rawData = [
  {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Why study DSA?\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Syllabus discussion"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Understanding Leetcode and Codeforces coding platforms\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Google Problem: Nim Game \n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Introduction to Algorithms"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Types of Complexity functions\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Growth of Complexity functions\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Introduction to Time complexity analysis\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Time complexity analysis for loops\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Time complexity analysis summary\n"
   },
   {
    heading: "Motivation to Study DSA + Complexity Functions +\nTime Complexity Analysis (loops)",
    Lessons: "Understanding Time complexity analysis with lots of examples"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 1"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "What are Asymptotic Notations?\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Type of Asymptotic Notations"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Understanding asymptotic notations with lots of examples"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Space Complexity Analysis\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Examples of Space complexity analysis\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Time complexity analysis for Recursive codes\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Examples of Time complexity analysis for Recursive codes\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Iterative Method\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Recursive Tree Method\n"
   },
   {
    heading: "Time Complexity Analysis(Recursive) + Recurrence relation solving +\nAsymptotic notations",
    Lessons: "Master Theorem"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 2"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Introduction to Array\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Types of Arrays\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Vector in C++\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "ArrayList in Java\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "List in Python\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Two pointer approach - with examples\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Prefix sum approach - with examples\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "LinkedIn problem: Product of Array Except Self\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Google problem: Range Addition\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Amazon problem:  Two Sum II – Input Array is Sorted\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Amazon problem: Count pair sum\n"
   },
   {
    heading: "Arrays - foundation + Two Pointer technique + Prefix sum technique",
    Lessons: "Apple problem: Container With Most Water"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 3"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Sliding window technique - with examples\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Kadane's algorithm - with examples\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "OYO problem: Max Sum Subarray of size K\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Google problem Fruits and Baskets\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Morgen Stanley problem: Circular Tour\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Amazon problem: longest sum contiguous subarray\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Flipkart problem: Find triplets with zero sum\n"
   },
   {
    heading: "Arrays - Advance + Sliding Window techniques + Kadane's algorithm",
    Lessons: "Microsoft problem: Trapping Rain Water"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 4"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "Introduction to Matrices"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "2D array: Row major order\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "2D array: Column major order\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "2D vectors in C++\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "2D ArrayList in Java\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "2D List in Python\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "Uber problem: Count negative numbers in a sorted matrix\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "Samsung problem: Transpose of Matrix\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "Google problem: Rotate Image\n"
   },
   {
    heading: "Matrix – 2D Arrays",
    Lessons: "MediaDotNet problem: Queens That Can Attack the King"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 5"
   },
   {
    heading: "Mathematical problems solving - foundation",
    Lessons: "Count number of Digits\n"
   },
   {
    heading: "Mathematical problems solving - foundation",
    Lessons: "Finding Palindrome of a number\n"
   },
   {
    heading: "Mathematical problems solving - foundation",
    Lessons: "GCD or HCF of a number\n"
   },
   {
    heading: "Mathematical problems solving - foundation",
    Lessons: "Euclidean Algorithm for finding GCD\n"
   },
   {
    heading: "Mathematical problems solving - foundation",
    Lessons: "GCD of Array"
   },
   {
    heading: "Mathematical problems solving - foundation",
    Lessons: "Finding Least Common Multiplier (LCM) of given numbers"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 6"
   },
   {
    heading: "Mathematical problems solving - Advanced",
    Lessons: "Check a number Prime or not - Naive to Optimal\n"
   },
   {
    heading: "Mathematical problems solving - Advanced",
    Lessons: "Finding Prime factors\n"
   },
   {
    heading: "Mathematical problems solving - Advanced",
    Lessons: "Adobe problem: Power of Three\n"
   },
   {
    heading: "Mathematical problems solving - Advanced",
    Lessons: "Adobe problem: Add digits\n"
   },
   {
    heading: "Mathematical problems solving - Advanced",
    Lessons: "Google problem: Factorial Trailing Zeroes\n"
   },
   {
    heading: "Mathematical problems solving - Advanced",
    Lessons: "Goldman Sachs: Consecutive number sum"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 7"
   },
   {
    heading: "Bitwise manipulation - Foundation",
    Lessons: "Introduction to Bitwise operators"
   },
   {
    heading: "Bitwise manipulation - Foundation",
    Lessons: "Why to use Bitwise operators?\n"
   },
   {
    heading: "Bitwise manipulation - Foundation",
    Lessons: "Type of Bitwise operators"
   },
   {
    heading: "Bitwise manipulation - Foundation",
    Lessons: "AND, OR, XOR, Left-shift, Right-shift bitwise operators\n"
   },
   {
    heading: "Bitwise manipulation - Foundation",
    Lessons: "Applying Bitwise operators in problems\n"
   },
   {
    heading: "Bitwise manipulation - Foundation",
    Lessons: "Handling negative numbers using bitwise operators"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 8"
   },
   {
    heading: "Bitwise manipulation - Advanced",
    Lessons: "ZOHO problem: Single Number\n2"
   },
   {
    heading: "Bitwise manipulation - Advanced",
    Lessons: "Amazon problem: Hamming Distance\n3"
   },
   {
    heading: "Bitwise manipulation - Advanced",
    Lessons: "Qualcomm problem: Power of Two\n4"
   },
   {
    heading: "Bitwise manipulation - Advanced",
    Lessons: "Apple problem: Power of four\n5"
   },
   {
    heading: "Bitwise manipulation - Advanced",
    Lessons: "Microsoft problem: Sum of two numbers without using arithmetic operators"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 9"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Introduction to Recursion"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Building thought process to solve problem using recursion\n"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Recursion base building using lots of basic codes\n"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Properties of Recursion\n"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Understanding Tail recursion\n"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Understanding Indirect recursion\n"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Understanding Nested recursion\n"
   },
   {
    heading: "Recursion - Foundation",
    Lessons: "Indirect recursion"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 10"
   },
   {
    heading: "Recursion - Advanced",
    Lessons: "Facebook problem: Pow(x,n)\n"
   },
   {
    heading: "Recursion - Advanced",
    Lessons: "Google Problem: Modular Exponentiation for large numbers\n"
   },
   {
    heading: "Recursion - Advanced",
    Lessons: "Microsoft problem: Longest Nice Substring\n"
   },
   {
    heading: "Recursion - Advanced",
    Lessons: "ZOHO problem: Palindrome String using Recursion\n"
   },
   {
    heading: "Recursion - Advanced",
    Lessons: "Amazon problem: Find the winner of the circular game\n"
   },
   {
    heading: "Recursion - Advanced",
    Lessons: "Microsoft problem: Tower of Hanoi"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 11"
   },
   {
    heading: "Backtracking",
    Lessons: "Introduction to Backtracking\n"
   },
   {
    heading: "Backtracking",
    Lessons: "Understanding Backtracking using basic problems\n"
   },
   {
    heading: "Backtracking",
    Lessons: "Amazon problem: M - Coloring problem\n"
   },
   {
    heading: "Backtracking",
    Lessons: "DE-Shaw:  N Queen problem \n"
   },
   {
    heading: "Backtracking",
    Lessons: "Microsoft problem:  RAT in a Maze problem"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 12"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Introduction to Linked List"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Structure of nodes\n"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Type of Linked list (Singly linked list, Doubly linked list, Circular linked list)\n"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Traverse operation in Linked list"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Insert operation in Linked list"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Delete operation in Linked list"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Structure of Doubly and Circular linked list\n"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Microsoft problem: Winner of Linked list Game\n"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "VMWARE problem: Detect Loop in linked list\n"
   },
   {
    heading: "Linked List - Foundation",
    Lessons: "Qualcomm: Delete Middle of Linked List"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 13"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Amazon problem: Reverse a linked list\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Amazon problem: Reverse a linked list using recursion\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "DE-Shaw problem: Reverse a Doubly Linked List\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Goldman Sach: Intersection Point in Y Shaped Linked Lists\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "MorgenStanley: Delete Alternate Nodes\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Microsoft: Delete without head pointer\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Microsoft: Insertion Sort List\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Apple Partition linked list\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "Microsoft: Merge two sorted lists\n"
   },
   {
    heading: "Linked List - Advanced",
    Lessons: "MakeMyTrip:  Given a linked list of 0s, 1s and 2s, sort it"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 14"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Introduction to searching techniques"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Implementation of Linear searching techique"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Implementaion of Binary search technique for Sorted array\n"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Microsoft: Search insert position of K in a sorted array\n"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Goldman Sach: Sqrt(x)\n"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Ternary Search\n"
   },
   {
    heading: "Searching Techniques - foundation",
    Lessons: "Paytm: Searching an element in a sorted array (Ternary Search)"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 15"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Binary search technique for unsorted array\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Binary search on 2D array\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "MediaDotNet: Search in Rotated Sorted Array\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Apple:  Search in Rotated Sorted Array II\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Oracle: Search in a Matrix\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Walmart: Find Peak Element\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Google: Find a Peak Element II\n"
   },
   {
    heading: "Searching Techniques - Advanced",
    Lessons: "Google: KoKo Eating Bananas"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 16"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Introduction to Sorting techniqes"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Type of Sorting techniques"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Time complexity of all Sorting algorithms"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Inbuilt Sort() function\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Bubble Sort\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Selection Sort\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Insertion Sort\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Stable and Inplace sorting\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Paytm: Binary Array Sorting\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Samsung: Permutations in array\n"
   },
   {
    heading: "Sorting Techniques- Foundation",
    Lessons: "Intuit: Stable Sort and Position"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 17"
   },
   {
    heading: "Sorting Techniques- Advanced",
    Lessons: "Merge sort\n"
   },
   {
    heading: "Sorting Techniques- Advanced",
    Lessons: "Quick sort\n"
   },
   {
    heading: "Sorting Techniques- Advanced",
    Lessons: "Yahoo: Three way partitioning\n"
   },
   {
    heading: "Sorting Techniques- Advanced",
    Lessons: "Microsoft: Sort the Half Sorted\n"
   },
   {
    heading: "Sorting Techniques- Advanced",
    Lessons: "LinkedIn: Merge Without Extra Space\n"
   },
   {
    heading: "Sorting Techniques- Advanced",
    Lessons: "Google: Kth smallest element"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 18"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Introduction to Heap\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Types of Heap\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Building Heap\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Insertion and Deletion in Heap\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Priority Queue in C++\/Java\/Python\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Walmart: K largest elements\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Counting Sort\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "Radix sort\n"
   },
   {
    heading: "Heaps + Counting sort + Radix Sort",
    Lessons: "PayTm: Merge and Sort"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 19"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Introduction to Hashing"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Collison resolution techniques\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Linear probing\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Quadratic probing\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Double hashing\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Linear Probing Vs Quadratic probing Vs Double hashing\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Unordered sets\/HashSet in C++\/Java\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Unordered map\/HashMap in C++\/Java\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Adobe: Find the Difference of Two Arrays\n"
   },
   {
    heading: "Hashing - Foundation",
    Lessons: "Intuit: Remove duplicates from an unsorted linked list"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 20"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Boyer-Moore Voting Technique\n"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Index marking technique\n"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Amazon: Twice Counter\n"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Goldman Sach: Check if two arrays are equal or not\n"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Nagarro: Find All Duplicates in an Array\n"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Google: Majority element\n"
   },
   {
    heading: "Hashing - Advanced",
    Lessons: "Walmart: LRU Cache"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 21"
   },
   {
    heading: "Strings - foundation",
    Lessons: "String Introduction \n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Strings in C++\/JAVA\/Python\n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Practice problem: Water Balloons\n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Adobe: Largest Odd Number in String\n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Oracle: Isomorphic Strings\n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "DE-Shaw: Count number of substrings\n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Intel: Maximum Nesting Depth of the Parentheses\n"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Microsoft: Minimum Add to Make Parentheses Valid"
   },
   {
    heading: "Strings - foundation",
    Lessons: "Cisco: Palindrome Check"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 22"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "Naive and Improved Naive Pattern Searching\n"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "Rabin Karp Algorithm\n"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "KMP Algorithm \n"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "Meta: Rotate String\n"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "Google: Find the Index of the First Occurrence in a String\n\n"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "Adobe: Valid Anagram"
   },
   {
    heading: "Strings - Advanced",
    Lessons: "Amazon: Anagram of String"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 23"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Introduction to Stack"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Opeartions on Stack"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Implement stack using array\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Implement stack using LinkedList\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Inbuild stack in C++\/Java\/Python\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Visa: Implement stack using array\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Microsoft: Implement two stacks in an array\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "SAP Lab: Implement Stack using Linked List\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "Intel:  Maximum Nesting Depth of the Parentheses\n"
   },
   {
    heading: "Stack - foundation",
    Lessons: "LinkedIn: Validate Stack Sequences"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 24"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Infix to Postfix conversion using stack\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Postfix evaluation using stack\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Monotonic Stack\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Adobe: Parenthesis Checker\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Goldman Sach: Add Two Numbers II\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Facebook: Delete middle element of a stack\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Microsoft: Next Greater Element\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Amazon: Next Greater Element II\n"
   },
   {
    heading: "Stack - Advanced",
    Lessons: "Microsoft: Stock span problem"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 25"
   },
   {
    heading: "Queue",
    Lessons: "Introduction to Queue"
   },
   {
    heading: "Queue",
    Lessons: "Types of Queue"
   },
   {
    heading: "Queue",
    Lessons: "Implement Queue using simple array\n"
   },
   {
    heading: "Queue",
    Lessons: "Implement Queue using circular array\n"
   },
   {
    heading: "Queue",
    Lessons: "Implement Queue using LinkedList\n"
   },
   {
    heading: "Queue",
    Lessons: "Inbuild Queue in C++\/Java\/Python library"
   },
   {
    heading: "Queue",
    Lessons: "Walmart: Queue using Stack\n"
   },
   {
    heading: "Queue",
    Lessons: "CISCO:  Stack using Queue\n"
   },
   {
    heading: "Queue",
    Lessons: "Amazon: Queue Reversal\n"
   },
   {
    heading: "Queue",
    Lessons: "PayTM: Reverse First K elements of Queue"
   },
   {
    heading: "Queue",
    Lessons: "Deque"
   },
   {
    heading: "Queue",
    Lessons: "DE-Shaw: Sliding Window Maximum"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 26"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Introduction to Tree"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Morris traversal approach\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Recursive Tree traversals - preorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Recursive Tree traversals - Inorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Recursive Tree traversals - postorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Iterative Tree traversals - preorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Iterative Tree traversals - Inorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Iterative Tree traversals - postorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Morris Tree traversals - preorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "MorrisTree traversals - Inorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "MorrisTree traversals - postorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Google: Count number of nodes in a binary tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "OLA: Count number of leaves nodes in a binary tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "LinkedIn: Count Non-Leaf Nodes in Tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "DE-Shaw: Max Depth of Binary Tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "DE-Shaw: Height of Binary Tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part1",
    Lessons: "Amazon: Check for Balanced Tree"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 27"
   },
   {
    heading: "Tree - Binary Tree - Part2",
    Lessons: "Adobe: Same tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part2",
    Lessons: "Microsoft: Symmetric Tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part2",
    Lessons: "DE-Shaw: Check Mirror in N-ary tree\n"
   },
   {
    heading: "Tree - Binary Tree - Part2",
    Lessons: "Construct Unique Binary tree - inorder & preorder\n"
   },
   {
    heading: "Tree - Binary Tree - Part2",
    Lessons: "Construct Unique Binary tree - inorder & postorder"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 28"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Introduction to Binary Search Tree\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Insert a node in a BST\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Search a node in BST\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Deletion in BST\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Inorder Successor in BST\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Introduction to AVL Tree\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Introduction to Red-Black Tree\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Set\/TreeSet in C++\/Java\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Map\/TreeMap in C++\/Java\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Amazon: Check for BST\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Bloomberg: Convert Sorted Array to Binary Search Tree\n"
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Google: Balance a Binary Search Tree "
   },
   {
    heading: "Tree - Binary Search Tree",
    Lessons: "Adobe: Sort the People"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 29"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Introduction to Graph"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Tree vs Graph\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Representation of Graphs in computer \n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Adjacency matrix and Adjacency list\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "BFT (Breadth First traversal)\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "DFS (Depth First Search)\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Applications of BFS\/DFS\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Microsoft: Find Center of Star Graph\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Microsoft: Find the Town Judge\n"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Google: Walls and Gates"
   },
   {
    heading: "Graph - Foundation",
    Lessons: "Meta: 01 Matrix"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 30"
   },
   {
    heading: "Graph - Advanced",
    Lessons: "Flipkart: Detect cycle in an undirected graph\n"
   },
   {
    heading: "Graph - Advanced",
    Lessons: "Google: Find the number of islands\n"
   },
   {
    heading: "Graph - Advanced",
    Lessons: "Microsoft: Bipartite Graph\n"
   },
   {
    heading: "Graph - Advanced",
    Lessons: "DE-Shaw: Topological sort\n"
   },
   {
    heading: "Graph - Advanced",
    Lessons: "Samsung: Number of Provinces"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 31"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "Introduction to Greedy Techniques"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "Greedy VS Dynamic\n"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "Microsoft: Fractional Knapsack problem\n"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "LinkedIn: Can Place Flowers\n"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "Microsoft: Police and Thieves\n"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "Practice problem: Ishaan Loves Chocolates\n"
   },
   {
    heading: "Greedy Techniques - foundation",
    Lessons: "Practice Problem: Message Spreading"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 32"
   },
   {
    heading: "Greedy Techniques - Advanced",
    Lessons: "Directi: Stock buy and sell \n"
   },
   {
    heading: "Greedy Techniques - Advanced",
    Lessons: "Flipkart: Activity Selection Problem\n"
   },
   {
    heading: "Greedy Techniques - Advanced",
    Lessons: "Huffman coding\n"
   },
   {
    heading: "Greedy Techniques - Advanced",
    Lessons: "Apple: Meeting Rooms\n"
   },
   {
    heading: "Greedy Techniques - Advanced",
    Lessons: "Google: Minimum Number of Arrows to Burst Balloons\n"
   },
   {
    heading: "Greedy Techniques - Advanced",
    Lessons: "Practice problem: Check if it is possible to survive on Island"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 33"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Disjoint Sets (Union-Find Algorithm)\n"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Finding Connected Components\n"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Union by Rank\n"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Path compression\n"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Introduction to Minimum Cost Spanning Tree\n"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Meta: Kruskal algorithm\n"
   },
   {
    heading: "Disjoint Sets +  Minimum Cost Spanning tree",
    Lessons: "Directi: Min Cost to Connect All Points"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 34"
   },
   {
    heading: "Single Source Shortest Path",
    Lessons: "CISCO: Prims algorithm\n"
   },
   {
    heading: "Single Source Shortest Path",
    Lessons: "Introduction to Single Source Shortest Path\n"
   },
   {
    heading: "Single Source Shortest Path",
    Lessons: "Microsoft: Dijkastra algorithm\n"
   },
   {
    heading: "Single Source Shortest Path",
    Lessons: "Amazon: Belmanford algorithm\n"
   },
   {
    heading: "Single Source Shortest Path",
    Lessons: "Practice problem: Shortest path from 1 to n\n"
   },
   {
    heading: "Single Source Shortest Path",
    Lessons: "Samsung: Floyd Warshall"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 35"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Introduction to Dynamic programming"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Greedy vs Dynamic programming\n"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Divide & Conquer vs Dynamic programming\n"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Type of Dynamic programming"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Adobe: Fibonacci Series using Dynamic Programming\n"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "How to detect the hint When to apply DP\n"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Tabulation vs Memoization\n"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "1D Array Dynamic Programming\n"
   },
   {
    heading: "Dynamic Programming - Foundation",
    Lessons: "Nvidia: Climbing Stairs"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 36"
   },
   {
    heading: "Dynamic Programming - Advanced",
    Lessons: "0\/1 Knapsack problem\n"
   },
   {
    heading: "Dynamic Programming - Advanced",
    Lessons: "Longest Common Subsequence (LCS)\n"
   },
   {
    heading: "Dynamic Programming - Advanced",
    Lessons: "Matrix Chain Multiplication\n"
   },
   {
    heading: "Dynamic Programming - Advanced",
    Lessons: "Google: House Robber\n"
   },
   {
    heading: "Dynamic Programming - Advanced",
    Lessons: "Google: Count Palindromic Subsequences\n"
   },
   {
    heading: "Dynamic Programming - Advanced",
    Lessons: "Microsoft: Egg dropping Puzzle"
   },
   {
    heading: "Competitive Programming",
    Lessons: "Weekly Leet Code Contest Solving 37"
   }
  ];
  const grouped = Object.values(
    rawData.reduce(
      (acc, item) => {
        if (!acc[item.heading]) {
          acc[item.heading] = {
            title: item.heading,
            lessons: [],
          };
        }
        acc[item.heading].lessons.push(item.Lessons);
        return acc;
      },
      {} as Record<string, { title: string; lessons: string[] }>,
    ),
  );

  const [active, setActive] = useState(grouped[0] || null);
  return (
    <section className="relative overflow-hidden bg-black py-6 md:py-10">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[26px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
            Industry Oriented Curriculum
          </h2>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)] p-4 sm:p-5 md:p-6">
          <div className="grid md:gap-5 gap-3 md:grid-cols-2 items-stretch">
            <div className="h-full md:overflow-hidden overflow-x-scroll">
              <div className="md:h-95 space-y-3 overflow-y-auto pr-2 flex gap-2 md:flex-wrap h-auto"
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
                {grouped.map((module, i) => (
                  <button
                    key={module.title}
                    onClick={() => setActive(module)}
                    className={`relative md:w-full h-fit  overflow-hidden rounded-[22px] border p-4 text-left transition-all duration-200 min-w-fit cursor-pointer
                    ${
                        active?.title === module.title
                        ? "border-[#61E6C6]/35 bg-[linear-gradient(135deg,rgba(97,230,198,0.18)_0%,rgba(18,126,241,0.12)_48%,rgba(239,125,110,0.14)_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                        : "border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.03)_100%)] hover:border-white/15 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.04)_100%)]"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
                    <p className="mb-2 md:text-[12px] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Module {i + 1}
                    </p>
                    <h6 className="text-[13px] font-semibold md:leading-7 leading-5 text-white md:text-[20px]">
                      {module.title}
                    </h6>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-95 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,14,0.96)_0%,rgba(6,6,8,0.98)_100%)] p-4 sm:p-5"
             style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
              <div className="h-full overflow-y-auto pr-2">
                <ul className="grid gap-3">
                  {active?.lessons?.map((lesson, i) => (
                    <li
                      key={`${lesson}-${i}`}
                      className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] px-4 py-3.5 md:text-[15px] text-[13px] leading-5 md:leading-6 text-white sm:px-5"
                    >
                      <div className="absolute inset-y-3 left-0 w-1 rounded-full bg-[linear-gradient(180deg,#61E6C6_0%,#127EF1_55%,#EF7D6E_100%)]" />
                      <span className="block pl-3 capitalize">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
