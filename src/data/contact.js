// ============================================================================
// CONTACT PAGE DATA
// ----------------------------------------------------------------------------
// Office locations and contact-specific FAQs for the Contact page.
// ============================================================================

export const offices = [
  {
    city: "New York",
    country: "USA",
    isHQ: true,
    address: "One World Trade Center, 85th Floor, Lower Manhattan, New York 10007, USA",
    phone: "+1 551 366 8853",
    email: "Sales@spannext.com",
    emailHref: "mailto:Sales@spannext.com",
    hours: "Mon – Fri, 9:00 AM – 6:00 PM EST",
    lat: 40.7127,
    lng: -74.0134,
    access: [
      "37 minute drive from JFK International Airport",
      "23 minute drive from LaGuardia Airport",
      "Quick access to WTC Transportation Hub (subway lines A, C, E, R, J, Z and 1-5)",
      "M1 or M6 to Church and Vesey Streets",
      "20-25 minute drive from Grand Central Station",
    ],
    building: [
      "Tallest building in the Western Hemisphere, Manhattan Financial District",
      "104 stories, grand lobby and observation deck",
      "Panoramic view from the reception area",
    ],
  },
  {
    city: "Dubai",
    country: "UAE",
    isHQ: false,
    address: "Levels 41 & 42, Emirates Towers, Sheikh Zayed, Dubai, UAE",
    phone: "+971 58 877 2525",
    email: "Sales@spannext.com",
    emailHref: "mailto:Sales@spannext.com",
    hours: "Sun – Thu, 9:00 AM – 6:00 PM GST",
    lat: 25.2171,
    lng: 55.2822,
  },
];

export const contactFaqs = [
  {
    q: "How quickly will I hear back after submitting the form?",
    a: "Our team typically responds within one business day with next steps or a few clarifying questions about your project.",
  },
  {
    q: "Do you offer a free initial consultation?",
    a: "Yes — the first call is free and focused on understanding your goals, timeline, and budget before we scope anything.",
  },
  {
    q: "What information should I include in my message?",
    a: "A short description of the problem you're solving, your rough timeline, and any technical constraints helps us route your message to the right team.",
  },
  {
    q: "Can we schedule a call instead of using the form?",
    a: "Absolutely — mention your preferred time zone in the message and we'll follow up with scheduling options.",
  },
  {
    q: "Do you work with startups or only enterprise clients?",
    a: "We work with both — our senior-only staffing model applies whether the engagement is a focused MVP or a multi-year enterprise rollout.",
  },
];

export const contactSubjects = [
  "New Project Inquiry",
  "Partnership Opportunity",
  "Careers",
  "Support",
  "General Question",
];
