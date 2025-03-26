import { insert_word_break, jp_segment_parse } from "$lib/post_source";
import { expect, test } from "vitest";

test("Check inserted word break tag", () => {
	// From Touhou Kikeijuu ~ Wily Beast and Weakest Creature.
	const word =
		"策を練ってきて敵前逃亡とは……！\n" +
		"愚の骨頂だな。神域を冒して乗り込んできておいて逃げられると思うなよ？\n" +
		"肉のお前を滅して、土と水で美しく造り直してやる！\n" +
		"お前は一点の瑕もなき偶像（アイドル）として、未来永劫語り継がれるだろう！";
	const segments = jp_segment_parse(word);
	const insert_wbr = insert_word_break(segments);

	const expect_word =
		"策を<wbr />練ってきて<wbr />敵前逃亡とは……！<wbr />\n" +
		"愚の<wbr />骨頂だな。<wbr />神域を<wbr />冒して<wbr />乗り<wbr />込んできておいて<wbr />逃げられると<wbr />思うな<wbr />よ？<wbr />\n" +
		"肉の<wbr />お前を<wbr />滅して、<wbr />土と<wbr />水で<wbr />美しく<wbr />造り直してやる！<wbr />\n" +
		"お前は<wbr />一点の<wbr />瑕も<wbr />なき偶像<wbr />（アイドル）と<wbr />して、<wbr />未来永劫語り継がれるだろう！";

	expect(insert_wbr).toEqual(expect_word);
});
