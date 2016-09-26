# grunt-github-release-notes

[![npm version](https://badge.fury.io/js/grunt-github-release-notes.svg)](https://badge.fury.io/js/grunt-github-release-notes)

> Grunt module to publish release notes based on commits between two tags.
This module is using [github-release-notes](https://github.com/alexcanessa/github-release-notes).

## Getting Started
This plugin requires Grunt `~0.4.5` and github-release-notes `^0.5.0`

```shell
npm install grunt-github-release-notes --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-github-release-notes');
```

## The "release" task

Before you can use it, you need to set up a couple of things.

### Github Informations

**gren** by default looks for your local git configuration to get the repo informations. This means you can run the command directly from the git repo folder.

Otherwise, you can run it from wherever and specify a different repo as target, with:

```js
options: {
    username: USERNAME,
    repo: REPO_NAME
}
```

#### Token

To work, **gren** needs a `github token` (that can be easily generated following [this link](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)). _You only need "repo" scope._

Once generated, you can run the gren command with the token as variable:

```js
options: {
    token: YOUR_TOKEN_HERE
}
```

Or you can add it to your `~/.bash_profile` or `~/.zshrc`) as follows:

```shell
export GREN_GITHUB_TOKEN=your_token_here
```

## Options

The options are the same as [github-release-notes](https://github.com/alexcanessa/github-release-notes), in camelCase:

- `tags: 0.1.0|0.2.0,0.1.0` A specific tag or the range of tags to build the release notes from.
- `timeWrap: latest|history` The release notes you want to include in the changelog. Default: `latest` _Only applicable to the `changelog` action_
- `changelogFilename: CHANGELOG.md` The name of the changelog file. Default: `CHANGELOG.md`
- `dataSource: issues|commits` The informations you want to use to build release notes. Default: `issues`
- `draft: true|false` To set the release as a draft. Default: `false`
- `prerelease: true|false` To set the release as a prerelease. Default: `false`
- `prefix: v` Add a prefix to the tag version `e.g. v1.0.1`. Default: `null`
- `includeMessages: merges|commits|all` used to filter the messages added to the release notes. Default: `commits`
- `override: true|false` Override the release notes if existing. Default: `false`

### Example

The module accepts two targets: *release* and *changelog*.

The *release* task will generate the last release, while the *changelog* will add the release notes to the changelog (without committing the file);

```js
gren: {
    release: {
        options: {
            prefix: 'v'
        }
    },
    changelog: {
        options: {
            changelogFilename: 'CHANGELOG.md'
        }
    }
}
```
