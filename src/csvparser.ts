import { Parser } from "./parser";
import fs from "node:fs";

export class CSVParser extends Parser {
  public super(path: string) {}

  protected parsedData: any[] = [];

  parse() {
    this.data.split("\n").forEach((row) => {
      this.parsedData.push(row);
    });

    const headers = this.parsedData[0].split(",");

    this.parsedData = this.parsedData.slice(1);

    this.parsedData = this.parsedData.map((row, index) => {
      const columns = row.match(/(".*?"|'.*?'|[^",\s]+)(?=\s*,|\s*$)/g) ?? [];

      const record: { [key: string]: string } = {};

      headers.forEach((header: string, i: number) => {
        record[header] = columns[i] ?? "";
      });
      if (index === 0) {
        record["index"] = "0";
      }

      return record;
    });

    return this.parsedData;
  }
}
