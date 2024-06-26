import { BaseRecipePage } from "../components/BaseRecipePage";

export function Bejgli() {
  const infos: { [key: string]: string } = {
    prep: "3",
    cooking: "1",
    tools: "yes",
    serves: "EVERYONE (4 rolls)",
  };
  const ingredients: { [key: string]: string[] } = {
    Dough: [
      "1 kg grated flour",
      "40 dkg butter or margarin",
      "2 egg yolk",
      "2,5 dl milk",
      "10 dkg powdered sugar",
      "2 dkg yeast",
      "1 coffee spoon of salt",
    ],
    Walnut_filling_for_2_rolls: [
      "3 dl milk",
      "2-3 vanilla package",
      "0.5 kg finely and crudely minced walnut (or just go finely mixed all the way)",
      "2 pieces of lemon skin",
      "1 piece of orange skin",
      "1-2 tablespoon of cinnamon",
      "20-30 dkg sugar",
    ],
    Coconut_white_chocolate_filling_for_2_rolls: [
      "3 dl milk",
      "2 vanilla package",
      "20 dkg grated coconut",
      "2 dkg butter or margarin",
      "1 pinch of salt",
      "1 tablespoon of flour",
      "100 g white chocolate",
      "1 piece of lemon skin",
      "1 piece of orange skin",
    ],
  };
  const steps: string[] = [
    "Put the yeast and yolk into a room temperature milk and stir it a bit",
    "Put the powdered sugar and flour into a bowl and mix those a bit",
    "Include the butter to and do another mixing",
    "Pour the stirred milk mix into the the bowl and mix this until the dough comes off your hands (This will take some time and arm strength)",
    "Create 4 equally sized dumplings and put these into the fridge while all of them are wrapped in foils (Rest these doughs until you're finished with the fillings)",
    "Warm up both fillings's milk in a slow cook. If you're finished then isolate half the milk for the walnut filling",
    "COCONUT TIMEEEEE! While having the leftover milk in the cooking pot, put the vanillin, coconut, butter (maybe the chocolate too if you want?) then stir them",
    "Include the salt and the flour into the filling and stir it until they get creamy, but not runny. Add a tiny bit flour if it feels too runny? Do some sample tasting if it needs any tweaks for ya. If you're finished, cover the pot with a lid and let it coool (Skip to walnut filling to save time)",
    "After it has cooled down, grate 1 lemon and 1 orange skin into it.",
    "WALNUT TIMEEEEE! Grab a bowl and put the walnut, cinnamon, vanillin, orange and lemon skin and stir them a bit. It's not necessarily a requirement, but you could have a finely and crudely minced walnut.",
    "Pour the warm milk into them and stir it. Don't let it be too dry or too runny. Do some sample tasting if it needs any tweaks for ya.",
    "ASSEMBLING TIMEEEEE! Take out 1 dumpling dough, knead them out into a rectangle / square shape if you can (I was only able to make ellipses). The dough's width should be around 5-7 mm. (Using a roller with warm water in the cylinder can help greatly. The dough was really sticky for me ngl)",
    "Spread half of the walnut or coconut filling on the dough as evenly as you can with leaving 1 cm space on all sides. ONLY FOR THE COCONUT: Smash the chocolate into tiny pieces and sprinkle them on the fillings evenly. Do this for all the 3 remaining dumplings",
    "Press down the left and right edge of the dough with your fingers, then fold those ONCE and press them down a bit again. This one helps to create a better aesthetic look after the baking will finished",
    "Roll up the from down-to-top gently and lubricate the rolls with 1 egg yolk and put them into the freezer for 15 mins",
    "Lubricate it with egg whites, wait a bit and just put them into the oven for 200 Celsius in upper-under baking mode to 35 minutes (or just watch until it looks tastyyy :3). If you have a modern oven, you probably need to lower the heat to 160 C, I have accidentally ruined this masterpiece",
    "Don't eat yet hungry fella, just let it rest overnight with a cloth over it.",
    "TASTE THE WONDER! ^^",
  ];
  const sources: { [key: string]: string }[] = [
    {
      url: "https://youtu.be/rTyQWQYn318?si=qoFNhAWbbub-E9Sk",
      title: "Bejgli Beigli Diós Mákos @Szoky konyhája",
      retrieved: "2024.01.27",
    },
    {
      url: "https://colore.hu/egeszseg/recept/kokuszos-feher-csokis-bejgli-ami-nem-reped-videoval/",
      title: "Kókuszos-fehércsokis bejgli, ami nem reped! (Videóval!).",
      retrieved: "2024.01.27",
    },
  ];

  return (
    <BaseRecipePage
      title="Walnut & Coconut White Chocolate Rolls (Bejgli)"
      infos={infos}
      ingredients={ingredients}
      steps={steps}
      sources={sources}
    />
  );
}
