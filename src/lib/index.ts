// place files you want to import through the `$lib` alias in this folder.

import type { Format } from "typia/lib/tags";

export type Posts = IPost[];

export interface IPost {
	title: string;
	author: string;
	url: string & Format<"url">;
	date?: string & Format<"date">;
	description?: string;
	kind?: PostKind;
}

export type PostKind = "Article" | "Presentation" | "Video" | "Other";
