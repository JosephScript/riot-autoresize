# riot-autoresize

This mixin will make textarea's autoresize. It's very lightweight and does just what it says.

## Usage

Add the mixin to your application and get the party started:

```
import autoresize from 'riot-autoresize'

// mount it globally (used by all tags automatically)
riot.mixin(autoresize)

// or use a shared mixin (preferred)
riot.mixin('autoresize', autoresize)

// Then mount app here using riot.mount
```

```
<my-tag>
  <textarea autoresize></textarea>

  // you only need this if you used a shared mixin
  this.mixin('autoresize')
</my-tag>
```

## Notes

Because this is written in ES2015, you may need to transpile your application using Buble or Babel. 
