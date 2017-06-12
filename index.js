export default function () {
  return {
    init: function () {
      let autoresize = e => {
        e.target.style.height = '1px'
        e.target.style.height = (e.target.scrollHeight) + 'px'
      }
      let select = () => {
        let autoresizers = this.root.querySelectorAll('textarea[autoresize]')

        autoresizers.forEach(x => {
          x.style.height = (x.scrollHeight) + 'px'
          x.addEventListener('input', autoresize)
        })
      }
      this.on('mount', function () { 
        select()
      })
      this.on('update', function () { 
        select()
      })
    }
  }
}
