const allCssCourse = AllCourse.filter((course) => course.type === 'css');

const allCourses = [ ...CSScourseList, ...JScourseList ]; // should help compile all of the files in one array, using the spread operator

const allCategoriesList = [
	...CSScourseList,
	...JScourseList,
	...ReactcourseList,
	...AngularcourseList,
	...GitcourseList,
	...PycourseList
];

export const CSScourseList = [
	{
		type: 'css',
		title: 'Getting started with CSS',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32vgvkmwApZkL56c8yUav08bPN7sTgJ1Q9AU9Y3TnW0r92pve',
		level: 'beginners',
		instructor_name: 'Tony Alicea'
	},
	{
		type: 'css',
		title: 'How to understand using CSS library',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://kentcdodds.com/static/metaImage-44e71473e88a40550206e8512992334b.jpg',
		level: 'beginners',
		instructor_name: 'Kent C Dodds'
	},
	{
		type: 'css',
		title: 'Learning CSS with Hands-on exercises',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://unsplash.com/photos/mSkQfIST9jE',
		level: 'beginners',
		instructor_name: 'Tyler McGinnis'
	},
	{
		type: 'css',
		title: 'The complete training of CSS including Redux',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://hackr.io/users/mosh-ham/avatar/medium?ver=1568264417',
		level: 'advanced',
		instructor_name: 'Stephen Grider'
	},
	{
		type: 'css',
		title: 'Learn CSS the hard way',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://pbs.twimg.com/profile_images/922439672562937857/m5psqUol_400x400.jpg',
		level: 'intermediate',
		instructor_name: 'Dave Ceddia'
	}
];

export const JScourseList = [
	{
		type: 'js',
		title: 'Understanding the weird parts of JavaScript',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32vgvkmwApZkL56c8yUav08bPN7sTgJ1Q9AU9Y3TnW0r92pve',
		level: 'beginners',
		instructor_name: 'Tony Alicea'
	},
	{
		type: 'js',
		title: 'Getting started with React',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://kentcdodds.com/static/metaImage-44e71473e88a40550206e8512992334b.jpg',
		level: 'beginners',
		instructor_name: 'Kent C Dodds'
	},
	{
		type: 'js',
		title: 'Javascript for beginners',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://unsplash.com/photos/mSkQfIST9jE',
		level: 'beginners',
		instructor_name: 'Tyler McGinnis'
	},
	{
		type: 'js',
		title: 'Learn the fundamentals of JS',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://hackr.io/users/mosh-ham/avatar/medium?ver=1568264417',
		level: 'beginners',
		instructor_name: 'Hamedani Mosh'
	},
	{
		type: 'js',
		title: 'JavaScript Explained',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://pbs.twimg.com/profile_images/922439672562937857/m5psqUol_400x400.jpg',
		level: 'beginners',
		instructor_name: 'Dave Ceddia'
	}
];

export const ReactcourseList = [
	{
		type: 'react',
		title: 'Getting started with React',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32vgvkmwApZkL56c8yUav08bPN7sTgJ1Q9AU9Y3TnW0r92pve',
		level: 'beginners',
		instructor_name: 'Tony Alicea'
	},
	{
		type: 'react',
		title: 'How to understand using React library',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://kentcdodds.com/static/metaImage-44e71473e88a40550206e8512992334b.jpg',
		level: 'beginners',
		instructor_name: 'Kent C Dodds'
	},
	{
		type: 'react',
		title: 'Learning React with Hands-on exercises',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://unsplash.com/photos/mSkQfIST9jE',
		level: 'beginners',
		instructor_name: 'Tyler McGinnis'
	},
	{
		type: 'react',
		title: 'The complete training of React including Redux',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://hackr.io/users/mosh-ham/avatar/medium?ver=1568264417',
		level: 'advanced',
		instructor_name: 'Stephen Grider'
	},
	{
		type: 'react',
		title: 'JavaScript Explained',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://pbs.twimg.com/profile_images/922439672562937857/m5psqUol_400x400.jpg',
		level: 'intermediate',
		instructor_name: 'Dave Ceddia'
	}
];

