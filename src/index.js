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
          x.addEventListener('blur', autoresize)
        })
      }
      this.on('mount', () => {
        select()
      })
      this.on('update', () => {
        select()
      })
      this.on('unmount', () => {
        let autoresizers = this.root.querySelectorAll('textarea[autoresize]') 
        autoresizers.forEach(x => {
          x.removeEventListener('input', autoresize)
          x.removeEventListener('blur', autoresize)
        })
      })
    }
  }
}
