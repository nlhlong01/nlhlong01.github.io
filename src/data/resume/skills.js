const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Amazon CloudWatch',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/GitHub',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'GraphQL',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Webpack',
    competency: 4,
    category: ['Tools', 'Javascript', 'Web Development'],
  },
  {
    title: 'Rest API',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'NPM',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Mocha',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Testing', 'Tools'],
  },
  {
    title: 'Cypress',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Testing'],
  },
  {
    title: 'JSDoc',
    competency: 5,
    category: ['Web Development', 'Documentation'],
  },
  {
    title: 'Markdown',
    competency: 3,
    category: ['Documentation'],
  },
  {
    title: 'BabelJS',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Testing', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