export const AngularcourseList = [
	{
		type: 'angular',
		title: 'Getting started with Angular framework',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32vgvkmwApZkL56c8yUav08bPN7sTgJ1Q9AU9Y3TnW0r92pve',
		level: 'beginners',
		instructor_name: 'Tony Alicea'
	},
	{
		type: 'angular',
		title: 'Mastering to use Angular',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://kentcdodds.com/static/metaImage-44e71473e88a40550206e8512992334b.jpg',
		level: 'beginners',
		instructor_name: 'Kent C Dodds'
	},
	{
		type: 'angular',
		title: 'Hands-on exercises with Angular',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://unsplash.com/photos/mSkQfIST9jE',
		level: 'beginners',
		instructor_name: 'Tyler McGinnis'
	},
	{
		type: 'angular',
		title: 'Angular: the complete training',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://hackr.io/users/mosh-ham/avatar/medium?ver=1568264417',
		level: 'advanced',
		instructor_name: 'Stephen Grider'
	},
	{
		type: 'angular',
		title: 'Building projects in Angular',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://pbs.twimg.com/profile_images/922439672562937857/m5psqUol_400x400.jpg',
		level: 'intermediate',
		instructor_name: 'Dave Ceddia'
	}
];

export const GitcourseList = [
	{
		type: 'git',
		title: 'Git Pro',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32vgvkmwApZkL56c8yUav08bPN7sTgJ1Q9AU9Y3TnW0r92pve',
		level: 'beginners',
		instructor_name: 'Tony Alicea'
	},
	{
		type: 'git',
		title: 'Git is better than X',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://kentcdodds.com/static/metaImage-44e71473e88a40550206e8512992334b.jpg',
		level: 'beginners',
		instructor_name: 'Kent C Dodds'
	},
	{
		type: 'git',
		title: 'How Git works under the hood',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://unsplash.com/photos/mSkQfIST9jE',
		level: 'beginners',
		instructor_name: 'Tyler McGinnis'
	},
	{
		type: 'git',
		title: 'Git: the complete training',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://hackr.io/users/mosh-ham/avatar/medium?ver=1568264417',
		level: 'advanced',
		instructor_name: 'Stephen Grider'
	},
	{
		type: 'git',
		title: 'The Git magic',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://pbs.twimg.com/profile_images/922439672562937857/m5psqUol_400x400.jpg',
		level: 'intermediate',
		instructor_name: 'Dave Ceddia'
	}
];

export const PycourseList = [
	{
		type: 'python',
		title: 'Getting started with Python',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32vgvkmwApZkL56c8yUav08bPN7sTgJ1Q9AU9Y3TnW0r92pve',
		level: 'beginners',
		instructor_name: 'Tony Alicea'
	},
	{
		type: 'python',
		title: 'How to understand using Python library',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://kentcdodds.com/static/metaImage-44e71473e88a40550206e8512992334b.jpg',
		level: 'beginners',
		instructor_name: 'Kent C Dodds'
	},
	{
		type: 'python',
		title: 'Learning Python with Hands-on exercises',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://unsplash.com/photos/mSkQfIST9jE',
		level: 'beginners',
		instructor_name: 'Tyler McGinnis'
	},
	{
		type: 'python',
		title: 'The complete training of Python including Redux',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://hackr.io/users/mosh-ham/avatar/medium?ver=1568264417',
		level: 'advanced',
		instructor_name: 'Stephen Grider'
	},
	{
		type: 'python',
		title: 'Learn Python the hard way',
		overview:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium incidunt animi quasi',
		photo_link: 'https://pbs.twimg.com/profile_images/922439672562937857/m5psqUol_400x400.jpg',
		level: 'intermediate',
		instructor_name: 'Dave Ceddia'
	}
];

/* const resources = [{
    id: '',
    title: '',
    shortDescr: '',
    rating: 1
},

{

title: '',
shortDescr: '',
rating: 1
}]

const singleResource = {
    title: ''
    description: '',
    link :'',
    authour: ''
    
} */
