
import { Check } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
}

const DonationSteps = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Registration",
      description: "Complete a donor registration form with your personal details",
    },
    {
      id: 2,
      title: "Screening",
      description: "Answer questions about your health history and get a mini-physical",
    },
    {
      id: 3,
      title: "Donation",
      description: "The actual blood donation takes only about 8-10 minutes",
    },
    {
      id: 4,
      title: "Refreshments",
      description: "Enjoy snacks and drinks to help replenish fluids",
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Blood Donation Process
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.id} className="relative flex gap-6 items-start">
                  <div className="flex-none">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl relative z-10">
                      {step.id}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    {step.id === steps.length && (
                      <div className="mt-4 flex items-center text-green-600">
                        <Check className="h-5 w-5 mr-2" />
                        <span className="font-medium">You've saved up to 3 lives!</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSteps;
