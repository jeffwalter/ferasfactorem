const
	Chai = require ("chai"),
	//assert = Chai.assert,
	expect = Chai.expect,
	FS = require ("fs"),
	Path = require ("path");

/**
 * Recursively walk a path looking for JSON files
 * @param {string} dir - The initial directory
 * @return {array}  List of all found JSON files
 */
function walk (dir) {
	let
		entries,
		results = [];

	entries = FS.readdirSync (dir);

	entries.forEach ((file) => {
		let stat;

		file = Path.resolve (dir, file);
		stat = FS.statSync (file);

		if (stat && stat.isDirectory () && ! file.match (/\/(node_modules|\.git)$/i)) {
			results = results.concat (walk (file));

		} else if (stat && stat.isFile () && file.match (/\.json$/i)) {
			results.push (file);
		}
	});

	return (results);
}

describe ("JSON Files", function () {
	walk (Path.resolve (".")).forEach (function (file) {
		it (file + " is valid", function () {
			let
				content = null,
				data = null;

			try {
				content = FS.readFileSync (file, {"encoding": "utf-8"});
				data = JSON.parse (content);
			} catch (err) {
				content = null;
				data = null;
			}

			expect (data).to.be.an ("object");
		});
	});
});
