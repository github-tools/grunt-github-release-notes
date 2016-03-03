# grunt-github-release-notes

[![npm version](https://badge.fury.io/js/grunt-github-release-notes.svg)](https://badge.fury.io/js/grunt-github-release-notes)

> Grunt module to publish release notes based on commits between the last two tags.
This module is using [github-release-notes](https://github.com/alexcanessa/github-release-notes).


## Getting Started
This plugin requires Grunt `~0.4.5`

```shell
npm install grunt-github-release-notes --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-github-release-notes');
```

## The "release" task

### Overview
In your project's Gruntfile, add a section named `gren` to the data object passed into `grunt.initConfig()`.
**`token`, `username` and `repo` are required.**

```js
gren: {
	release: {
		options: {
			token: 'GITHUB_TOKEN',
			username: 'GITHUB_USERNAME',
			repo: 'GITHUB_REPO_NAME'
		}
	}
}
```

To generate a github token, follow [this link](https://help.github.com/articles/creating-an-access-token-for-command-line-use/);

### Optionals
There are optional arguments such as:

- `draft: true` To set the release as a draft. Default: `false`
- `prerelease: true` To set the release as a prerelease. Default: `false`
- `prefix: 'v'` Add a prefix to the tag version `e.g. v1.0.1`.
- `force: true` Doesn't fail the task if the task presents any errors. Default: `false`
- `includeMessages: merges/commits/all` used to filter the messages added to the release notes. Default: `commits`
