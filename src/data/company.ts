/* Centralized TRIVENT content — source of truth is the Executive Company
   Profile PT TRIVENT SOLUSI BISNIS, First Edition 2026. No invented claims. */

export const company = {
  legalName: 'PT TRIVENT SOLUSI BISNIS',
  brandName: 'TRIVENT Business Solutions',
  shortName: 'TRIVENT',
  positioning: 'Human & Business Transformation Company',
  tagline: 'Innovative & Collaborative',
  established: '2026',
  location: 'Bandung Barat – Indonesia',
  website: 'www.trivent.co.id',
  siteUrl: 'https://www.trivent.co.id',
  email: 'info@trivent.co.id',
  whatsappDisplay: '+62 812-1408-1177',
  whatsappNumber: '6281214081177',
  linkedinLabel: 'TRIVENT Business Solutions',
  ahu: 'AHU-A108330.AH.01.30.Tahun 2026',
  kbli: ['70209 – Management Consulting', '85575 – Business & Management Training'],
  philosophy: ['Humanizing People', 'Strengthening Organizations', 'Creating Impact'],
  closingLine: 'Your Transformation Begins with One Conversation.',
  closingSpirit:
    'Let’s build stronger people, stronger organizations, and a better future—together.',
} as const;

export type Solution = {
  index: string;
  title: string;
  tagline: string;
  summary: string;
  items: string[];
};

export const solutions: Solution[] = [
  {
    index: '01',
    title: 'Consulting Services',
    tagline: 'Strategic counsel, practical implementation',
    summary:
      'Helping organizations improve business performance through strategic consulting and practical implementation.',
    items: [
      'Human Resources Management',
      'Organization Development',
      'Business Process Improvement',
      'Performance Management System (KPI)',
      'Job Evaluation & Salary Structure',
      'HR Audit & Compliance',
      'Industrial Relations',
      'HR Digital Transformation',
    ],
  },
  {
    index: '02',
    title: 'Learning & Development',
    tagline: 'Leaders and teams, built in practice',
    summary:
      'Developing leaders and employees through practical and impactful learning experiences.',
    items: [
      'Leadership Development Program',
      'Supervisory Development',
      'Management Development',
      'Soft Skills Training',
      'Team Building Program',
      'Coaching & Mentoring',
      'Public Workshop',
      'In-House Training',
    ],
  },
  {
    index: '03',
    title: 'Assessment & Certification',
    tagline: 'Objective reads before decisions',
    summary:
      'Providing objective assessments to support organizational development.',
    items: [
      'Competency Assessment',
      'Leadership Assessment',
      'Training Needs Analysis (TNA)',
      'Employee Engagement Survey',
      'Organizational Health Check',
      'Assessment Center',
      'Certification Preparation',
      'HR Maturity Assessment',
    ],
  },
  {
    index: '04',
    title: 'Business Transformation',
    tagline: 'Sustainable growth, operational excellence',
    summary:
      'Supporting organizations in achieving sustainable growth and operational excellence.',
    items: [
      'Organizational Transformation',
      'Culture Transformation',
      'Change Management',
      'Talent Management',
      'Succession Planning',
      'Strategic Planning Facilitation',
      'Business Process Mapping',
      'Continuous Improvement Program',
    ],
  },
];

export type WhyTheme = { index: string; title: string; copy: string };

export const whyTrivent: WhyTheme[] = [
  {
    index: '01',
    title: 'Practical Experience',
    copy: 'More than a decade of hands-on experience in Human Resources, Organizational Development, Leadership, and Business Management across various industries.',
  },
  {
    index: '02',
    title: 'Customized Solutions',
    copy: 'Every organization is unique. Solutions are designed around your business challenges, culture, and strategic objectives.',
  },
  {
    index: '03',
    title: 'People-Centered Approach',
    copy: 'Sustainable transformation begins with developing people, strengthening leadership, and building a positive organizational culture.',
  },
  {
    index: '04',
    title: 'Result-Oriented Execution',
    copy: 'Every program is designed with clear objectives, measurable outcomes, and continuous improvement to ensure lasting impact.',
  },
  {
    index: '05',
    title: 'Long-Term Partnership',
    copy: 'A trusted strategic partner supporting organizations beyond implementation, toward sustainable growth.',
  },
];

export const workPrinciples = ['Professionalism', 'Integrity', 'Collaboration', 'Sustainability'];

