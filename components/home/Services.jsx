import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'SEO',
    description:
      'Be seen for everything existing and potential customers are searching for. ',
  },
  {
    name: 'PR',
    description:
      'Fully customized media relations strategies that build everlasting brand awareness and credibility. ',
  },
  {
    name: 'Social Media',
    description:
      'Build authentic connections with your audience through social media strategies. ',
  },
  {
    name: 'Content Marketing',
    description:
      'Inform, entertain, and engage at every stage of the customer journey. ',
  },
  {
    name: 'CRO',
    description:
      'Get the most out of your traffic by improving the site to generate more revenue. ',
  },
  {
    name: 'PPC / Paid Media',
    description:
      'Eliminate wasteful ad spending with ads people actually want to see and are targeted appropriately. ',
  },
  {
    name: 'Influencer Marketing',
    description:
      'Leverage the reach and credibility of your audience’s role models to increase brand awareness & drive sales. ',
  },
  {
    name: 'Affiliate Marketing',
    description:
      'Leverage highly motivated and well-known websites to drive revenue for your brand. ',
  },
  {
    name: 'Email Marketing',
    description:
      'Get remarkable results with email campaigns that people actually want to read and buy from. ',
  },
  {
    name: 'Partnerships',
    description:
      'Creative, relationship-driven, strategic brand and celebrity campaigns to reach new audiences and expand marketing resources. ',
  },
  {
    name: 'Amazon',
    description:
      'Expand your eCommerce empire on Amazon to reach an expanded segment of online shoppers. ',
  },
  {
    name: 'Paid Social Advertising',
    description:
      'Reach vast new audiences and increase lifetime value through the power of expansive targeting criteria and highly targeted ads. ',
  },
  {
    name: 'Web Design & Development',
    description:
      'Build an online experience that engages with customers, validates the brand, and drives revenue. ',
  },
  {
    name: 'Digital Creative, Design, & Rapid Ad Creative',
    description:
      'Masterfully designed ad creative and impactful campaigns that drive high engagement to maximize revenue. ',
  },
  {
    name: 'Diligence (PE/VC)',
    description:
      'Confirm which brands present the strongest digital growth opportunities, minimize risk, and scale existing portfolio clients. ',
  },
]

const Services = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default Services
