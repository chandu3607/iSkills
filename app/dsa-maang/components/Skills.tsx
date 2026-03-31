import Image from "next/image";

const skills = [
  { name: "Conditional Logic", icon: "https://media.iquanta.in/ui_images/skills/Conditional Logic.svg" },
  { name: "Arrays", icon: "https://media.iquanta.in/ui_images/skills/arrays.svg" },
  { name: "Basic Operators", icon: "https://media.iquanta.in/ui_images/skills/Basic operators.svg" },
  { name: "Functions", icon: "https://media.iquanta.in/ui_images/skills/functions.svg" },
  { name: "Looping Construct", icon: "https://media.iquanta.in/ui_images/skills/looping construct .svg" },
  { name: "Pointers", icon: "https://media.iquanta.in/ui_images/skills/pointers.svg" },
  { name: "Vectors", icon: "https://media.iquanta.in/ui_images/skills/vectors.svg" },
  { name: "Multi Dimensional Array", icon: "https://media.iquanta.in/ui_images/skills/multi dimensional array.svg" },
  { name: "Strings", icon: "https://media.iquanta.in/ui_images/skills/strings.svg" },
  { name: "Time & Space Complexity", icon: "https://media.iquanta.in/ui_images/skills/Time and Space Complexity .svg" },
  { name: "Recursion", icon: "https://media.iquanta.in/ui_images/skills/Recursion .svg" },
  { name: "Prefix Sum", icon: "https://media.iquanta.in/ui_images/skills/Prefix Sum.svg" },
  { name: "Linear & Binary Search", icon: "https://media.iquanta.in/ui_images/skills/Linear and Binary Search .svg" },
  { name: "Sliding Window", icon: "https://media.iquanta.in/ui_images/skills/Sliding Window.svg" },
  { name: "Sorting Algorithms", icon: "https://media.iquanta.in/ui_images/skills/Sorting Algorithms .svg" },
  { name: "OOPs Concepts", icon: "https://media.iquanta.in/ui_images/skills/OOPs Concepts.svg" },
  { name: "Stacks", icon: "https://media.iquanta.in/ui_images/skills/Stacks.svg" },
  { name: "Linked Lists", icon: "https://media.iquanta.in/ui_images/skills/Linked Lists .svg" },
  { name: "Queues", icon: "https://media.iquanta.in/ui_images/skills/Queues.svg" },
  { name: "Tree & Binary Tree", icon: "https://media.iquanta.in/ui_images/skills/Tree and Binary Tree.svg" },
  { name: "Binary Search Tree", icon: "https://media.iquanta.in/ui_images/skills/Binary Search Tree.svg" },
  { name: "Dynamic Programming", icon: "https://media.iquanta.in/ui_images/skills/Dynamic Programming.svg" },
  { name: "Heap", icon: "https://media.iquanta.in/ui_images/skills/Heap .svg" },
  { name: "Map", icon: "https://media.iquanta.in/ui_images/skills/Map.svg" },
  { name: "Graphs", icon: "https://media.iquanta.in/ui_images/skills/Graphs.svg" },
  { name: "Greedy Algorithms", icon: "https://media.iquanta.in/ui_images/skills/Greedy Algorithms.svg" },
];

function SkillTrack({ reverse = false }: { reverse?: boolean }) {
  const trackClass = reverse ? "marquee-reverse" : "marquee";

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${trackClass}`}>
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="relative flex md:min-w-55 min-w-40 items-center gap-4 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)] px-4 py-3"
          >
            {/* <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(97,230,198,0.14)_0%,rgba(18,126,241,0.08)_45%,rgba(239,125,110,0.14)_100%)]" /> */}
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
            <div className="relative z-10 flex md:h-12 h-10 md:w-12 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
              <img
                src={skill.icon}
                alt={skill.name}
                width={28}
                height={28}
                className="md:h-7 h-5 md:w-7 w-5 object-contain"
              />
            </div>
            <h3 className="relative z-10 text-[14px] font-semibold text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-black py-6 md:py-10">
      {/* <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[#127EF1]/14 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#EF7D6E]/14 blur-3xl" /> */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[30px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
            Skills to Master
          </h2>
          <p className="mt-2 text-[14px] text-gray-400 md:text-[16px]">
            Ace these industry skills to become job ready
          </p>
        </div>
        <div className="space-y-4">
          <SkillTrack />
          <SkillTrack reverse />
        </div>
      </div>
    </section>
  );
}
