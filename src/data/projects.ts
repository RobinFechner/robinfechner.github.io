export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    id: "varneth-code",
    title: "Varneth Code",
    description:
      "Textadventure QuellCode",
    tags: ["Java", "OOP", "Backend"],
    href: "https://github.com/Sloth-blip/textadventure-varneth",
    linkLabel: "GitHub öffnen",
  },
  {
    id: "varneth-demo",
    title: "Varneth Spiel-Demo",
    description:
      "Eine spielbare Demo des Textadventures.",
    tags: ["Demo", "Vue", "Frontend"],
    href: "https://varneth.quest",
    linkLabel: "Demo spielen",
  },
];