import React from 'react'

const questions = [
  {
    title: 'How can I improve my cash flow without taking on debt?',
    description:
      'We help you identify hidden inefficiencies, optimize your receivables, and restructure payment terms to keep your business liquid and agile—without relying on loans.',
  },
  {
    title: 'Is it the right time to invest or expand my business?',
    description:
      'Our advisors analyze market trends, your financial health, and risk tolerance to help you make confident decisions about growth, investment, or consolidation.',
  },
  {
    title: 'What’s the best way to reduce my tax liability legally?',
    description:
      'We guide you through smart deductions, entity structuring, and compliance strategies that minimize your tax burden while keeping your business audit-ready.',
  },
  {
    title: 'How do I set realistic financial goals for my startup?',
    description:
      'We work with you to define achievable milestones, build lean forecasts, and track performance metrics that align with your long-term vision and funding strategy.',
  },
  {
    title: 'Can I restructure my business to improve profitability?',
    description:
      'Yes. We assess your cost centers, pricing models, and operational workflows to recommend restructuring options that boost margins and reduce overhead.',
  },
  {
    title: 'What financial reports should I review monthly?',
    description:
      'We recommend tracking your profit & loss, cash flow statement, and balance sheet regularly—plus custom KPIs tailored to your business model and goals.',
  },
]

const PriceTwo = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {questions.map((q, index) => (
          <div key={index} className="bg-[#F4F4F4] p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{q.title}</h3>
            <p className="text-sm md:text-base text-gray-600">{q.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceTwo