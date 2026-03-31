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
      "Modulares Textadventure-/RPG-Projekt in Java mit Fokus auf OOP, Zustandsverwaltung und sauberer Architektur. Bereits umgesetzt sind unter anderem getrennte Spielphasen, Dialoglogik, Welt- und Raumstruktur sowie erste Skill- und Kampfsysteme.",
    tags: ["Java", "OOP", "Architektur", "Backend"],
    href: "https://github.com/Sloth-blip/textadventure-varneth",
    linkLabel: "GitHub öffnen",
  },
  {
    id: "varneth-demo",
    title: "Varneth Spiel-Demo",
    description:
      "Browserbasierte Demo des Projekts mit eigener Oberfläche. Sie zeigt, wie die Spielidee nicht nur im Code, sondern auch als interaktive Anwendung mit Frontend und Serveranbindung weitergedacht wird.",
    tags: ["Demo", "Vue", "Frontend", "Web"],
    href: "https://varneth.quest",
    linkLabel: "Demo spielen",
  },
];