import type { PostKind } from "$lib/index";
import { loadDefaultJapaneseParser } from "budoux";
import type { Format } from "typia/lib/tags";

export type PageSourceHTML = string;

export interface IPostAsPageSource {
	title: PageSourceHTML;
	author: string;
	url: string & Format<"url">;
	date?: string & Format<"date">;
	description?: PageSourceHTML;
	kind?: PostKind;
}

export function jp_segment_parse(source: string): string[] {
	const parser = loadDefaultJapaneseParser();
	return parser.parse(source);
}

export function insert_word_break(sources: string[]): PageSourceHTML {
	return sources.join("<wbr />");
}
