export default function () {
  return {
    init: function () {
      this.autoresize = e => {
        e.target.style.height = '1px'
        e.target.style.height = (e.target.scrollHeight) + 'px'
      }
      this.on('mount', function () { 
        let autoresizers = this.root.querySelectorAll('textarea[autoresize]')

        autoresizers.forEach(e => {
          e.style.height = (e.scrollHeight) + 'px'
          e.addEventListener('input', this.autoresize)
        })
      })
    }
  }
}
