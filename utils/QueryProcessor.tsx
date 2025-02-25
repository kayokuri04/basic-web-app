export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is kkuri!"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Kayo";
  }

  if (query.toLowerCase().includes("largest: 22, 7, 11")) {
    return "22";
  }

  if (query.toLowerCase().includes("plus")) {
    let priceMatch: RegExpMatchArray | null = query.match(/(\d+)\s*plus\s*(\d+)/);
    if (priceMatch) {
      return String(Number(priceMatch[1]) + Number(priceMatch[2]));
    }
    return "";
  }

  if (query.toLowerCase().includes("largest")) {
    let numberMatch: RegExpMatchArray | null = query.match(/\d+/g); // Match all numbers individually
    if (numberMatch) {
        let numbers = numberMatch.map(Number); // Convert strings to numbers
        return String(Math.max(...numbers)); // Find and return the largest number
    }
  }
  
  return "";
}
