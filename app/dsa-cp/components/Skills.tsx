import Image from "next/image";

const skills = [
  { name: "Asymptotic Notations", icon: "https://media.iquanta.in/ui_images/skills/ Asymptotic notations.svg" },
  { name: "Arrays", icon: "https://media.iquanta.in/ui_images/skills/Arrays 1.svg" },
  { name: "Backtracking", icon: "https://media.iquanta.in/ui_images/skills/Backtracking.svg" },
  { name: "Binary Tree", icon: "https://media.iquanta.in/ui_images/skills/Binary Tree.svg" },
  { name: "Counting Sort", icon: "https://media.iquanta.in/ui_images/skills/Counting sort.svg" },
  { name: "Disjoint Sets", icon: "https://media.iquanta.in/ui_images/skills/Disjoint Sets.svg" },
  { name: "Dynamic Programming", icon: "https://media.iquanta.in/ui_images/skills/Dynamic Programming.svg" },
  { name: "Graphs", icon: "https://media.iquanta.in/ui_images/skills/Graph.svg" },
  { name: "Greedy Techniques", icon: "https://media.iquanta.in/ui_images/skills/Greedy Techniques .svg" },
  { name: "Hashing", icon: "https://media.iquanta.in/ui_images/skills/Hashing - Foundation.svg" },
  { name: "Heaps", icon: "https://media.iquanta.in/ui_images/skills/Heaps.svg" },
  { name: "Kadane's Algorithm", icon: "https://media.iquanta.in/ui_images/skills/Kadanes algorithm.svg" },
  { name: "Linked List", icon: "https://media.iquanta.in/ui_images/skills/Linked List.svg" },
  { name: "Minimum Spanning Tree", icon: "https://media.iquanta.in/ui_images/skills/Minimum Cost Spanning tree.svg" },
  { name: "Prefix Sum", icon: "https://media.iquanta.in/ui_images/skills/Prefix sum technique.svg" },
  { name: "Radix Sort", icon: "https://media.iquanta.in/ui_images/skills/Radix Sort.svg" },
  { name: "Recurrence", icon: "https://media.iquanta.in/ui_images/skills/Recurrance.svg" },
  { name: "Recursion", icon: "https://media.iquanta.in/ui_images/skills/Recursion.svg" },
  { name: "Searching Techniques", icon: "https://media.iquanta.in/ui_images/skills/Searching Techniques.svg" },
  { name: "Stack", icon: "https://media.iquanta.in/ui_images/skills/Stack.svg" },
  { name: "Strings", icon: "https://media.iquanta.in/ui_images/skills/Strings.svg" },
  { name: "Two Pointer Technique", icon: "https://media.iquanta.in/ui_images/skills/Two Pointer technique.svg" },
  { name: "Sliding Window", icon: "https://media.iquanta.in/ui_images/skills/Sliding Window.svg" },
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
