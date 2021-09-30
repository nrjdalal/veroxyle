import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Services',
    icon: CloudUploadIcon,
    description: `Full-funnel digital marketing services to reach your target audience without the overwhelm. We identify gaps in your current marketing strategy, then consult you on what you need and how we'll make it happen - all before the contract is signed.`,
  },
  {
    name: 'Technology',
    icon: LockClosedIcon,
    description: `Get customized reports for each team member involved, benefit from realtime digital strategy shifts fueled by machine learning, and dominate your space.`,
  },
  {
    name: 'Difference',
    icon: RefreshIcon,
    description: `We’re not just a marketing agency. We’re an extension of your team that integrates seamlessly with the other arms of your business, driving profound impact on your bottom line without creating more work.
  `,
  },
]

const Cards = () => {
  return (
    <>
      <div className="relative bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-bold text-white tracking-tight sm:text-4xl">
            This is Full-Potential Marketing.
          </p>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
