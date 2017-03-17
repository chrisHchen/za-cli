# za-cli [![npm package](https://img.shields.io/npm/v/za-cli.svg)](https://www.npmjs.com/package/za-cli)

A simple CLI for scaffolding projects.(currently support gitlab repo)

### Installation

``` bash
$ npm install -g za-cli
```
###  Configuration

#### set host:

``` bash
$ za -h hostname
```
For example: za -h gitlab.com

#### set owner/group:

``` bash
$ za -o owner
```
For example: za -o mygroup

#### set private_token:

``` bash
$ za -t token
```
**Notice** setting token is required for gitlab api invokaction. it is only necessary if you need to list repos under configured owner, which will be metioned below.

#### shorthand:
``` bash
$ za -h hostname -o owner -t token
```

### Usage

``` bash
$ za list
```
List repos under the configured owner

``` bash
$ za init <template-name> <project-name>
```
The above command pulls the template from the owner's repo, prompts for some information, and generates the project at `./my-project/`.

### Custom Templates
``` bash
za init username/repo my-project
```

Where `username/repo` is the gitlab repo shorthand for your fork.

If you would like to download from a private repository use the `--clone` flag and the cli will use `git clone` so your SSH keys are used.

### Writing Template
As this repo itself is generally trimmed from [vue-cli](https://github.com/vuejs/vue-cli), rules for writing templates are exactly the same.
