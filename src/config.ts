export const birthday = {
  name: "Tasnim",
  date: "31 October",
  letter: [
    "A very special day belongs to a very special person.",
    "Today is a reminder of how amazing, kind, and irreplaceable you are.",
    "This little universe was made just for you.",
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
  greeting: `Dear ${birthday.name},`,
  paragraphs: [
    "Life is filled with countless moments, but some people make those moments a little brighter.",
    "You are one of those people.",
    "On your birthday, I wish you happiness, good health, success, and countless reasons to smile.",
    "May the coming year bring you beautiful memories, exciting opportunities, and dreams worth chasing.",
  ],
  birthdayWish: `Happy Birthday, ${birthday.name}!`,
  signoff: "Keep shining, always.",
};
export const finalWishes = {
  subtitle: "The universe is brighter because you exist.",
  paragraphs: [
    "May your days be filled with happiness, your heart with peace, and your future with wonderful possibilities.",
    "Keep dreaming, keep smiling, and keep being the amazing person you are.",
  ],
  cardWish:
    "May your days be filled with happiness, your heart with peace, and your future with wonderful possibilities.",
};

export const wishes = [
  {
    id: "happiness",
    title: "Happiness",
    message:
      "May you always find happiness in every little thing you do. You deserve all the good things in this world, Tasnim.",
  },
  {
    id: "success",
    title: "Success",
    message:
      "May every small step bring you closer to your biggest dreams. Keep believing in yourself, Tasnim — wonderful things are ahead.",
  },
  {
    id: "health",
    title: "Good Health",
    message:
      "May your days be filled with strength, peaceful nights, and the energy to do everything you love.",
  },
  {
    id: "adventures",
    title: "Beautiful Adventures",
    message:
      "May life lead you to beautiful places, unexpected discoveries, and adventures that make your heart feel alive.",
  },
  {
    id: "memories",
    title: "Wonderful Memories",
    message:
      "May you collect moments worth keeping forever, surrounded by people who are happy to share them with you.",
  },
];
export const flowers = [
  "You make ordinary moments feel special.",
  "May your dreams grow bigger every year.",
  "Never lose that wonderful smile.",
  "Your best adventures are still ahead.",
  "Stay exactly the amazing person you are.",
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
    id: "ordinary-days",
    caption: "The ordinary days that became our favourite memories.",
    description: "A little pause, a familiar smile, a moment worth keeping.",
  },
  {
    id: "shared-laughter",
    caption: "Taking life one good moment at a time.",
    description: "Here is to peaceful pauses and all the possibilities ahead.",
  },
  {
    id: "next-adventure",
    caption: "Good company makes the best memories.",
    description:
      "Some pictures are better simply because we are in them together.",
  },
  {
    id: "little-possibilities",
    caption: "A little sunshine, a world of possibilities.",
    description: "May the next chapter bring even more reasons to smile.",
  },
  {
    id: "friendship-moments",
    caption: "The little moments that friendship makes special.",
    description: "Here is to the familiar faces that brighten ordinary days.",
  },
  {
    id: "better-together",
    caption: "More smiles, more stories, more memories together.",
    description: "A shared frame, and another little moment to keep.",
  },
  {
    id: "keep-shining",
    caption: "Keep dreaming. Keep smiling. Keep being you.",
    description: "The best adventures are still waiting for you, Tasnim.",
  },
];
export const puzzlePhoto = {
  image: "/art/moonlit-portal-floating-kingdom.png",
  position: "50% 50%",
  alt: "A moonlit portal to a floating kingdom",
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
