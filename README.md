# Health-MX
Health MX Web Client Application

## Contents
1. [Project Initialization](#Initialization)

## <a name="Initialization">Project Initialization</a>
1. Add the following line to your hosts `/etc/hosts/` file:

        127.0.0.1 dev.health-mx.com

2. Clone the Project repository with SSH:

        $ git clone git@github.com:berlin-semestre-i/health-mx.git

3. Install dependencies:

        $ yarn

4. Init the application:

        $ yarn dev

5. App should be available at:
    http://dev.health-mx.com:3000

### CI Semantic Release
1. You must set GH_TOKEN env variable
2. `yarn run semantic-release` must be run just in master branch and when there's a merge to this


### Commit Message Guidelines
You can add Commitizen cli to ensure your commits have correct format
1. Install Commitizen Globally `yarn global add commitizen`
2. Run `git cz` after you added that corresponding changes.

We are following [angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular). The main points that need to be considered are:

A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

##### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

##### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are `build`, `ci`, `docs` ,`style`, `refactor`, `chore` and `test` for non-changelog related tasks.

Details regarding these types can be found in the official [Angular Contributing Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)

##### Scope

The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

##### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

##### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

##### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference JIRA Ticket Numbers e.g. **JIRA# NGPCP-123**

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.