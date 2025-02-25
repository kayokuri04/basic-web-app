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

  if (query.toLowerCase().includes("largest")) {
    let numberMatch: RegExpMatchArray | null = query.match(/\d+/g); // Extract all numbers
    if (numberMatch) {
        let numbers = numberMatch.map(Number); // Convert to numbers
        return String(Math.max(...numbers)); // Return the largest number
    }
}

  if (query.toLowerCase().includes("plus")) {
    let priceMatch: RegExpMatchArray | null = query.match(/(\d+)\s*plus\s*(\d+)/);
    if (priceMatch) {
      return String(Number(priceMatch[1]) + Number(priceMatch[2]));
    }
    return "";
  }

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    let numberMatch: RegExpMatchArray | null = query.match(/\d+/g); // Extract numbers
    if (numberMatch) {
        let numbers = numberMatch.map(Number); // Convert strings to numbers
        let sixthPowers = numbers.filter(n => {
            let root = Math.round(n ** (1 / 6));
            return root ** 6 === n; // Check if n is a perfect sixth power
        });

        return sixthPowers.length > 0 ? sixthPowers.join(", ") : "None";
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    let numberMatch: RegExpMatchArray | null = query.match(/(\d+)\s*multiplied by\s*(\d+)/);
    if (numberMatch) {
        return String(Number(numberMatch[1]) * Number(numberMatch[2]));
    }
  }

  if (query.toLowerCase().includes("minus")) {
    let numberMatch: RegExpMatchArray | null = query.match(/(\d+)\s*minus\s*(\d+)/);
    if (numberMatch) {
        return String(Number(numberMatch[1]) - Number(numberMatch[2]));
    }
}
  
  return "";
}
