/// Cli of the utility that you operate content data
/// args: [
// 		title = string(required),
// 		author = string(required),
// 		url = string(required),
// 		description = string,
// 		date = string(if not set, get now time),
// 		kind = "article" | "video" | "presentation" (required)
// 	]

import { parseArgs } from "jsr:@std/cli/parse-args";
import type { IPost, PostKind, Posts } from "../src/lib/index.ts";

async function update_json(post: IPost) {
	// In GH Actions envrionment path
	const json_file = await Deno.readTextFile("./src/content.json");
	const json: Posts = JSON.parse(json_file);
	json.push(post);
	const updated_json_as_string = JSON.stringify(json);
	await Deno.writeTextFile("./src/content.json", `${updated_json_as_string}\n`);
}

function to_post(
	title: string,
	author: string,
	url: string,
	description: string,
	date: string,
	kind: string,
): IPost {
	let post_kind: PostKind;
	switch (kind) {
		case "article":
			post_kind = "Article";
			break;
		case "presentation":
			post_kind = "Presentation";
			break;
		case "video":
			post_kind = "Video";
			break;
		default:
			post_kind = "Article";
			break;
	}
	return {
		title,
		author,
		date,
		url,
		description,
		kind: post_kind,
	};
}
if (import.meta.main) {
	const args = parseArgs(Deno.args, {
		string: ["title", "author", "url", "description", "date", "kind"],
	});

	const post = to_post(
		args.title ?? "",
		args.author ?? "",
		args.url ?? "",
		args.description ?? "",
		args.date ?? new Date().toLocaleDateString(),
		args.kind ?? "",
	);

	await update_json(post);
}
