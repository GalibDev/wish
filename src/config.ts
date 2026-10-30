export const birthday = {
  name: "Tasnim",
  date: "31 October",
  letter: [
    "Happy birthday to my little sister, Tasnim.",
    "You make me proud to be your big brother, just by being you.",
    "I made this little universe to bring a smile to your face today.",
  ],
  scenes: [
    "invitation",
    "letter",
    "portal",
    "constellation",
    "garden",
    "memories",
    "challenge",
    "gift",
    "celebration",
  ],
} as const;

export type PersonalMedia = {
  photo?: string;
  photoPosition?: string;
  voice?: string;
  video?: string;
  ambientMusic?: string;
};
// Set local /media/... paths here when personal media is available.
export const personalMedia: PersonalMedia = {
  ambientMusic: "/audio/birthday-theme.mp3",
};
export const giftMessage = {
  greeting: `To my little sister, ${birthday.name},`,
  paragraphs: [
    "Tasnim, having you as my little sister is something I will always be grateful for.",
    "I may tease you sometimes, but I hope you always know how much you mean to me.",
    "I hope this year brings you good health, happy days, and the confidence to try the things you dream about.",
    "Whenever life feels difficult, remember that your big brother is here to listen and cheer you on.",
  ],
  birthdayWish: `Happy Birthday, ${birthday.name}!`,
  signoff: "With lots of love, your big brother.",
};
export const finalWishes = {
  subtitle: "So proud to call you my little sister.",
  paragraphs: [
    "Happy birthday, little sister. May you grow with kindness, follow your dreams, and always know how loved you are.",
    "Whatever this next year brings, you can always count on your big brother.",
  ],
  cardWish:
    "Happy birthday, little sister. May you grow with kindness, follow your dreams, and always know how loved you are.",
};

export const wishes = [
  {
    id: "happiness",
    title: "Happiness",
    message:
      "May you always have reasons to laugh, little sister. Your happiness means so much to your big brother.",
  },
  {
    id: "success",
    title: "Success",
    message:
      "Keep learning and chasing your dreams, Tasnim. I am proud of your effort, even on the days things do not go to plan.",
  },
  {
    id: "health",
    title: "Good Health",
    message:
      "Take care of yourself, little sister. I wish you good health, restful nights, and plenty of energy for the things you love.",
  },
  {
    id: "adventures",
    title: "Beautiful Adventures",
    message:
      "Be curious, try new things, and enjoy growing into your own person. Your big brother will be cheering you on.",
  },
  {
    id: "memories",
    title: "Wonderful Memories",
    message:
      "May we have many more family moments to smile about, and may you find good people wherever life takes you.",
  },
];
export const flowers = [
  "Life is happier with you as my little sister.",
  "Dream big, Tasnim. Your brother believes in you.",
  "Keep that smile, and tell me when you need a little cheering up.",
  "There is so much for you to discover, little sister.",
  "Keep your kind heart as you grow into your own person.",
];
export type Memory = {
  id: string;
  image?: string;
  caption: string;
  date?: string;
  description?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};
// Personal photos can be added when available.
export const memories: Memory[] = [
  {
    id: "tasnim-birthday-portrait",
    image: "/images/tasnim/tasnim-birthday-portrait.webp",
    imageFit: "contain",
    caption: "Happy birthday to my little sister, Tasnim.",
    description: "May your next chapter bring happiness, kindness, and dreams come true. With love, your big brother.",
  },
  {
    id: "tasnim-castle-portrait",
    image: "/images/tasnim/tasnim-castle-portrait.webp",
    imageFit: "contain",
    caption: "Keep shining, little sister.",
    description: "Dream big, Tasnim. Your big brother will always be cheering you on.",
  },
];
export const puzzlePhoto = {
  image: "/images/tasnim/tasnim-birthday-portrait.webp",
  position: "50% 50%",
  alt: "Tasnim wearing a tiara and holding roses in a floral birthday portrait for 31 October",
};
export const quiz = [
  {
    question: "What makes a birthday truly special?",
    answers: [
      "Expensive gifts",
      "People who care about you",
      "A perfect cake",
      "Social media likes",
    ],
    correct: 1,
    feedback: "Exactly. The people who care make every celebration brighter.",
  },
  {
    question: "What should Tasnim collect in this magical universe?",
    answers: ["Stress", "Worries", "Happiness and memories", "Homework"],
    correct: 2,
    feedback: "Happiness and memories — the best treasures to keep.",
  },
  {
    question: "What is waiting at the end of this journey?",
    answers: [
      "An ordinary webpage",
      "A magical surprise",
      "A login screen",
      "An exam",
    ],
    correct: 1,
    feedback: "A little magic is waiting just for you!",
  },
];
