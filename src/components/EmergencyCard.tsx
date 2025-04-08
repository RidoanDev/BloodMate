
import { Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmergencyCardProps {
  title: string;
  phone: string;
  description: string;
}

const EmergencyCard = ({ title, phone, description }: EmergencyCardProps) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
        </div>
        <Button className="w-full mt-6" variant="default" size="lg" asChild>
          <a href={`tel:${phone}`} className="flex items-center justify-center space-x-2">
            <Phone className="h-4 w-4 mr-2" />
            <span>{phone}</span>
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmergencyCard;
