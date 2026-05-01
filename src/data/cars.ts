import mercedesC from "@/assets/mercedes-c.jpg";
import golf7 from "@/assets/golf-7.jpg";
import bmw3 from "@/assets/bmw-3.jpg";
import lamborghiniMansory from "@/assets/lamborghini-mansory.jpg";
import passat from "@/assets/passat.jpg";
import evoque from "@/assets/evoque.jpg";

export type Car = {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  transmission: "Automat" | "Manual";
  fuel: "Benzinë" | "Naftë" | "Hibrid";
  seats: number;
  year: number;
  description: string;
};

export const cars: Car[] = [
  {
    id: "mercedes-c",
    name: "Mercedes-Benz C-Class",
    price: 75,
    image: mercedesC,
    color: "E zezë metalike",
    transmission: "Automat",
    fuel: "Naftë",
    seats: 5,
    year: 2021,
    description:
      "Sedan luksoz me komoditet të jashtëzakonshëm, ideal për udhëtime biznesi dhe dasma.",
  },
  {
    id: "golf-7",
    name: "Volkswagen Golf 7",
    price: 35,
    image: golf7,
    color: "E bardhë",
    transmission: "Manual",
    fuel: "Naftë",
    seats: 5,
    year: 2018,
    description:
      "Kompakte, ekonomike dhe praktike — perfekte për qytet dhe udhëtime të shkurtra.",
  },
  {
    id: "bmw-3",
    name: "BMW Seria 3",
    price: 70,
    image: bmw3,
    color: "Gri e errët",
    transmission: "Automat",
    fuel: "Naftë",
    seats: 5,
    year: 2020,
    description: "Sportive dhe elegante, me performancë të shkëlqyer dhe interier premium.",
  },
  {
    id: "lamborghini-mansory",
    name: "Lamborghini Mansory H3NRI1",
    price: 450,
    image: lamborghiniMansory,
    color: "E zezë mat",
    transmission: "Automat",
    fuel: "Benzinë",
    seats: 2,
    year: 2023,
    description:
      "Edicion ekskluziv Mansory me xhama të zinj dhe targa personale H3NRI1 — performancë ekstreme dhe prezencë e pakrahasueshme në rrugë.",
  },
  {
    id: "passat",
    name: "Volkswagen Passat",
    price: 50,
    image: passat,
    color: "Blu e errët",
    transmission: "Manual",
    fuel: "Naftë",
    seats: 5,
    year: 2019,
    description: "Hapësirë e madhe, komoditet familjar dhe konsum efikas karburanti.",
  },
  {
    id: "evoque",
    name: "Range Rover Evoque",
    price: 95,
    image: evoque,
    color: "E bardhë",
    transmission: "Automat",
    fuel: "Naftë",
    seats: 5,
    year: 2021,
    description: "SUV luksoz me prezencë të fuqishme dhe komoditet të nivelit të lartë.",
  },
];