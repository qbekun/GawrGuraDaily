import cron from "node-cron";
import "dotenv/config";

const api = `https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1&limit=100&tags=hu_tao_%28genshin_impact%29+1girl&api_key=${process.env.API_KEY}&user_id=${process.env.USER_ID}`;
const seen = [];

cron.schedule("0 8 * * *", async () => {
	const response = await fetch(api);
	const data = await response.json();

	const posts = data.post;
	let post;

	while (true) {
		post = posts[Math.floor(Math.random() * posts.length)];

		if (!seen.includes(post.file_url) && post.rating === "general") {
			seen.push(post.file_url);
			console.log(seen);
			console.log("sent");
			break;
		}
	}

	await fetch(process.env.WEBHOOK, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			embeds: [
				{
					title: "hu tao :3",
					color: 0xff0000,
					image: {
						url: post.file_url,
					},
				},
			],
		}),
	});
});

console.log("task scheduled");
