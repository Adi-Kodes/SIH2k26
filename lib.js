const STORAGE_KEY = 'innova8-user';
const SUBMISSION_KEY = 'innova8-submissions';

export const challengeData = [
  {
    id: 'water',
    title: 'Drinking Water Quality Monitoring',
    category: 'Water Management',
    location: 'Gumla',
    status: 'Open',
    days: '12 Days Left',
    beneficiary: 'Rural Communities',
    district: 'Gumla',
    block: 'Chainpur',
    description: 'Many villages face difficulties in monitoring drinking-water contamination and availability. Develop an affordable and reliable solution that can provide timely information to communities and local authorities.',
    impact: 'Safer daily water access for households and schools.',
    expected: 'A practical monitoring system with actionable alerts.'
  },
  {
    id: 'irrigation',
    title: 'Smart Irrigation for Small Farmers',
    category: 'Agriculture',
    location: 'Dumka',
    status: 'Open',
    days: '18 Days Left',
    beneficiary: 'Farmers',
    district: 'Dumka',
    block: 'Jarmundi',
    description: 'Small farmers need low-cost irrigation planning tools that adapt to local rainfall patterns and soil health.',
    impact: 'Improve crop yield and water efficiency.',
    expected: 'A solution that helps farmers schedule irrigation using local data.'
  },
  {
    id: 'learning',
    title: 'Digital Learning in Remote Areas',
    category: 'Education',
    location: 'Chatra',
    status: 'Under Review',
    days: '9 Days Left',
    beneficiary: 'Students',
    district: 'Chatra',
    block: 'Tandwa',
    description: 'Students in remote areas need offline-first educational tools that can function without strong internet connectivity.',
    impact: 'Better access to quality learning resources.',
    expected: 'An inclusive digital learning model for underserved regions.'
  },
  {
    id: 'forest',
    title: 'Forest Protection & Biodiversity',
    category: 'Environment',
    location: 'Simdega',
    status: 'Open',
    days: '21 Days Left',
    beneficiary: 'Forest Communities',
    district: 'Simdega',
    block: 'Thethaitangar',
    description: 'Local biodiversity and forest safety require affordable monitoring tools and community alert systems.',
    impact: 'Monitor natural resources and reduce illegal activities.',
    expected: 'A field-ready reporting and monitoring solution.'
  }
];

export const solutionData = [
  {
    id: 'water-system',
    title: 'Smart Water Monitoring System',
    category: 'Water Management',
    org: 'XYZ University',
    status: 'Pilot Deployment',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'solar',
    title: 'Solar Powered Irrigation',
    category: 'Agriculture',
    org: 'NIT Jamshedpur',
    status: 'Pilot Deployment',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'telemedicine',
    title: 'Telemedicine Outreach Platform',
    category: 'Healthcare',
    org: 'Ranchi University',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'waste',
    title: 'Smart Waste Management',
    category: 'Sanitation',
    org: 'BIT Mesra',
    status: 'Field Testing',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80'
  }
];

export function uid(prefix = 'item') {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now()}-${random}`;
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore storage errors in restricted environments
  }
}

export function saveUser(user) {
  writeStorage(STORAGE_KEY, user);
}

export function getUser() {
  return readStorage(STORAGE_KEY, null);
}

export function clearUser() {
  writeStorage(STORAGE_KEY, null);
}

export function getChallenges() {
  return [...challengeData];
}

export function getSolutions() {
  return [...solutionData];
}

export function getSubmissions() {
  const fromStorage = readStorage(SUBMISSION_KEY, []);
  return Array.isArray(fromStorage) ? fromStorage : [];
}

export function addSubmission(data) {
  const existing = getSubmissions();
  const updated = [data, ...existing];
  writeStorage(SUBMISSION_KEY, updated);
  return updated;
}
