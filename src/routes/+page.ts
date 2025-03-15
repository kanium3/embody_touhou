import type { Posts } from "$lib";
import typia from "typia";
// Load post list as string
import content_json from "../content.json?raw";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	const parsed = typia.json.assertParse<Posts>(content_json);
	return {
		posts: parsed,
	};
};
