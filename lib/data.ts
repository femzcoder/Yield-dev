<<<<<<< HEAD
import { SlideCardProps } from "@/lib/types";
=======
import { SlideCardProps } from "./types";
>>>>>>> 5ac0a3352530d53b2dc02ade017b2a985d30b6bd

export const IdeaCardData: SlideCardProps[] = [
  {
    title: "Daily",
    description: "Description for Idea 1",
    imageUrl: "/images/Carouseltrending1.jpg",
    buttonText: "Learn More",
    handleClick: () => {
      console.log("Button clicked for Idea 1");
    }
  },
  {
    title: "Idea 2",
    description: "Description for Idea 2",
    imageUrl: "/images/Carouseltrending.png",
    buttonText: "Learn More",
    handleClick: () => {
      console.log("Button clicked for Idea 2");
    }       
  },
  {
    title: "Idea 3",
    description: "Description for Idea 3",
    imageUrl: "/images/Carouseltrending1.jpg",
    buttonText: "Learn More",
    handleClick: () => {
      console.log("Button clicked for Idea 3");
    }
  }
];


export const TrendingCardData: SlideCardProps[] = [
  {
    title: "Daily Digest",
    description: "See the latest trends and insights",
    imageUrl: "/images/Carouseltrending1.jpg",
    buttonText: "Summary",
    handleClick: () => {
      console.log("Button clicked for Idea 1");
    }
  },
  {
    title: "See What's Trending in the Market",
    description: "",
    imageUrl: "/images/Carouseltrending.png",
    buttonText: "Market",
    handleClick: () => {
      console.log("Button clicked for Idea 2");
    }       
  },
  {
    title: "Idea 3",
    description: "Description for Idea 3",
    imageUrl: "/images/Carouseltrending1.jpg",
    buttonText: "Learn More",
    handleClick: () => {
      console.log("Button clicked for Idea 3");
    }
  }
];