// TODO - seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  {
    name: "Science",
    description: "Science and technology",
  },
  {
    name: "Technology",
    description: "Technology and engineering",
  },
  {
    name: "History",
    description: "History and culture",
  },
  {
    name: "Arts",
    description: "Arts and entertainment",
  },
  {
    name: "Music",
    description: "Music and entertainment",
  },
  {
    name: "Sports",
    description: "Sports and entertainment",
  },
  {
    name: "Travel",
    description: "Travel and tourism",
  },
];

const main = async () => {
  try {
    await db.insert(categories).values(categoryNames);

    console.log("Successfully seeded categories");
  } catch (error) {
    console.error("Error seeding categories: ", error);
  }
};

main();