export type ExperienceArea = {
  index: string;
  title: string;
  focus: string;
  scope: string[];
};

export const experienceAreas: ExperienceArea[] = [
  {
    index: '01',
    title: 'Leadership Development Program',
    focus: 'Developing capable leaders who can inspire teams, improve performance, and build a positive workplace culture.',
    scope: ['Leadership Training', 'Supervisor Development', 'Team Building', 'Communication Skills'],
  },
  {
    index: '02',
    title: 'Human Resources System Development',
    focus: 'Designing integrated Human Resources systems that support organizational growth and operational excellence.',
    scope: ['Organization Structure', 'Job Description', 'KPI Development', 'Salary Structure', 'HR Policies & SOP'],
  },
  {
    index: '03',
    title: 'Business Process Improvement',
    focus: 'Helping organizations simplify business processes and improve operational efficiency.',
    scope: ['Process Mapping', 'Continuous Improvement', 'Organizational Effectiveness', 'Performance Evaluation'],
  },
  {
    index: '04',
    title: 'Organizational Development & Consulting',
    focus: 'Supporting organizations in managing change and building sustainable organizational capability.',
    scope: ['Organizational Diagnosis', 'Culture Transformation', 'Change Management', 'Strategic Facilitation'],
  },
];

export const processSteps = [
  'Listen',
  'Analyze',
  'Design',
  'Implement',
  'Evaluate',
  'Improve',
] as const;

export type Engagement = { organization: string; area: string };

export const engagements: Engagement[] = [
  { organization: 'PT Gucci Ratu Textile', area: 'Leadership Development & Human Resources Development' },
  { organization: 'PT Pan Brothers', area: 'Leadership Development & Human Resources Development' },
  { organization: 'PT Trio Food', area: 'Leadership Development Program' },
  { organization: 'PT Dragon Pack', area: 'Organizational Development & Leadership Training' },
  {
    organization: 'PT Camiloplas Jaya Makmur',
    area: 'Human Resources Transformation, Leadership Development, KPI System & Organizational Development',
  },
  { organization: 'PT Delta Mate', area: 'Leadership Development & Employee Development Program' },
];

export const engagementDisclaimer =
  'The following organizations represent selected organizations where the Founder has contributed through professional engagements throughout his career. These contributions include consulting, leadership development, organizational transformation, corporate training, and strategic Human Resources initiatives across various industries.';

export type Industry = { name: string; copy: string };

export const industries: Industry[] = [
  {
    name: 'Textile & Garment',
    copy: 'Developing human resources, strengthening production leadership, improving employee engagement, and building sustainable workplace culture.',
  },
  {
    name: 'Manufacturing',
    copy: 'Enhancing operational excellence, workforce productivity, leadership capability, and organizational performance.',
  },
  {
    name: 'Corporate & Business',
    copy: 'Supporting business transformation, organizational development, performance management, and strategic Human Resources initiatives.',
  },
  {
    name: 'Education',
    copy: 'Partnering with schools, universities, training centers, and educational institutions to develop leadership, organizational capability, and learning excellence.',
  },
  {
    name: 'Government & Public Sector',
    copy: 'Providing leadership development, organizational improvement, performance enhancement, and human capital development programs.',
  },
  {
    name: 'Healthcare & Services',
    copy: 'Strengthening service excellence, leadership, teamwork, and organizational culture in service-oriented organizations.',
  },
  {
    name: 'Logistics & Supply Chain',
    copy: 'Improving operational leadership, workforce capability, communication, and continuous improvement.',
  },
  {
    name: 'SMEs & Family Business',
    copy: 'Helping growing businesses establish professional management systems, leadership succession, organizational structure, and sustainable business practices.',
  },
];

export type CompanyValue = { letter: string; title: string; en: string; id: string };

