// src/data/blogData.js

export const blogPosts = [
  {
    id: 1,
    title: 'Another Post with Everything in It',
    author: 'James',
    date: 'Sep 17, 2018',
    categories: ['Parent Category', 'Child Category', 'Grandchild Category'],
    commentsCount: 2, // This will be dynamic with state in BlogDetail
    content: [
      { type: 'paragraph', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est nec diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
      { type: 'paragraph', text: 'Proin vestibulum, turpis eu lacinia rutrum, sapien erat volutpat pulvinar, lorem ligula purus placerat magna, in faucibus ante urna id nisi. Ut sagittis venenatis arcu, sit amet faucibus diam. Cras eu nisl turpis. Vestibulum tristique, quam in aliquam ultrices, nunc dui auctor nisl, eu cursus sapien odio eget massa.'},
      { type: 'heading', level: 2, text: 'Level 1 Heading' },
      { type: 'heading', level: 3, text: 'Level 2 Heading' },
      { type: 'heading', level: 4, text: 'Level 3 Heading' },
      { type: 'heading', level: 5, text: 'Level 4 Heading' },
      { type: 'heading', level: 6, text: 'Level 5 Heading' },
      { type: 'paragraph', text: 'An Unordered List' },
      { type: 'ul', items: [
        'Sed nec lorem eu, iaculis venenatis lorem.',
        'Nullam ut dictum justo. Vivamus luctus arcu id enim.',
        'Praesent volutpat massa vitae enim blandit.',
        'Aenean ex libero, suscipit id felis eu.',
        'Phasellus vel lorem est. Nullam dictum.'
      ]},
      { type: 'paragraph', text: 'Image with no alignment' },
      { type: 'image', src: 'https://via.placeholder.com/600x300', alt: 'Sample Image' },
      { type: 'paragraph', text: 'WordPress Logo - nulla sagittis venenatis arcu, sed laoreet urna. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est nec diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dictum quam eget sapien. Mauris eleifend. Aenean vitae magna ac lacus egestas. Nam consectetur. Suspendisse potenti. Nam ac lectus. Praesent aliquet metus. Quisque sed tortor. Vivamus erat.' },
      { type: 'paragraph', text: 'An Ordered List' },
      { type: 'ol', items: [
        'Phasellus vel lorem est. Nullam dictum.',
        'Nullam ut dictum justo. Vivamus luctus arcu id enim.',
        'Praesent volutpat massa vitae enim blandit.',
        'Aenean ex libero, suscipit id felis eu.',
        'Sed nec lorem eu, iaculis venenatis lorem.'
      ]},
      { type: 'paragraph', text: 'Vestibulum in mauris semper, laoreet interdum ultrices.' }
    ],
  },
  {
    id: 2,
    title: 'A Simple Text Post',
    author: 'James',
    date: 'Sep 18, 2018',
    categories: ['Simple'],
    commentsCount: 0,
    content: [
        { type: 'paragraph', text: 'Just a short post with some very interesting content about the simplicity of blogging.' },
        { type: 'paragraph', text: 'Sometimes, less is more, and a simple text post can convey powerful messages without the need for complex media or formatting.' }
    ],
  },
  {
    id: 3,
    title: 'A Post With an Ordered List',
    author: 'Jane Doe',
    date: 'Oct 01, 2018',
    categories: ['Tutorials', 'Lists'],
    commentsCount: 1,
    content: [
        { type: 'paragraph', text: 'This post demonstrates how to use an ordered list for step-by-step instructions or ranked items.' },
        { type: 'heading', level: 2, text: 'Steps to Success' },
        { type: 'ol', items: [
            'Understand the problem.',
            'Brainstorm potential solutions.',
            'Implement the chosen solution.',
            'Test thoroughly.',
            'Refine and iterate.'
        ]},
        { type: 'paragraph', text: 'Following these steps can lead to great outcomes in any project.' }
    ],
  },
  {
    id: 4,
    title: 'A Post With an Image',
    author: 'John Smith',
    date: 'Nov 05, 2018',
    categories: ['Photography', 'Travel'],
    commentsCount: 0,
    content: [
        { type: 'paragraph', text: 'Here is a beautiful image to illustrate the wonders of nature.' },
        { type: 'image', src: 'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Nature+Scene', alt: 'Scenic Nature View' },
        { type: 'paragraph', text: 'Images can greatly enhance the storytelling and engagement of your blog posts.' }
    ],
  },
  {
    id: 5,
    title: 'Another Post with a Short Paragraph',
    author: 'Emily White',
    date: 'Dec 12, 2018',
    categories: ['Thoughts'],
    commentsCount: 0,
    content: [
      { type: 'paragraph', text: 'This is another concise post, focusing on a single idea.' },
      { type: 'paragraph', text: 'Brevity can sometimes be key to impactful communication.' }
    ],
  },
  {
    id: 6,
    title: 'Quotes Time!',
    author: 'Alice Green',
    date: 'Jan 20, 2019',
    categories: ['Inspiration'],
    commentsCount: 0,
    content: [
      { type: 'paragraph', text: 'A collection of inspiring quotes to brighten your day.' },
      { type: 'paragraph', text: '“The only way to do great work is to love what you do.” - Steve Jobs' },
      { type: 'paragraph', text: '“Believe you can and you’re halfway there.” - Theodore Roosevelt' },
    ],
  },
];

export const initialCommentsData = [
    {
        name: 'admin',
        avatar: 'https://via.placeholder.com/50/4a5568/ffffff?text=AD',
        date: 'September 17, 2018',
        time: '2:38 pm',
        text: 'Powerful! This is an admin comment.'
    },
    {
        name: 'Dan Phillips',
        avatar: 'https://via.placeholder.com/50/007bff/ffffff?text=DP',
        date: 'September 17, 2018',
        time: '2:26 pm',
        text: 'Here is a non admin comment. It has multiple lines, some html, and a bit more text. This comment is meant to show how longer comments would look in the layout.'
    }
];

export const sidebarData = {
    recentPosts: blogPosts.slice(0, 3).map(p => p.title), // Take top 3 for example
    recentComments: [
        'James on Another Post with Everything in It',
        'Admin on A Simple Text Post',
        'Jane on A Post With an Ordered List'
    ], // These should ideally come from actual comments linked to posts
};