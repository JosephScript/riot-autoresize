# riot-autoresize

This mixin will make `textarea`s autoresize. So when you type/paste a bunch of text they will grow automatically, and shrink back down when you delete it. 

It's very lightweight and does just what it says.

## Installation

```bash
$ npm install riot-autoresize
```

Or:
```bash
yarn add riot-autoresize
```

## Usage

Add the mixin to your application and get the party started:

```javascript
import autoresize from 'riot-autoresize'

// mount it globally (used by all tags automatically)
riot.mixin(autoresize)

// or use a shared mixin (preferred)
riot.mixin('autoresize', autoresize)

// Then mount app here using riot.mount
```

```javascript
<my-tag>
  <textarea autoresize></textarea>

  // you only need this if you used a shared mixin
  this.mixin('autoresize')
</my-tag>
```

I also recommend using `rows="1"` in the `textarea`, and making styling changes via CSS such as `min-height`.

## Notes

Because this is written in ES2015, but transpiled automatically by Babel. If you want to use the raw source you may need to transpile your application using Buble or Babel. 
