import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Rubelle Ecommerce website',
        description: "This project is a fully functional eCommerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform allows users to browse products, add items to their cart, and complete purchases securely. It features a responsive UI, dynamic product management, and an intuitive admin panel for inventory and order management. Key functionalities include user authentication, payment integration, and order tracking. The application ensures high performance, scalability, and a seamless shopping experience across all devices.",
        tools: ['JS','Express', 'MongoDB', 'Node', 'DigitalOcean', 'Node Mailer', 'google 0auth', 'EC2', 'Nginx','React','Next','Gmail Passkey'],
        role: 'MERN stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Detect AI generated text using ml',
        description: 'This project focuses on detecting AI-generated text using machine learning techniques. Leveraging the scikit-learn (sklearn) library, the project employs a Random Forest Classifier to differentiate between human-written and AI-generated content. The model was trained on a diverse dataset of text samples, with features extracted to capture linguistic patterns and anomalies indicative of AI generation. The system achieves high accuracy in classifying text, offering a robust tool for identifying synthetic content and enhancing content authenticity verification processes.',
        tools: ['Sk-learn', 'Python', "Pandas", "Random Forest Classifier", "Pickle", "Numpy"],
        role: 'Python Development',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Workflow Project',
        description: 'This project is a car management system developed during my tenure at TA Solutions. It is designed to efficiently manage a fleet of cars, streamlining operations and ensuring day-to-day tasks are handled smoothly. The system allows for tracking car availability, scheduling maintenance, managing bookings, and monitoring performance metrics. My role involved managing the system on a daily basis, ensuring seamless functionality, resolving issues, and implementing improvements. The project leverages modern tools and technologies to enhance performance, scalability, and user experience.',
        tools: ['Angular', 'Typescript', 'Adonis', 'JS'],
        code: '',
        role: 'Software Developer',
        demo: '',
        image: realEstate,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },