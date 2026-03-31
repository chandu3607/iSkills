const features = [
  {
    name: "Placement Assistance ",
    premium: true,
    gold: true,
    others: true,
  },
  {
    name: "Community Doubt Support",
    premium: true,
    gold: false,
    others: false,
  },
  {
    name: "Complete Live Classes ",
    premium: true,
    gold: true,
    others: false,
  },
  {
    name: "Assignments",
    premium: true,
    gold: true,
    others: true,
  },
  {
    name: "12 Hours Daily Live Doubt Support ",
    premium: true,
    gold: true,
    others: false,
  },
  {
    name: "Live Projects (portfolio building)",
    premium: true,
    gold: true,
    others: false,
  },
  {
    name: "Job Referrals",
    premium: true,
    gold: true,
    others: false,
  },
  {
    name: " ISO Recognised Certificate ",
    premium: true,
    gold: true,
    others: false,
  },
  {
    name: "Lifetime access ",
    premium: false,
    gold: true,
    others: false,
  },
  {
    name: "Personalised Resume Support ",
    premium: false,
    gold: true,
    others: false,
  },
  {
    name: "Job Guarantee  ",
    premium: false,
    gold: true,
    others: false,
  },
  {
    name: "Personalised Mock Interviews  ",
    premium: false,
    gold: true,
    others: false,
  },
  {
    name: "Complimentary Batch upgrade  ",
    premium: false,
    gold: true,
    others: false,
  },
  {
    name: "Lifetime course access  ",
    premium: false,
    gold: true,
    others: false,
  },
];

const CheckIcon = () => (
  <img
    src="https://www.iquanta.in/blog/wp-content/uploads/2024/09/check-price-66e2c503c5690.webp"
    alt="check"
    width={20}
    height={20}
    className="mx-auto w-5 h-5"
  />
);

const CrossIcon = () => (
  <svg className="w-5 h-5 fill-[#cd3030] mx-auto" viewBox="0 0 352 512">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z" />
  </svg>
);

export default function ComparisonTable() {
  return (
    <section className="bg-black md:py-10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <h2 className="  text-[26px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-transparent">
            Course Comparison
          </h2>
          <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-4">
            Our Data Science program is not only updated on the curriculum but
            also contains every winning formula required to make you a skilled
            Data Science professional. 
          </p>
        </div>
        <div className="bg-[#1d1e21] p-4 sm:p-6 md:p-[37px_30px_30px] rounded-[20px] overflow-x-auto"
         style={{
                    scrollbarWidth: "none",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
          <table className="min-w-175 w-full text-white">
            <thead>
              <tr>
                <th className="text-left text-[14px] sm:text-[16px] md:text-[18px] font-bold px-2 sm:px-3 py-3">
                  Course Features
                </th>

                <th className="text-center text-[13px] sm:text-[14px] md:text-[16px] px-2 sm:px-3 py-3 whitespace-nowrap">
                  iSkills Premium
                </th>

                <th className="text-center text-[13px] sm:text-[14px] md:text-[16px] px-2 sm:px-3 py-3 whitespace-nowrap">
                  iSkills Gold
                </th>

                <th className="text-center text-[13px] sm:text-[14px] md:text-[16px] px-2 sm:px-3 py-3 whitespace-nowrap">
                  Other Coachings
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-t border-[#6a6a6a1e]">
                  <td className="text-left px-2 sm:px-3 py-3 text-[13px] sm:text-[14px] whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="text-center px-2 sm:px-3 py-3 border-l border-[#6a6a6a1e]">
                    {item.premium ? <CheckIcon /> : <CrossIcon />}
                  </td>

                  <td className="text-center px-2 sm:px-3 py-3 border-l border-[#6a6a6a1e]">
                    {item.gold ? <CheckIcon /> : <CrossIcon />}
                  </td>

                  <td className="text-center px-2 sm:px-3 py-3 border-l border-[#6a6a6a1e]">
                    {item.others ? <CheckIcon /> : <CrossIcon />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
