import {
  TrendingUpIcon,
  ChartPieIcon,
  LightningBoltIcon,
  GlobeIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Hit the ground running.',
    description:
      'We frontload the work from first contact, packing months of strategy into your initial appraisal and proposal.',
    extended: `You get short-term quick wins and long-term results that don’t take forever to realize.`,
    icon: TrendingUpIcon,
  },
  {
    name: 'Only the best in your corner.',
    description:
      'We give our employees the tools and space to grow. It’s why we have some of the best people in the biz and a 95% employee retention rate.',
    extended: `Every strategist on your account is at the top of their game for their marketing channel and leveling up every day.`,
    icon: GlobeIcon,
  },
  {
    name: 'Overdelivering is our benchmark.',
    description:
      'Exceeding expectations is our gold standard, which is reflected in our 96%+ client retention rate.',
    extended: `We embrace our brands both personally and professionally, and bring that get-it-done energy to work every day, and stay fleet-footed and flexible to do what needs to be done for your ROI.`,
    icon: ChartPieIcon,
  },
  {
    name: 'Driven by ROI, not egos.',
    description:
      'You’re partnering with consultants and strategists, not a team of “Yes Men”.',
    extended: `If something isn’t making sense, we’ll push back. And the results will make you glad we did.`,
    icon: LightningBoltIcon,
  },
]

const Features = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-md bg-opacity-10">
                    <feature.icon
                      className="w-6 h-6 text-gray-900"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>

                  <p className="mt-2 text-base text-gray-500">
                    {feature.extended}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
