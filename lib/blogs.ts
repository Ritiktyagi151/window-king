export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  content: {
    intro: string;
    sections: {
      title: string;
      body: string;
    }[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "perfect-window-design-for-every-room",
    title: "How to Pick the Perfect Window Design for Every Room",
    date: "23 Dec 2025",
    excerpt:
      "Choose window styles that improve daylight, airflow, privacy, and the overall look of every room.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511",
    readTime: "4 min read",
    category: "Window Design",
    content: {
      intro:
        "The right window design can change how a room feels throughout the day. A good choice balances ventilation, natural light, privacy, safety, and the architecture of the space.",
      sections: [
        {
          title: "Start With Room Usage",
          body:
            "Bedrooms often need privacy and quiet performance, while living rooms benefit from larger glass areas and wider views. Kitchens and utility zones usually need easy ventilation, so sliding, casement, or ventilator options can be practical.",
        },
        {
          title: "Match Opening Style With Space",
          body:
            "Sliding windows work well where furniture or walkways are close to the opening. Casement windows suit areas where strong airflow is important. Fixed and combination windows are useful when you want light and visibility with a clean modern finish.",
        },
        {
          title: "Think About Long-Term Comfort",
          body:
            "Quality uPVC and aluminium systems can improve insulation, reduce maintenance effort, and keep the finish looking neat. Before finalizing, consider glass choice, frame colour, locking hardware, and site measurements.",
        },
      ],
    },
  },
  {
    slug: "sliding-and-folding-doors-space-saving-solution",
    title: "Sliding and Folding Doors: The Ultimate Space-Saving Solution",
    date: "15 Dec 2025",
    excerpt:
      "Sliding and folding doors help create wider openings without wasting usable floor area.",
    image: "https://images.unsplash.com/photo-1600607687940-4e524cb35d03",
    readTime: "3 min read",
    category: "Door Systems",
    content: {
      intro:
        "Modern homes and commercial spaces often need open movement between rooms, balconies, terraces, and outdoor areas. Sliding and folding doors solve this with smooth operation and compact movement.",
      sections: [
        {
          title: "Why Sliding Doors Work",
          body:
            "Sliding doors move along a track, so they do not need swing clearance. This makes them useful for balconies, living rooms, offices, and spaces where a hinged door would interrupt movement.",
        },
        {
          title: "Where Folding Doors Help",
          body:
            "Slide and folding doors are ideal for wider openings. Multiple panels can stack to one side, creating a more open connection between indoor and outdoor areas.",
        },
        {
          title: "Choose The Right System",
          body:
            "For large premium openings, lift-and-slide systems offer smooth movement and better handling. For everyday access, sliding and casement doors remain dependable choices with clean finishes.",
        },
      ],
    },
  },
  {
    slug: "maximise-natural-light-with-right-windows",
    title: "How to Maximise Natural Light with the Right Windows",
    date: "11 Dec 2025",
    excerpt:
      "Use smart window placement, glass area, and frame choices to make interiors brighter and more open.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    readTime: "4 min read",
    category: "Home Comfort",
    content: {
      intro:
        "Natural light makes interiors feel larger, fresher, and more inviting. The right window system can increase daylight while still supporting comfort, privacy, and daily usability.",
      sections: [
        {
          title: "Use Larger Fixed Panels",
          body:
            "Fixed windows are a strong option where ventilation is not required but daylight and visibility matter. They create a clean look and can be combined with openable panels for practical airflow.",
        },
        {
          title: "Try Combination Windows",
          body:
            "Combination windows mix fixed, sliding, casement, or specialty units in one layout. This gives you flexibility to bring in more light while still keeping sections openable.",
        },
        {
          title: "Balance Light And Heat",
          body:
            "More glass can mean more sunlight, so glass specification, shading, and direction matter. Good product guidance helps create a bright room without making it uncomfortable.",
        },
      ],
    },
  },
  {
    slug: "functional-door-designs-for-modern-homes",
    title: "Functional Door Designs for Modern Homes",
    date: "17 Nov 2025",
    excerpt:
      "A practical guide to choosing doors that look refined and perform well in everyday use.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    readTime: "3 min read",
    category: "Modern Homes",
    content: {
      intro:
        "Door design is not only about looks. The right door should handle movement, security, weather exposure, space availability, and the design language of the home.",
      sections: [
        {
          title: "Casement Doors For Familiar Use",
          body:
            "Casement doors are hinged and easy to operate. They are suitable for main access points, internal openings, and places where a traditional door movement is preferred.",
        },
        {
          title: "Sliding Doors For Wide Views",
          body:
            "Sliding doors are excellent for balconies, gardens, and large room openings. They save space and provide a clean view through wider glass panels.",
        },
        {
          title: "Finishing Makes The Difference",
          body:
            "Frame colour, handle choice, locking hardware, and installation quality all affect the final feel. A well-fitted uPVC or aluminium door should look neat and work smoothly.",
        },
      ],
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
