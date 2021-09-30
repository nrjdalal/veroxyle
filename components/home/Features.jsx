import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Hit the ground running.',
    description:
      'We frontload the work from first contact, packing months of strategy into your initial appraisal and proposal.',
    extended: `You get short-term quick wins and long-term results that don’t take forever to realize.`,
    icon: InboxIcon,
  },
  {
    name: 'Only the best in your corner.',
    description:
      'We give our employees the tools and space to grow. It’s why we have some of the best people in the biz and a 95% employee retention rate.',
    extended: `Every strategist on your account is at the top of their game for their marketing channel and leveling up every day.`,
    icon: UsersIcon,
  },
  {
    name: 'Overdelivering is our benchmark.',
    description:
      'Exceeding expectations is our gold standard, which is reflected in our 96%+ client retention rate.',
    extended: `We embrace our brands both personally and professionally, and bring that get-it-done energy to work every day, and stay fleet-footed and flexible to do what needs to be done for your ROI.`,
    icon: TrashIcon,
  },
  {
    name: 'Driven by ROI, not egos.',
    description:
      'You’re partnering with consultants and strategists, not a team of “Yes Men”.',
    extended: `If something isn’t making sense, we’ll push back. And the results will make you glad we did.`,
    icon: PencilAltIcon,
  },
]

const Features = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-600 bg-opacity-10">
                    <feature.icon
                      className="h-6 w-6 text-gray-900"
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
