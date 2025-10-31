import React from 'react'

const plans = [
  {
    title: 'Basic',
    price: '$19',
    membership: 'Annual Membership',
    notifications: '3,000 notifications',
    updates: '250 Updates per month',
    features: ['Security Features'],
    users: '1 User',
    highlight: false,
  },
  {
    title: 'Professional',
    price: '$49',
    membership: 'Annual Membership',
    notifications: '43,000 notifications',
    updates: '250 Updates per month',
    features: ['Custom Controls', 'Security Features'],
    users: '4 Users',
    highlight: true,
  },
  {
    title: 'Enterprise',
    price: '$189',
    membership: 'Annual Membership',
    notifications: '3,000 notifications',
    updates: null,
    features: ['Custom Controls', 'Security Features'],
    users: 'Unlimited Users',
    highlight: false,
  },
]

const Price = () => {
  return (
    <div className="bg-[#F4F4F4] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 px-10 lg:px-0 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between border rounded-lg p-8 text-center shadow-md transition-transform duration-300 ${
                plan.highlight
                  ? 'bg-white text-green-500 scale-[1.05] shadow-xl border-green-300'
                  : 'bg-white text-gray-900 border-gray-300'
              }`}
            >
              <div>
                <h3
                  className={`mb-4 montserrat-Bold ${
                    plan.highlight ? 'text-[28px] text-green-500' : 'text-[22px] text-blue-500'
                  }`}
                >
                  {plan.title}
                </h3>
                <p className="text-sm md:text-base text-black mb-4 ">{plan.membership}</p>
                <p
                  className={`text-[40px] montserrat-Bold mb-6 ${
                    plan.highlight ? 'text-blue-500' : 'text-black'
                  }`}
                >
                  {plan.price}
                </p>
                <ul className="space-y-2 text-black text-sm md:text-base mb-6">
                  <li>{plan.notifications}</li>
                  {plan.updates && <li>{plan.updates}</li>}
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                  <li>{plan.users}</li>
                </ul>
              </div>
              <button
                className={`mt-4 py-2 px-6 rounded font-semibold text-sm md:text-base ${
                  plan.highlight
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-[#007bff] text-white hover:bg-blue-700'
                }`}
              >
                SIGN UP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Price