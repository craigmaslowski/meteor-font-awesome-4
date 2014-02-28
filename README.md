meteor-font-awesome-local
=========================

This is a reissue of [Michael Bishop's meteor-font-awesome-4](https://github.com/michaelbishop/meteor-font-awesome-4) package. It will install the Font Awesome files locally as opposed to grabbing them from a CDN like the [meteor-font-awesome](https://github.com/nate-strauser/meteor-font-awesome) package does.

It's useful for those who don't want to use a CDN or who want to develop when disconnected from the internet.

---

## How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add font-awesome-local`

## Usage
One change from Michael Bishop's original Meteor package is the inclusion of a Handlebars helper. To use the helper, pass it the name of the icon you wish to display without the `fa-` designator. For example, to render the `fa-plus` icon, add the following to your template.

```
{{faIcon 'plus'}}
```

For general Font Awesome examples, see the [Font Awesome site](http://fortawesome.github.io/Font-Awesome/examples/).
