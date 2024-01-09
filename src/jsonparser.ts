import { Parser } from "./parser";

type Entry = {
  title: string;
};

export class JSONParser extends Parser {
  protected parsedData: Entry[] = [];

  public super(path: string) {}

  public parse(): void {
    (JSON.parse(this.data) as Entry[]).map((entry) => {
      this.parsedData.push({ title: entry.title });
    });

    console.log(this.parsedData);
  }
}
