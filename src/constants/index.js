import restaurant from '../assets/projects/restaurant.png'
import houseStaff from '../assets/projects/houseStaff.png'
import busket from '../assets/projects/busket.png'
import rooms from '../assets/projects/rooms.png'
import todo from '../assets/projects/todo.png'
import sushi from '../assets/projects/sushi.png'

export const HERO_CONTENT =
      `I'm a front-end developer with experience in several projects, such as developing a platform for business conferences, a dental website, and a music application. I use React stack in my projects. My goal is to work with MERN stack and develop as a full stack developer. I have a conversational level of English. I'm ready to learn new technologies and create modern applications.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    location: "Remote",
    role: "Strong Junior Frontend Developer",
    company: "Opora Solutions",
    description: `Development of a platform for business conferences, using Vue JS, creation of an interface and CRUD operations functionality.
                    Development of a dental website using PHP and React. Development of a music application using React Native for downloading and listening to music, with full authorization and registration with JWT token.`,
    technologies: ["React", "React Native", "TypeScript", "Node js", "JWT", "React i18n", "Tailwind"]
  }
];

export const PROJECTS = [
  {
    title: "House Staff",
    image: houseStaff,
    description:
        "A website with household goods, product filtering, and a shopping cart that summarizes the cost of all items.",
    githubLink: 'https://github.com/AndriyBachynskyi/house-staff-react',
    deployLink: 'https://house-staff-react2-ib4sze0jo-andriybachynskyi.vercel.app/'
  },
  {
    title: "Restaurant Website",
    image: restaurant,
    description:
        "Landing page for a restaurant, with menu selection, shopping cart, team and gallery of dishes.",
    githubLink: 'https://github.com/AndriyBachynskyi/restaurant-app',
    deployLink: 'https://restik-eight.vercel.app/'
  },
  {
    title: "Basket of goods",
    image: busket,
    description:
        "Pet project basket of goods, where there is a calculator that summarizes all selected products and the number of selected units.",
    githubLink: 'https://github.com/AndriyBachynskyi/Basket-of-goods',
    deployLink: 'https://korzyna.vercel.app/'
  },
  {
    title: "Rooms App",
    image: rooms,
    description:
        "A pet project with prices for an apartment, where the amount is calculated from the type of apartment, number of rooms, and apartment area.",
    githubLink: 'https://github.com/AndriyBachynskyi/rooms',
    deployLink: 'https://rooms-odqq.vercel.app/'
  },
  {
    title: "Sushi Shop",
    image: sushi,
    description:
        "The sushi delivery page has a menu selection, adding to cart, and the number of units.",
    githubLink: 'https://github.com/AndriyBachynskyi/sushi-shop',
    deployLink: 'https://sushi-shop-phi.vercel.app/'
  },
  {
    title: "Todo List",
    image: todo,
    description:
        "Todo list, with the ability to select a completed task or remove it from the list.",
    githubLink: 'https://github.com/AndriyBachynskyi/todo-list',
    deployLink: 'https://todo-list-rosy-two.vercel.app/'
  },
];

export const CONTACT = {
  phoneNo: "+380 67 790 3538 ",
  email: "andriy.bachynskjj@gmail.com",
};