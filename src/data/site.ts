export interface Project {
  number: string;
  title: string;
  category: string;
  year: string;
  href: string;
}

export interface Post {
  date: string;
  title: string;
  readTime: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
}

export const site = {
  name: '',
  role: 'Software Engineer',
  location: 'Noida, India',
  canonicalUrl: 'https://mohitsolanki.dev',
  description: 'Mohit Solanki is a software engineer in Noida, India, building developer tools, automation',
  hero: {
    eyebrow: 'Software Engineer · Noida, India',
    headline: "Hi, I'm Mohit Solanki. I build",
    headlineEm: 'tools and automation',
    headlineEnd: 'that make life easier.',
    body: 'I enjoy designing scalable systems, solving complex engineering problems, and building tools that automate workflows.'
  },
  about: {
    statement: 'I’m a passionate Full-Stack Developer who enjoys solving complex problems and building impactful, scalable solutions. With experience in Go, Python, Javascript, PHP, and their frameworks, I am also familiar with cloud platforms and DevOps practices. I’m always eager to learn, automate workflows, and build efficient, reliable systems.',
    facts: [
      { label: 'Based in', value: 'Noida, India' },
      { label: 'Currently', value: 'Bidaal Tech.' },
      { label: 'Open to', value: 'Freelance, Collaborations' },
    ],
  },
  projects: [
    { number: '01', title: 'Cloudroof', category: 'one dashboard for all your Linux machines', year: '', href: 'https://github.com/mohitsolanki026/cloudroof' },
    { number: '02', title: 'Options-Trading-Bot', category: 'fully automated options trading ai system', year: '', href: 'https://github.com/mohitsolanki026/Options-Trading-Bot' },
    { number: '03', title: 'fileshare_cli', category: 'file sharing CLI & Web UI written in Go.', year: '', href: '#' },
  ] as Project[],
  posts: [
    { date: '[Date]', title: '[Title of your latest post]', readTime: '[3 min read]', href: '#' },
    { date: '[Date]', title: '[Title of your second post]', readTime: '[4 min read]', href: '#' },
    { date: '[Date]', title: '[Title of your third post]', readTime: '[1 min read]', href: '#' },
  ] as Post[],
  contact: {
    email: 'mohit931936@gmail.com',
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/i-mohit-solanki/' },
    { label: 'GitHub', href: 'https://github.com/mohitsolanki026' },
    { label: 'I̶n̶s̶t̶a̶g̶r̶a̶m (not on this shit)', href: '#' },
    { label: 'X / Twitter', href: 'https://x.com/mohitsolankidev' },
    { label: 'Medium', href: 'https://medium.com/@mohitsolanki7525'}
  ] as Social[],
};
