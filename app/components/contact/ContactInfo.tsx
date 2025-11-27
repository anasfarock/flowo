interface ContactMethod {
  icon: string;
  title: string;
  items: {
    label: string;
    href: string;
    text: string;
  }[];
}

const contactMethods: ContactMethod[] = [
  {
    icon: "mail",
    title: "Email",
    items: [
      {
        label: "Sales",
        href: "mailto:sales@flowo.com",
        text: "sales@flowo.com",
      },
      {
        label: "Support",
        href: "mailto:support@flowo.com",
        text: "support@flowo.com",
      },
    ],
  },
  {
    icon: "call",
    title: "Phone",
    items: [
      {
        label: "Main",
        href: "tel:+1-202-555-0149",
        text: "+1 (202) 555-0149",
      },
    ],
  },
  {
    icon: "location_on",
    title: "Address",
    items: [
      {
        label: "Headquarters",
        href: "#",
        text: "123 Automation Drive, Tech City, TX 75001",
      },
    ],
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-card-light dark:bg-background-dark/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
      <h3 className="text-text-light dark:text-white text-lg font-bold mb-4">
        Other Ways to Reach Us
      </h3>
      <ul className="space-y-4">
        {contactMethods.map((method, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary mt-1">
              {method.icon}
            </span>
            <div>
              <h4 className="font-semibold text-text-light dark:text-white">
                {method.title}
              </h4>
              {method.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {method.title === "Address" ? (
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.text}
                    </p>
                  ) : (
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}