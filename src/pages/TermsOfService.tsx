import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>By accessing and using AiChef, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Use License</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Permission is granted to use AiChef for personal, non-commercial purposes. You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for commercial purposes</li>
            <li>Attempt to reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>User Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Recipe Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>AiChef generates recipes using AI technology. While we strive for accuracy:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recipes are provided "as is" without warranties</li>
            <li>We are not responsible for cooking results or outcomes</li>
            <li>Users should verify ingredient safety and dietary compatibility</li>
            <li>Always check for food allergies and dietary restrictions</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Prohibited Uses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>You agree not to use AiChef:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>For any unlawful purpose</li>
            <li>To harass, abuse, or harm others</li>
            <li>To impersonate or deceive</li>
            <li>To upload viruses or malicious code</li>
            <li>To spam or send unsolicited communications</li>
            <li>To scrape or collect user data without permission</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The service and its original content, features, and functionality are owned by AiChef and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Disclaimer of Warranties</CardTitle>
        </CardHeader>
        <CardContent>
          <p>AiChef is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p>In no event shall AiChef or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the service.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Advertising</CardTitle>
        </CardHeader>
        <CardContent>
          <p>AiChef may display third-party advertisements. We are not responsible for the content or accuracy of advertisements. Your interactions with advertisers are solely between you and the advertiser.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Modifications to Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We may revise these terms at any time. By continuing to use AiChef after changes are posted, you agree to be bound by the revised terms.</p>
          <p className="mt-4 text-sm text-muted-foreground">Last Updated: October 26, 2025</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Questions about the Terms of Service should be sent to us through our contact page.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;
