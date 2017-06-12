export default function () {
  return {
    init: function () {
      this.autoresize = e => {
        e.target.style.height = '1px'
        e.target.style.height = (e.target.scrollHeight) + 'px'
      }
      this.select = () => {
        let autoresizers = this.root.querySelectorAll('textarea[autoresize]')

        autoresizers.forEach(x => {
          x.style.height = (x.scrollHeight) + 'px'
          x.addEventListener('input', this.autoresize)
        })
      }
      this.on('mount', function () { 
        this.select()
      })
      this.on('update', function () { 
        this.select()
      })
    }
  }
}
