"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "../data/Data";
import { HiPlus, HiMinus } from "react-icons/hi";

/* Accordion Item */

function AccordionItem({ item, open, toggle }) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-4 py-3 font-medium text-left hover:bg-blue-50 transition-all"
      >
        <span className="pr-4">{item.q}</span>

        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${open
            ? "bg-blue-100 text-blue-600 rotate-180"
            : "bg-gray-100 text-gray-500"
            }`}
        >
          {open ? <HiMinus /> : <HiPlus />}
        </span>
      </button>

      {/* Smooth accordion */}

      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden px-4 pb-4 pt-2 text-gray-600 text-sm border-t border-gray-100">
          {item.a}
        </div>
      </div>

    </div>
  );
}

/* Home FAQ */

export default function FAQ() {
  const [active, setActive] = useState(null);

  const groups = faqs
    .filter((g) =>
      ["General Questions", "Service & Repair Questions"].includes(g.section)
    )
    .map((g) => ({ ...g, items: g.items.slice(0, 2) }));

  return (
    <section className="pt-16 md:pt-24 ">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">AC Service FAQs</h2>

        <p className="text-blue-600 max-w-2xl mx-auto">
          Quick answers to common HVAC questions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {groups.map((group) => (
          <div key={group.section}>
            <h3 className="text-lg font-semibold mb-4">
              {group.section}
            </h3>

            <div className="flex flex-col gap-4">
              {group.items.map((item, i) => {
                const key = `${group.section}-${i}`;

                return (
                  <AccordionItem
                    key={key}
                    item={item}
                    open={active === key}
                    toggle={() =>
                      setActive(active === key ? null : key)
                    }
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/faq"
          className="text-blue-600 font-medium hover:underline"
        >
          View All FAQs →
        </Link>
      </div>

    </section>
  );
}