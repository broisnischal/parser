import path from "path";
import { CSVParser } from "./csvparser";
import { JSONParser } from "./jsonparser";

const csvPath = path.join(__dirname, "../", "crashes.csv");
const jsonPath = path.join(__dirname, "../", "books.json");

type Parser = CSVParser | JSONParser;

class Data {
  static fromCSV(csvpath: string) {
    return new Data(new CSVParser(csvpath));
  }

  static fromJSON(jsonpath: string) {
    return new Data(new JSONParser(jsonpath));
  }

  public constructor(public parser: Parser) {
    this.parser = parser;
  }
}

const data = Data.fromCSV(csvPath);

const val = data.parser.parse();

console.log(val);
