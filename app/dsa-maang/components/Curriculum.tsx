"use client";

import { useState } from "react";

export default function Curriculum() {
  const rawData = [
  {
      heading: "Basics",
      Lessons: "Output, escape sequence, printing numbers and text"
  },
  {
      heading: "Basics",
      Lessons: "Variable declaration, initialization, printing, updation, assignment"
  },
  {
      heading: "Basics",
      Lessons: "Arithmetic operators, increment, decrement operators, modulus operators, comments"
  },
  {
      heading: "Basics",
      Lessons: "Types of Operators"
  },
  {
      heading: "Basics",
      Lessons: "ASCII Values and typecasting"
  },
  {
      heading: "Basics",
      Lessons: "Hierarchy of operators"
  },
  {
      heading: "Basics",
      Lessons: "Questions"
  },
  {
      heading: "Conditions",
      Lessons: "If and if else"
  },
  {
      heading: "Conditions",
      Lessons: "Else if vs multiple if"
  },
  {
      heading: "Conditions",
      Lessons: "Multiple conditions"
  },
  {
      heading: "Conditions",
      Lessons: "Questions"
  },
  {
      heading: "Loops",
      Lessons: "For loop"
  },
  {
      heading: "Loops",
      Lessons: "While and do while"
  },
  {
      heading: "Loops",
      Lessons: "Break and continue"
  },
  {
      heading: "Loops",
      Lessons: "Questions"
  },
  {
      heading: "Functions",
      Lessons: "Syntax"
  },
  {
      heading: "Functions",
      Lessons: "Arguments"
  },
  {
      heading: "Functions",
      Lessons: "Int main function"
  },
  {
      heading: "Functions",
      Lessons: "Arguments"
  },
  {
      heading: "Functions",
      Lessons: "Builtin functions"
  },
  {
      heading: "Functions",
      Lessons: "Questions"
  },
  {
      heading: "Pointers",
      Lessons: "Syntax"
  },
  {
      heading: "Pointers",
      Lessons: "Pass by value and Pass by reference"
  },
  {
      heading: "Pointers",
      Lessons: "Pointer arithmetic"
  },
  {
      heading: "Pointers",
      Lessons: "Null pointers"
  },
  {
      heading: "Pointers",
      Lessons: "Double pointers"
  },
  {
      heading: "Pointers",
      Lessons: "Questions"
  },
  {
      heading: "Arrays",
      Lessons: "Introduction, Syntax and accessing elements"
  },
  {
      heading: "Arrays",
      Lessons: "Printing output and taking input"
  },
  {
      heading: "Arrays",
      Lessons: "Types of arrays, size operator, memory allocation"
  },
  {
      heading: "Arrays",
      Lessons: "Questions"
  },
  {
      heading: "Vectors",
      Lessons: "Passing Arrays to functions"
  },
  {
      heading: "Vectors",
      Lessons: "Arrays and pointers"
  },
  {
      heading: "Vectors",
      Lessons: "Vector in C++"
  },
  {
      heading: "Vectors",
      Lessons: "Operations on vector"
  },
  {
      heading: "Vectors",
      Lessons: "Looping in vector"
  },
  {
      heading: "Vectors",
      Lessons: "Arrays and Vectors"
  },
  {
      heading: "Vectors",
      Lessons: "Questions"
  },
  {
      heading: "Multidimensional arrays",
      Lessons: "Intro to 2d arrays"
  },
  {
      heading: "Multidimensional arrays",
      Lessons: "Initialisation and declaration of 2d array"
  },
  {
      heading: "Multidimensional arrays",
      Lessons: "Traversal in 2d array"
  },
  {
      heading: "Multidimensional arrays",
      Lessons: "Questions"
  },
  {
      heading: "Strings",
      Lessons: "Introduction"
  },
  {
      heading: "Strings",
      Lessons: "Built in string functions"
  },
  {
      heading: "Strings",
      Lessons: "To-string"
  },
  {
      heading: "Strings",
      Lessons: "Questions"
  },
  {
      heading: "Time and Space complexity",
      Lessons: "Introduction"
  },
  {
      heading: "Time and Space complexity",
      Lessons: "Notations"
  },
  {
      heading: "Time and Space complexity",
      Lessons: "Questions"
  },
  {
      heading: "Recursion",
      Lessons: "Introduction"
  },
  {
      heading: "Recursion",
      Lessons: "Questions"
  },
  {
      heading: "Linear and binary search",
      Lessons: "Explanation of binary search and linear search"
  },
  {
      heading: "Linear and binary search",
      Lessons: "Questions"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Sorting in c++"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Bubble sort"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Selection sort"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Insertion sort"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Merge sort"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Quick sort"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Cycle sort"
  },
  {
      heading: "Basic sorting algorithms",
      Lessons: "Practice questions"
  },
  {
      heading: "Prefix sum concept",
      Lessons: "Explanantion of topic"
  },
  {
      heading: "Prefix sum concept",
      Lessons: "Questions"
  },
  {
      heading: "Sliding window concept",
      Lessons: "Explanation of concept"
  },
  {
      heading: "Sliding window concept",
      Lessons: "Questions"
  },
  {
      heading: "Bitwise operators and Modulo arithmetic",
      Lessons: "Basic bitwise operators"
  },
  {
      heading: "Bitwise operators and Modulo arithmetic",
      Lessons: "Modulo operator"
  },
  {
      heading: "Bitwise operators and Modulo arithmetic",
      Lessons: "Questions"
  },
  {
      heading: "OOPs concepts",
      Lessons: "Data abstraction and encapsulation"
  },
  {
      heading: "OOPs concepts",
      Lessons: "Class and object"
  },
  {
      heading: "OOPs concepts",
      Lessons: "Getters and setters"
  },
  {
      heading: "OOPs concepts",
      Lessons: "Nested class"
  },
  {
      heading: "OOPs concepts",
      Lessons: "Questions"
  },
  {
      heading: "Stacks",
      Lessons: "Basics"
  },
  {
      heading: "Stacks",
      Lessons: "Questions"
  },
  {
      heading: "Linked Lists",
      Lessons: "Basics"
  },
  {
      heading: "Linked Lists",
      Lessons: "Questions"
  },
  {
      heading: "Queues",
      Lessons: "Basics"
  },
  {
      heading: "Queues",
      Lessons: "Questions"
  },
  {
      heading: "Dequeue and Circular queue",
      Lessons: "Basics"
  },
  {
      heading: "Dequeue and Circular queue",
      Lessons: "Questions"
  },
  {
      heading: "Tree and Binary Tree",
      Lessons: "Basics"
  },
  {
      heading: "Tree and Binary Tree",
      Lessons: "Questions"
  },
  {
      heading: "Binary Search Tree",
      Lessons: "Basics"
  },
  {
      heading: "Binary Search Tree",
      Lessons: "Questions"
  },
  {
      heading: "Heap",
      Lessons: "Basics"
  },
  {
      heading: "Heap",
      Lessons: "Questions"
  },
  {
      heading: "Set",
      Lessons: "Basics"
  },
  {
      heading: "Set",
      Lessons: "Questions"
  },
  {
      heading: "Map",
      Lessons: "Basics"
  },
  {
      heading: "Map",
      Lessons: "Questions"
  },
  {
      heading: "Dynamic Programming",
      Lessons: "Basics"
  },
  {
      heading: "Dynamic Programming",
      Lessons: "Questions"
  },
  {
      heading: "Greedy algorithms",
      Lessons: "Basics"
  },
  {
      heading: "Greedy algorithms",
      Lessons: "Questions"
  },
  {
      heading: "Graphs",
      Lessons: "Basics"
  },
  {
      heading: "Graphs",
      Lessons: "Questions"
  },
  {
      heading: "Tries",
      Lessons: "Basics"
  },
  {
      heading: "Tries",
      Lessons: "Questions"
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
