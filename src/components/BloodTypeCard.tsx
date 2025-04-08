
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BloodTypeCardProps {
  type: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  percentage: number;
}

const BloodTypeCard = ({ type, canDonateTo, canReceiveFrom, percentage }: BloodTypeCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-gray-100 hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-0">
        <div className="bg-accent p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-xl">{type}</h3>
          </div>
          <div className="text-sm font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {percentage}% of population
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-500">Can donate to:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {canDonateTo.map((blood) => (
                <span 
                  key={blood} 
                  className="inline-block bg-accent-foreground/10 text-accent-foreground px-2 py-1 rounded text-sm font-medium"
                >
                  {blood}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Can receive from:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {canReceiveFrom.map((blood) => (
                <span 
                  key={blood} 
                  className="inline-block bg-accent-foreground/10 text-accent-foreground px-2 py-1 rounded text-sm font-medium"
                >
                  {blood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodTypeCard;
