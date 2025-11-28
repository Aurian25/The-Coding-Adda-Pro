"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { Mail } from "lucide-react"

export function FooterLinksSection() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null)

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: `Privacy Policy for The Coding Adda by AurianWay

Last Updated: 2025

1. Introduction
We at The Coding Adda ("we", "us", or "our") operate the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.

2. Information Collection and Use
We collect several different types of information for various purposes to provide and improve our service to you.

3. Types of Data Collected
- Personal Data: We may collect information such as your email address, name, phone number, and usage data.
- Usage Data: We automatically collect information about how you interact with our website.
- Cookies: We use cookies to track user activity and preferences.

4. Use of Data
The Coding Adda uses the collected data for various purposes:
- To provide and maintain our website
- To notify you about changes to our website
- To provide customer support
- To gather analysis or valuable information to improve our website
- To monitor the usage of our website
- To detect, prevent and address technical issues

5. Security of Data
The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure.

6. Contact Us
If you have any questions about this Privacy Policy, please contact us at privacy@codingadda.com`,
    },
    terms: {
      title: "Terms & Conditions",
      content: `Terms & Conditions for The Coding Adda by AurianWay

Last Updated: 2025

1. Agreement to Terms
By accessing and using The Coding Adda website, you accept and agree to be bound by the terms and provision of this agreement.

2. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on The Coding Adda for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modifying or copying the materials
- Using the materials for any commercial purpose or for any public display
- Attempting to decompile or reverse engineer any software on the website
- Removing any copyright or other proprietary notations from the materials
- Transferring the materials to another person or "mirroring" the materials on any other server

3. Disclaimer
The materials on The Coding Adda's website are provided on an 'as is' basis. The Coding Adda makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

4. Limitations
In no event shall The Coding Adda or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Coding Adda's website.

5. Accuracy of Materials
The materials appearing on The Coding Adda's website could include technical, typographical, or photographic errors. The Coding Adda does not warrant that any of the materials on its website are accurate, complete, or current.

6. Modifications
The Coding Adda may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.

7. Governing Law
These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
    },
    cookie: {
      title: "Cookie Policy",
      content: `Cookie Policy for The Coding Adda by AurianWay

Last Updated: 2025

1. What Are Cookies?
Cookies are small text files that are stored on your browser or device when you visit a website. They allow websites to recognize your device and store information about your preferences.

2. How We Use Cookies
The Coding Adda uses cookies for:
- Authentication: To keep you logged in to your account
- Preferences: To remember your settings and preferences
- Analytics: To understand how users interact with our website
- Security: To protect against fraudulent activity

3. Types of Cookies We Use
- Essential Cookies: Required for the website to function properly
- Performance Cookies: Help us understand how visitors use our website
- Functional Cookies: Remember your choices and preferences
- Targeting Cookies: Used to deliver relevant content and advertisements

4. Third-Party Cookies
Some of our partners may set cookies on your device:
- Analytics providers (Google Analytics)
- Video hosting platforms (YouTube)
- Social media platforms

5. Cookie Duration
- Session cookies: Deleted when you close your browser
- Persistent cookies: Stored for a set period or until you delete them

6. Managing Cookies
You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when a cookie is being sent. However, blocking cookies may affect website functionality.

7. Your Consent
By using The Coding Adda website, you consent to our use of cookies as described in this policy.`,
    },
  }

  return (
    <>
      <div className="flex gap-3 flex-wrap justify-end items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenPolicy("privacy")}
          className="text-gray-400 hover:text-blue-400 hover:bg-transparent text-xs h-auto py-1"
        >
          Privacy Policy
        </Button>
        <span className="text-gray-600">|</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenPolicy("terms")}
          className="text-gray-400 hover:text-blue-400 hover:bg-transparent text-xs h-auto py-1"
        >
          Terms & Conditions
        </Button>
        <span className="text-gray-600">|</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenPolicy("cookie")}
          className="text-gray-400 hover:text-blue-400 hover:bg-transparent text-xs h-auto py-1"
        >
          Cookie Policy
        </Button>
        <span className="text-gray-600">|</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-blue-400 hover:bg-transparent text-xs gap-2 h-auto py-1"
          asChild
        >
          <a href="mailto:contact@codingadda.com" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
        </Button>
      </div>

      {/* Policy Modals */}
      {Object.entries(policies).map(([key, policy]) => (
        <Dialog key={key} open={openPolicy === key} onOpenChange={(open) => !open && setOpenPolicy(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-white">{policy.title}</DialogTitle>
            </DialogHeader>
            <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{policy.content}</div>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}