export const companyValues: CompanyValue[] = [
  {
    letter: 'T',
    title: 'Trust',
    en: 'Building lasting relationships through integrity, transparency, and professionalism.',
    id: 'Kami percaya bahwa kepercayaan adalah fondasi dari setiap hubungan bisnis yang berkelanjutan.',
  },
  {
    letter: 'R',
    title: 'Respect',
    en: 'Valuing every individual with dignity, empathy, and mutual appreciation.',
    id: 'Kami memandang setiap manusia sebagai aset yang berharga dan layak untuk dihargai.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    en: 'Continuously creating practical solutions that drive organizational growth.',
    id: 'Kami mendorong inovasi yang relevan, aplikatif, dan memberikan nilai nyata bagi organisasi.',
  },
  {
    letter: 'V',
    title: 'Value Creation',
    en: 'Delivering measurable impact and sustainable business value.',
    id: 'Setiap program yang kami jalankan harus menghasilkan perubahan yang dapat diukur.',
  },
  {
    letter: 'E',
    title: 'Excellence',
    en: 'Pursuing the highest standards in quality, service, and professionalism.',
    id: 'Kami berkomitmen memberikan kualitas terbaik dalam setiap layanan.',
  },
  {
    letter: 'N',
    title: 'Nurture',
    en: 'Developing people through continuous learning, coaching, and leadership.',
    id: 'Kami percaya pertumbuhan organisasi dimulai dari pertumbuhan manusianya.',
  },
  {
    letter: 'T',
    title: 'Transformation',
    en: 'Creating meaningful and sustainable transformation for people and organizations.',
    id: 'Transformasi bukan sekadar perubahan, tetapi perjalanan menuju organisasi yang lebih kuat.',
  },
];

export const vision =
  'To become a trusted Human & Business Transformation Company, empowering organizations and individuals to achieve sustainable growth through people development, leadership excellence, and strategic business transformation.';

export const missions = [
  'To provide practical and impactful consulting solutions that strengthen organizational performance and business sustainability.',
  'To develop competent leaders through innovative learning, coaching, and leadership development programs.',
  'To help organizations build a healthy, adaptive, and high-performance workplace culture.',
  'To optimize human capital through strategic Human Resources Management and Organizational Development.',
  'To become a long-term strategic partner by delivering measurable results, continuous improvement, and sustainable transformation.',
];

export const vision2030 =
  'A roadmap to becoming Indonesia’s trusted Human & Business Transformation Company — creating long-term value by empowering people, strengthening organizations, and driving sustainable business transformation. Our ambition is not to become the biggest consulting company, but to become one of the most trusted partners in transforming people and organizations.';

export const founder = {
  fullName: 'Chandra Budiman Zain',
  displayName: 'Chandra B. Zain, S.T., M.M., CHRO',
  role: 'Founder & Principal Consultant',
  experienceBadge: 'More than a decade of professional experience',
  summary:
    'Chandra Budiman Zain is a Human Resources and Business Transformation Practitioner with more than a decade of professional experience in Human Resources Management, General Affairs, Organizational Development, Leadership Development, and Business Management.',
  trackRecord:
    'Throughout his career, he has successfully led various strategic initiatives, including organizational restructuring, HR system development, leadership training, performance management, industrial relations, and business process improvement across multiple industries.',
  foundingNote:
    'Driven by a strong passion for developing people and strengthening organizations, he founded TRIVENT as a platform to help organizations build sustainable growth through leadership excellence, organizational transformation, and human capital development.',
  expertise: [
    'Human Resources Management',
    'Organizational Development',
    'Leadership Development',
    'Business Transformation',
    'Performance Management System (KPI)',
    'Industrial Relations',
    'Learning & Development',
    'HR Strategy',
    'Organizational Culture',
    'Coaching & Mentoring',
  ],
  education: ['Master of Management (M.M.)', 'Bachelor of Engineering (S.T.)'],
  certifications: [
    'Certified Human Resources Officer (CHRO)',
    'Professional HR Practitioner',
    'Leadership Development Facilitator',
  ],
  belief:
    'Leadership is not about managing people. It is about inspiring people to become better than they were yesterday.',
} as const;

export const interestOptions = [
  'Consulting Services',
  'Learning & Development',
  'Assessment & Certification',
  'Business Transformation',
  'General Conversation',
] as const;

export type InquiryPayload = {
  name: string;
  organization: string;
  position: string;
  interest: string;
  message: string;
};

export function buildWhatsappUrl(payload: InquiryPayload): string {
  const lines = [
    'Halo TRIVENT Business Solutions, saya ingin memulai percakapan transformasi.',
    '',
    `Nama: ${payload.name}`,
    `Organisasi: ${payload.organization}`,
    `Jabatan: ${payload.position}`,
    `Area minat: ${payload.interest}`,
    `Pesan: ${payload.message}`,
  ];
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export const routes = [
  { path: '/', label: 'Home' },
  { path: '/solutions', label: 'Solutions' },
  { path: '/experience', label: 'Experience' },
  { path: '/founder', label: 'Founder' },
  { path: '/about', label: 'About' },
] as const;
