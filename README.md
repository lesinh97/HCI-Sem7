# Read it before your ugly question are about to breath out!
[![Gem](https://img.shields.io/gem/v/react-rails.svg?style=flat-square)](http://rubygems.org/gems/react-rails)[![npm](https://img.shields.io/npm/v/react_ujs.svg?style=flat-square)](https://www.npmjs.com/package/react_ujs)[![Build Status](https://img.shields.io/travis/reactjs/react-rails/master.svg?style=flat-square)](https://travis-ci.org/reactjs/react-rails)[![Code Climate](https://img.shields.io/codeclimate/github/reactjs/react-rails.svg?style=flat-square)](https://codeclimate.com/github/reactjs/react-rails)
## Rails version:
Only use the latest version, arcording to my version, it is 5.2.1
Ruby version: 2.5.0p
## How to pre-intergrate ReactJS in Rails
* Add `webpacker` and `react-rails` to your gemfile and run the installers, remember to `bundle` it first.
* Install `Yarn`, I assume all of you are running Ubuntu 16.04 LTS.
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
* Next, configure the ReactJS:
```
rails webpacker:install
rails webpacker:install:react
rails generate react:install
```
This gives you:

- `app/javascript/components/` directory for your React components
- [`ReactRailsUJS`](#ujs) setup in `app/javascript/packs/application.js`
- `app/javascript/packs/server_rendering.js` for [server-side rendering](#server-side-rendering)

Link the JavaScript pack in Rails view using `javascript_pack_tag` [helper](https://github.com/rails/webpacker#usage), for example:

```
<!-- application.html.erb -->
<%= javascript_pack_tag 'application' %>
```

Generate your first component:

```
$ rails g react:component HelloWorld greeting:string
```

Your component is added to `app/javascript/components/` by default.

You can also generate your component in a subdirectory:

```
$ rails g react:component my_subdirectory/HelloWorld greeting:string
```

[Render it in a Rails view](#view-helper):

```erb
<%= react_component("HelloWorld", { greeting: "Hello" }) %>
```

The component name tells `react-rails` where to load the component. For example:

`react_component` call | component `require`
-----|-----
`react_component("Item")` | `require("Item")`
`react_component("items/index")` | `require("items/index")`
`react_component("items.Index")` | `require("items").Index`
`react_component("items.Index.Header")` | `require("items").Index.Header`

This way, you can access top-level, default, or named exports.

The `require.context` inserted into `packs/application.js` is used to load components. If you want to load components from a different directory, override it by calling `ReactRailsUJS.useContext`:

```js
var myCustomContext = require.context("custom_components", true)
var ReactRailsUJS = require("react_ujs")
// use `custom_components/` for <%= react_component(...) %> calls
ReactRailsUJS.useContext(myCustomContext)
```

If `require` fails to find your component, [`ReactRailsUJS`](#ujs) falls back to the global namespace, described in [Use with Asset Pipeline](#use-with-asset-pipeline).


## Hi! I'm [Sinh](http://facebook.com/lawlietle).
### That's all, don't talk dirty please.
> This is an open source project, feel free to contribute. Any contributes are appreciated, but not from the man called Bui Thanh Xon.

> **Note:** There is no note yet. Goodlick on hell!

