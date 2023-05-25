export type CategoryType = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";

export const isCategory = (input: string): input is CategoryType => {
  switch (input) {
    case 'electronics':
      return true;
    case 'jewelery':
      return true;
    case "men's clothing":
      return true;
    case "women's clothing":
      return true;
    default:
      return false;
  }
};
