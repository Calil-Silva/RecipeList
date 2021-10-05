import RecipeList from "./RecipeList";
import GlobalStyle from "./globalStyles";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createContext } from "react";
import RecipeEdit from "./RecipeEdit";
import '../css/app.css';

export const RecipeContext = createContext();

export default function App() {
const [selectedRecipeId, setSelectedRecipeId] = useState();
const [recipes, setRecipes] = useState(sampleRecipes);
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

useEffect(() => {
  const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(recipeJSON !== null) {
    setRecipes(JSON.parse(recipeJSON))
  }
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
}, [recipes])

const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

function handleRecipeAdd() {
  const newRecipe = {
    id: uuidv4(),
    name: '',
       servings: 1,
       cookTime: '',
       instructions: '',
       ingridients: [
         {
           id: uuidv4(),
           name: '',
           amount: '1'
         }
       ]
  }
  setSelectedRecipeId(newRecipe.id)
  setRecipes([...recipes, newRecipe])
}

function handleRecipeDelete(id) {
  if(selectedRecipeId != null && selectedRecipeId == id) {
    setSelectedRecipeId(undefined);
  }
  setRecipes(recipes.filter(recipe => recipe.id !== id));
}

function handleRecipeSelected(id) {
  setSelectedRecipeId(id);
}

function handleRecipeChange(id, recipe) {
  const newRecipe = [...recipes];
  const index = newRecipe.findIndex(r => r.id === id);
  newRecipe[index] = recipe;
  setRecipes(newRecipe);
}

  return (
    <>
    <RecipeContext.Provider value={{handleRecipeAdd, handleRecipeDelete, handleRecipeSelected, handleRecipeChange }} >
    <GlobalStyle />
    <RecipeList recipes={recipes} />
    {selectedRecipe && <RecipeEdit selectedRecipe={selectedRecipe}/>}
    </RecipeContext.Provider>
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chiquen',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingridients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n 2. Put pork in oven\n 3. Eat pork',
    ingridients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]
