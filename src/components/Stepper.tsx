import { cn } from '../utils/cn'

interface Step {
  number: number
  label: string
  isActive: boolean
  isCompleted: boolean
}

interface StepperProps {
  steps: Step[]
}

export function Stepper({ steps }: StepperProps) {
  return (
    <div className="flex items-center justify-center mt-8 mb-16">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg',
                step.isActive || step.isCompleted
                  ? 'bg-blue-60 text-white'
                  : 'bg-neutral-100 text-neutral-500'
              )}
            >
              {step.number}
            </div>
            <span
              className={cn(
                'mt-2 text-sm font-open-sans w-40 text-center',
                step.isActive ? 'font-semibold text-neutral-800' : 'text-neutral-800'
              )}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-32 h-0.5 bg-neutral-100 -mt-6" />
          )}
        </div>
      ))}
    </div>
  )
}