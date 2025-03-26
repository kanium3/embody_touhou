import type { Posts } from "$lib";
import {
	type IPostAsPageSource,
	insert_word_break,
	jp_segment_parse,
} from "$lib/post_source";
import typia from "typia";
// Load post list as string
import content_json from "../content.json?raw";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	const parsed = typia.json.assertParse<Posts>(content_json);
	const as_page_sources = parsed.map((v) => {
		const title_spilit_segment = insert_word_break(jp_segment_parse(v.title));
		const description_spilit_segment: string | undefined =
			v.description !== undefined
				? insert_word_break(jp_segment_parse(v.description))
				: undefined;

		return typia.assert<IPostAsPageSource>({
			author: v.author,
			date: v.date,
			description: description_spilit_segment,
			kind: v.kind,
			title: title_spilit_segment,
			url: v.url,
		});
	});

	return {
		sources: as_page_sources,
	};
};
