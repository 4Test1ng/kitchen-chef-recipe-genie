import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>When you use AiChef, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (email, name) when you register</li>
            <li>Recipe preferences and saved favorites</li>
            <li>Usage data and interactions with our AI recipe generator</li>
            <li>Device information and browser type</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our AI recipe generation services</li>
            <li>Personalize your cooking experience</li>
            <li>Send you updates and notifications (with your consent)</li>
            <li>Analyze usage patterns to enhance our platform</li>
            <li>Comply with legal obligations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Cookies and Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our service</li>
            <li>Serve personalized content and advertisements</li>
          </ul>
          <p className="mt-4">You can control cookies through your browser settings. However, disabling cookies may limit some features of our service.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>We may use third-party services including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google AdSense for displaying advertisements</li>
            <li>Analytics services to understand user behavior</li>
            <li>AI service providers for recipe generation</li>
          </ul>
          <p className="mt-4">These services may collect information as described in their respective privacy policies.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Data Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Children's Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Changes to This Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
          <p className="mt-4 text-sm text-muted-foreground">Last Updated: October 26, 2025</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>If you have questions about this Privacy Policy, please contact us through our contact page.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
