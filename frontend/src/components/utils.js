export const toUpperCaseFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export default function RefactorTitle(inputString) {
  const result = inputString.replace("Recipe", "").replace("recipes", "");

  if (result.includes(":")) {
    const indexOfFirst = result.indexOf(":") + 2;
    return result.slice(indexOfFirst);
  }

  return result;
}