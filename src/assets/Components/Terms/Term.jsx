
const Term = () => {
  const terms = [
    { id: 1, title: "Introduction", content: "These terms and conditions outline the rules and regulations for the use of our website." },
    { id: 2, title: "Acceptance of Terms", content: "By accessing this website we assume you accept these terms and conditions in full." },
    { id: 3, title: "License", content: "Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this website." },
    { id: 4, title: "User Obligations", content: "Users agree not to misuse the website or services in any way that harms the company or any other individual or organization." },
    { id: 5, title: "Restricted Activities", content: "Certain activities are restricted on the website, including but not limited to spamming, phishing, and unauthorized access to data." },
    { id: 6, title: "Privacy Policy", content: "Your privacy is important to us. Please review our privacy policy to understand how we handle your personal data." },
    { id: 7, title: "Cookies", content: "We employ the use of cookies. By using our website you consent to the use of cookies in accordance with our privacy policy." },
    { id: 8, title: "Termination", content: "We reserve the right to terminate your access to the website without notice if you violate these terms and conditions." },
    { id: 9, title: "Governing Law", content: "These terms and conditions are governed by the laws of the jurisdiction in which we operate." },
    { id: 10, title: "Changes to Terms", content: "We may revise these terms and conditions from time to time. Continued use of the website constitutes your acceptance of the new terms." },
    { id: 11, title: "Limitation of Liability", content: "We are not liable for any damages that may arise from the use of the website, to the maximum extent permitted by law." },
    { id: 12, title: "Indemnification", content: "You agree to indemnify and hold us harmless from any claims arising from your use of the website." },
    { id: 13, title: "Third-Party Links", content: "The website may contain links to third-party sites. We are not responsible for the content or practices of these sites." },
    { id: 14, title: "Accuracy of Information", content: "While we strive to provide accurate information, we do not warrant the completeness or accuracy of all content on this website." },
    { id: 15, title: "Force Majeure", content: "We are not liable for any failure to perform due to causes beyond our control, including natural disasters, war, or technical issues." },
    { id: 16, title: "Severability", content: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in effect." },
    { id: 17, title: "Entire Agreement", content: "These terms constitute the entire agreement between you and the company concerning the use of the website." },
    { id: 18, title: "User Account Security", content: "Users are responsible for maintaining the confidentiality of their account information and password." },
    { id: 19, title: "No Waiver", content: "Failure to enforce any right or provision of these terms will not constitute a waiver of such rights." },
    { id: 20, title: "Contact Us", content: "If you have any questions about these terms, please contact us through the website's contact form." },
    { id: 21, title: "Prohibited Conduct", content: "Users are prohibited from engaging in illegal or fraudulent activities using our website." },
    { id: 22, title: "Dispute Resolution", content: "Any disputes arising out of or in connection with these terms will be resolved through binding arbitration." },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <div className="space-y-8">
        {terms.map((term) => (
          <div key={term.id} className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{term.id}. {term.title}</h2>
            <p className="text-gray-700">{term.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-sm text-gray-600">
          By using our website, you agree to these terms and conditions. If you have any questions or concerns, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default Term;
