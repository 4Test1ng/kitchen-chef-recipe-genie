import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <Card className="max-w-4xl mx-auto shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Cookie className="h-8 w-8 text-primary flex-shrink-0" />
            
            <div className="flex-1">
              <h3 className="font-semibold mb-2">We use cookies</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies and similar technologies to improve your experience, 
                analyze site usage, and show personalized content and ads. By clicking "Accept", 
                you consent to our use of cookies.{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Learn more
                </Link>
              </p>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={handleDecline}
                className="flex-1 md:flex-none"
              >
                Decline
              </Button>
              <Button 
                onClick={handleAccept}
                className="flex-1 md:flex-none"
              >
                Accept
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
