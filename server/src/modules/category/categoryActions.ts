// Some data to make the trick

interface Categoriestype {
  id: number;
  name: string;
}

const categories: Categoriestype[] = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(categories.map((category) => category.name));
};

const read: RequestHandler = (req, res) => {
  const numberId = Number(req.params.id);
  // const category = categories.find((p) => p.id === numberId);	// recherche dans le tableau categories la première valeur d'id qui est égaleà parsedID (le P est un paramètre de fonction comme map)

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === numberId) {
      return res.json(categories[i].name);
    }≥
  }
  res.sendStatus(404);
};

// Export them to import them somewhere else

export default { browse, read };
